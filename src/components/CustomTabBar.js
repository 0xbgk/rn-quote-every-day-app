import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppStyles from '../styles/AppStyles';

const {
    windowHeight,
    FONT_COLOR,
    HEADER_COLOR,
    WORKOUT_CIRCLE_FULL,
    BACKGROUND_COLOR
} = AppStyles;

export function CustomTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const { touchableOpacityStyle } = styles

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    Keyboard.dismiss();

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                switch (label) {
                    case 'Home':
                        {
                            return (
                                <TouchableOpacity
                                    key={route.key}
                                    onPress={(onPress)}
                                    style={touchableOpacityStyle}>
                                    <Icon name="comment-dots" size={36} color={isFocused ? WORKOUT_CIRCLE_FULL : FONT_COLOR} />
                                </TouchableOpacity>
                            )
                        }
                        break;
                    case 'Settings':
                        {
                            return (
                                <TouchableOpacity
                                    key={route.key}
                                    onPress={onPress}
                                    style={touchableOpacityStyle}>
                                    <Icon name="question-circle" size={36} color={isFocused ? WORKOUT_CIRCLE_FULL : FONT_COLOR} />
                                </TouchableOpacity>
                            )
                        }
                        break;

                    default:
                        {
                            return (
                                <Text>Default</Text>
                            )
                        }
                        break;
                }
            })}
        </View >
    );
}


const styles = StyleSheet.create({
    touchableOpacityStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR,
        height: windowHeight / 14,
        borderColor: BACKGROUND_COLOR,
        borderWidth: 2,
        borderTopColor: HEADER_COLOR,
        borderRightColor: HEADER_COLOR
    }
})