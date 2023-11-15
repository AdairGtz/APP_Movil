import { View, Text, ScrollView } from 'react-native'
import React, { useContext} from 'react'
import NameSteps from '../../components/nameSteps'
import { Button } from '@rneui/base'
import { styles } from '../../styles/order.style'
import ListItem from '../../components/listItem'
import { UserIcon } from '../../icons/icons'
import { GlobalContext } from '../../context/globalContext'

const Order = ({ route, navigation }) => {

        const { state: { subtotal, quantityProducts } } = useContext(GlobalContext)
        const { progress, dispatchSelected: { name, street, numberStreet, city, state } } = route.params

        goToPayment = () => {
                navigation.navigate('payment', { progress: 100, dispatchSelected: route.params.dispatchSelected })
        }

        return (
                <View>
                        <NameSteps progress={progress} />
                        <ScrollView>
                                <View style={styles.containerOrder}>
                                        <View style={styles.content}>
                                                <Text style={styles.title}>Confirmar Compra</Text>
                                                <View style={styles.dataOrder}>
                                                        <ListItem
                                                                icon={<UserIcon size={30} />}
                                                                title="Recibe:"
                                                                subtitle={name}
                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                subTitleStyle={{ fontSize: 14 }}
                                                                iconShow={false}
                                                        />
                                                        <ListItem
                                                                title='Domicilio'
                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                subtitle={`${city}, ${street} ${numberStreet}, ${state}`}
                                                                iconShow={false}
                                                        />
                                                        <ListItem
                                                                title='Cantidad de productos:'
                                                                subtitle={quantityProducts}
                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                subTitleStyle={{ fontSize: 14 }}
                                                                iconShow={false}
                                                        />
                                                        <ListItem
                                                                title='Subtotal:'
                                                                subtitle={`$ ${subtotal}`}
                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                subTitleStyle={{ fontSize: 14 }}
                                                                iconShow={false}
                                                        />
                                                        <ListItem
                                                                title='Envio:'
                                                                subtitle="Gratis"
                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                subTitleStyle={{ fontSize: 14 }}
                                                                iconShow={false}
                                                        />
                                                        <View style={styles.boxTotal}>
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total:</Text>
                                                                <Text style={{ fontSize: 18 }}>$ {subtotal}</Text>
                                                        </View>
                                                </View>
                                                <View style={styles.containerButton}>
                                                        <Button title="Cancelar" containerStyle={styles.buttons} color="red" onPress={() => navigation.navigate('dispatch', { progress: 0 })} />
                                                        <Button title="Ir a pagar" onPress={() => goToPayment()} containerStyle={styles.buttons} color="#00A36E" />
                                                </View>
                                        </View>
                                </View>
                        </ScrollView>
                </View>
        )
}

export default Order