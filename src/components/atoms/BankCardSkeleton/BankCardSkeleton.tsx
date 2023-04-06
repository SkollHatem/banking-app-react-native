import { View } from "react-native";

const BankCardSkeleton = () => (
    <View className="mx-2 my-1.5 flex-row items-center rounded-xl bg-light-body p-3 pl-2">
        <View className="mr-2 h-16 w-16 animate-spin overflow-hidden rounded-lg bg-gray-200 " />
        <View className="flex-1 space-y-3">
            <View className="h-2 w-[40%] rounded-md bg-gray-200 " />
            <View className="space-y-2">
                <View className="h-1.5 w-3/5 rounded-md bg-gray-200" />
                <View className="h-1.5 w-10/12 rounded-md bg-gray-200" />
                <View className="h-1.5 w-4/6 rounded-md bg-gray-200" />
            </View>
        </View>
    </View>
);

export default BankCardSkeleton;
