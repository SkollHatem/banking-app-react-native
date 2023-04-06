import { StatusBar } from "expo-status-bar";
import { View, FlatList } from "react-native";

// Atoms
import { BankCard, BankCardSkeleton, BlinkingBox } from "@atoms";

// Molecules
import { Toolbar } from "@molecules";
import { useGetBanks } from "@hooks";

const HomePage = () => {
    const { data, isLoading, refetch } = useGetBanks();
    const loaders = [1, 2, 3, 4];

    return (
        <View className="flex-1 bg-light-body">
            <StatusBar style="dark" />
            <Toolbar />
            <View className="relative flex-1 bg-light-header">
                {isLoading && (
                    <View className="absolute top-0 w-full px-2 pt-2">
                        {loaders.map((l) => (
                            <BlinkingBox key={l}>
                                <BankCardSkeleton />
                            </BlinkingBox>
                        ))}
                    </View>
                )}
                {!isLoading && data?.length && (
                    <FlatList
                        data={[...data, ...data, ...data]}
                        keyExtractor={(item, index) => item.bankName + index}
                        ListHeaderComponent={() => <View className="h-2" />}
                        ListFooterComponent={() => <View className="h-2" />}
                        onRefresh={refetch}
                        refreshing={isLoading}
                        renderItem={({ item }) => (
                            <BankCard
                                key={item.key}
                                name={item.bankName}
                                description={item.description}
                                img={item.url}
                            />
                        )}
                    />
                )}
            </View>
        </View>
    );
};

export default HomePage;
