import { View, ScrollView, Alert, Text } from 'react-native'
import React, { useState } from 'react'
import NameSteps from '../../components/nameSteps'
import { Button } from '@rneui/themed'
import CardDispatch from './cardDispatch'
import { styles } from '../../styles/dispatch.style'
import useAddress from '../../hooks/useAddress'
import { Link } from '@react-navigation/native'
const Dispatch = ({ route, navigation }) => {

        const { listAddresses, loading: { address } } = useAddress()
        const [dispatchSelected, setDispatchSelected] = useState(null)

        const goToOrder = () => {

                if (dispatchSelected == null) {
                        Alert.alert('Selecciona una dirección de envío')
                        return
                }
                navigation.navigate('order', { progress: 50, dispatchSelected: dispatchSelected })
        }

        return (
                <View>
                        <NameSteps progress={0} />
                        <ScrollView>
                                <View style={styles.container}>
                                        {address ? (
                                                <Text>Cargando...</Text>
                                        ) : (
                                                listAddresses.length === 0 ? (
                                                        <Text>No hay direcciones</Text>
                                                ) : (
                                                        listAddresses.map(item => (
                                                                <CardDispatch
                                                                        key={item.id}
                                                                        item={item}
                                                                        dispatchSelected={dispatchSelected}
                                                                        setDispatchSelected={setDispatchSelected}
                                                                />
                                                        ))
                                                )
                                        )}
                                        {listAddresses.length === 0 ? (
                                                <Link to="addresses">Agregar direcciones</Link>
                                        ) : (
                                                <Button
                                                        title="Siguiente"
                                                        onPress={() => goToOrder()}
                                                        containerStyle={styles.submitButton}
                                                        titleStyle={styles.textButton}
                                                        color="#00A36E"
                                                />
                                        )}
                                </View>
                        </ScrollView>
                </View>
        )
}

export default Dispatch