import { FC, useEffect } from "react";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withSequence,
} from "react-native-reanimated";

const BlinkingBox: FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const shareValue = useSharedValue(0);
    const opacity = useAnimatedStyle(() => ({
        opacity: shareValue.value,
    }));

    const animConfig = { duration: 600, easing: Easing.inOut(Easing.ease) };

    useEffect(() => {
        const animate = () => {
            shareValue.value = withSequence(
                withTiming(1, animConfig),
                withTiming(0, animConfig)
            );
        };
        animate();
        const interval = setInterval(() => {
            animate();
        }, animConfig.duration * 2);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <Animated.View style={[opacity]}>{children}</Animated.View>;
};

export default BlinkingBox;
