import { FC } from "react";
import { View, Image, Text } from "react-native";

interface BankCardProps {
    img: string;
    name: string;
    description: string;
}

const BankCard: FC<BankCardProps> = ({ img, name, description }) => (
    <View className="mx-4 my-1.5 flex-row rounded-xl bg-light-body p-3">
        <View className="mr-2 h-16 w-16 overflow-hidden rounded-lg">
            <Image
                className="flex-1"
                source={{
                    uri: img,
                }}
                style={{
                    resizeMode: "stretch",
                }}
            />
        </View>
        <View className="flex-1">
            <Text className="text-lg font-bold text-light-text">{name}</Text>
            <Text className="text-xs text-light-text">{description}</Text>
        </View>
    </View>
);

export default BankCard;
