import { View, Text, NativeModules, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

const Toolbar = () => (
    <View
        className="border-b border-gray-200"
        style={{
            paddingTop: STATUSBAR_HEIGHT,
        }}
    >
        <View className="h-16 flex-row items-center">
            <View className="mx-1 px-3">
                <Feather name="arrow-left" size={24} color="#1B1B1F" />
            </View>
            <Text className="text-xl text-light-text">Bank Lists</Text>
        </View>
    </View>
);

export default Toolbar;
