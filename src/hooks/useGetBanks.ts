import { useEffect, useState } from "react";
import useStorage from "./useStorage";

type Bank = {
    key?: string;
    description: string;
    age: number;
    url: string;
    bankName: string;
};

const KEY = "BANKS";

const useGetBanks = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<Bank[]>();
    const store = useStorage();

    const getBanks = async () => {
        setLoading(true);

        setTimeout(async () => {
            try {
                const res = await fetch(
                    "https://dev.obtenmas.com/catom/api/challenge/banks"
                );
                const resData = await res.json();
                setData(resData);
                store.setData(KEY, JSON.stringify(resData));
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        const verifyLocalData = async () => {
            const localData = await store.getData<Bank[]>(KEY);
            if (localData !== undefined) {
                setData(localData);
            } else {
                getBanks();
            }
        };
        verifyLocalData();
    }, []);

    return {
        data,
        isLoading,
        refetch: getBanks,
    };
};

export default useGetBanks;
