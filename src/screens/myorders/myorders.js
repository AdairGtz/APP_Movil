import { View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import useOrders from '../../hooks/useOrders'
import { styles } from '../../styles/myOrders.style'
import List from './list'
import { ScrollView } from 'react-native-gesture-handler'

const MyOrders = ({ route, navigation }) => {

        const { myOrders, getMyOrder } = useOrders()
        useEffect(() => {
                const unsubscribe = navigation.addListener('focus', () => {
                        getMyOrder()
                });

                return unsubscribe;
        }, [navigation]);

        return (
                <ScrollView>
                        <View style={styles.container}>
                                {myOrders.map((order, index) => (
                                        <List key={index} order={order} />
                                ))}
                        </View >
                </ScrollView>
        )
}


export default MyOrders