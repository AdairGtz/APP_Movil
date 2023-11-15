import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import { Icon } from '@rneui/themed'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withRepeat, } from 'react-native-reanimated';

const Toast = () => {

        const { toast } = useContext(GlobalContext)

        const { visible, style, subtitle, title, type } = toast

        const backgroundColor = type === 'success' ? '#00A36E' : 'red'

        return (
                <>
                        {visible && (
                                <Animated.View style={styles.container}>
                                        <View style={[styles.toast, style, { backgroundColor: backgroundColor }]}>
                                                <Icon name={type === 'success' ? 'checkcircleo' : 'exclamationcircleo'} type='antdesign' color='#FFF' size={35} />
                                                <View style={styles.content}>
                                                        <Text style={styles.title}>{title}</Text>
                                                        <Text numberOfLines={2} style={styles.subtitle}>{subtitle}</Text>
                                                </View>
                                        </View>
                                </Animated.View>
                        )
                        }
                </>
        )
}
const styles = StyleSheet.create({
        container: {
                position: 'absolute',
                width: '100%',
                transform: [{ translateY: 20 }],
                alignItems: 'center',
                zIndex: 1,
        },
        toast: {
                width: '90%',
                minHeight: 50,
                backgroundColor: '#00A36E',
                borderRadius: 10,
                alignItems: 'center',
                flexDirection: 'row',
                paddingVertical: 5,
                paddingHorizontal: 10,
                elevation: 5,
                shadowColor: '#000',
        },
        content: {
                marginLeft: 10,
        },
        title: {
                color: '#FFF',
                fontSize: 18,
                fontWeight: 'bold',
        },
        subtitle: {
                width: '100%',
                color: '#FFF',
                fontSize: 14,
        }
})

export default Toast