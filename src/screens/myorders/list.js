import { View, Text } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/themed'
import { styles } from '../../styles/myOrders.style'
import { useNavigation } from '@react-navigation/native'

const List = ({ order }) => {

        const navigation = useNavigation()
        const { total, orderdetails, statusorder, name, quantityproduct, creationdate, deliverydate } = order

        const fomatDate = (date) => {
                const initalDate = creationdate.split(' ')
                return `${initalDate[0]} ${initalDate[1]} ${initalDate[2]}`
        }

        return (
                <View style={styles.boxItem}>
                        <View style={styles.boxImage}>
                                <Image source={{ uri: orderdetails[0].image }} style={styles.image} />
                                <Text style={styles.quantities}>+{quantityproduct}</Text>
                        </View>
                        <View style={styles.boxContent}>
                                <View style={styles.boxView}>
                                        <Text style={styles.bold}>Recibe:</Text>
                                        <Text>{name}</Text>
                                </View>
                                <View style={styles.boxView}>
                                        <Text style={styles.bold}>Total:</Text>
                                        <Text style={{ color: '#00A36E' }}>$ {total}</Text>
                                </View>
                                <View style={styles.boxView}>
                                        <View style={styles.statusBox}>
                                                <Text style={styles.bold}>Estado:</Text>
                                                <Text>{statusorder}</Text>
                                        </View>
                                        <View>
                                                <Button
                                                        title='ver detalles'
                                                        containerStyle={styles.buttonDetail}
                                                        color='transparent'
                                                        buttonStyle={{ padding: 0 }}
                                                        titleStyle={{ color: '#00A36E', fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 14 }}
                                                        onPress={() => navigation.navigate('orderdetails', { order })}
                                                />
                                        </View>
                                </View>
                                <View style={[styles.boxView, { justifyContent: 'center' }]}>
                                        <Text style={styles.estimatedDate}>{fomatDate(creationdate)} | {fomatDate(deliverydate)}</Text>
                                </View>
                        </View>
                </View>
        )
}

export default List