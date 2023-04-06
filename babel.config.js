module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            "react-native-reanimated/plugin",
            [
                "module-resolver",
                {
                    alias: {
                        "@atoms": "./src/components/atoms",
                        "@molecules": "./src/components/molecules",
                        "@screens": "./src/screens",
                        "@hooks": "./src/hooks",
                    },
                },
            ],
        ],
    };
};
