import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';

const FadeInAnimation = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={{ color: 'white', fontSize: 64 }}>
                {(props.value - 273).toFixed(2)}&deg; C
            </Text>
        </Animated.View>
    );
};

export default FadeInAnimation;
