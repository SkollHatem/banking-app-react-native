import AsyncStorage from "@react-native-async-storage/async-storage";

const APP_KEY = "@BankingApp:";

const useStorage = () => {
    const setData = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(APP_KEY + key, value);
        } catch (error) {
            console.error(error);
        }
    };
    const getData = async <T>(key: string): Promise<T | undefined> => {
        try {
            const value = await AsyncStorage.getItem(APP_KEY + key);
            if (value !== null) {
                return JSON.parse(value);
            }
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };

    return {
        setData,
        getData,
    };
};

export default useStorage;
