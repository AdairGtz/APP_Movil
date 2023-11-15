import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/addresses.style'
import { Button } from '@rneui/themed'
import { DeleteIcon } from '../../icons/icons'

const ItemAddress = ({ address, deleteAddress, loading, activeEdit }) => {

        const { loaderDelete } = loading
        const { id, street, numberStreet, reference, city, state, code, name } = address

        return (
                <View style={styles.itemAddress}>
                        <View style={styles.item}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>C.P. {code}</Text>
                                <Text style={{ fontSize: 18, color: '#00A36E' }}>{street} {numberStreet}</Text>
                                <Text style={{ fontSize: 18 }}>{name}</Text>
                                <Text style={{ color: '#CCC' }}>{reference ?? "Sin referencia"}</Text>
                                <Button
                                        title='Editar'
                                        titleStyle={{ color: '#009ADA', fontWeight: 'bold' }}
                                        color='none'
                                        containerStyle={{ flex: 1, alignItems: 'flex-start' }}
                                        onPress={() => activeEdit(address)}
                                />
                        </View>
                        <View style={styles.boxDelete}>
                                <Button icon={<DeleteIcon color='red' />} color='none' onPress={() => deleteAddress(id)} loading={loaderDelete.id === id && loaderDelete.loader} loadingProps={{ size: 'large', color: 'red' }} />

                        </View>
                </View>
        )
}

export default ItemAddress