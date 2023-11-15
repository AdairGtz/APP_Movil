import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/myOrders.style'
import { Icon, Image } from '@rneui/themed'
import { ScrollView } from 'react-native-gesture-handler'
import ListItem from '../../components/listItem'
import { BoxIcon, CreditCardIcon, ShoppingCartIcon } from '../../icons/icons'

const Ordendetails = ({ route, navigation }) => {

        const { order } = route.params

        console.log(order)

        const { name, statusorder, orderdetails, street, numberStreet, state, city, total, quantityproduct, shippingcost, creationdate, deliverydate, paymentmethod } = order

        const statusProgress = (statusorder) => {
                if (statusorder == 'Pendiente') {
                        return 0
                } else if (statusorder == 'En proceso') {
                        return 50
                }
                return 100
        }

        return (
                <ScrollView style={{ flex: 1 }}>
                        <View style={styles.containerOrderDetail}>
                                <Text style={[styles.status, { color: statusorder == "Pendiente" ? 'red' : '#00A36E' }]}>Estado: {statusorder}</Text>
                                <View style={styles.containerProduct}>
                                        <Text style={styles.titleProduct}>Productos</Text>
                                        <View style={{ width: '100%', alignItems: 'center' }}>
                                                {orderdetails.map((item, index) => (
                                                        <View key={index} style={styles.cardProduct}>
                                                                <View style={{ width: 50 }}>
                                                                        <Image source={{ uri: item.image }} style={styles.imageProduct} />
                                                                </View>
                                                                <View style={styles.productDetail}>
                                                                        <View style={{ flex: 1 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                                                                                <Text>${item.price} X {item.quantity}</Text>
                                                                        </View>
                                                                        <View style={{ width: 130, alignItems: 'center', justifyContent: 'center' }}>
                                                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${item.price * item.quantity}</Text>
                                                                        </View>
                                                                </View>
                                                        </View>
                                                ))}
                                                <View style={styles.orderDetailsContent}>
                                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 5 }}>Detalles</Text>
                                                        <View style={styles.contentDetail}>
                                                                <View style={styles.boxProcess}>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                                <View style={[styles.circle, { borderColor: statusProgress(statusorder) >= 0 ? '#00A36E' : '#CCC' }]}>
                                                                                        <View style={{ backgroundColor: statusProgress(statusorder) >= 0 ? '#00A36E' : '#CCC', width: 10, height: 10, borderRadius: 5 }}></View>
                                                                                </View>
                                                                                <Text style={{ paddingLeft: 10 }}>En proceso</Text>
                                                                        </View>
                                                                        <View style={styles.linear}></View>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                                <View style={[styles.circle, { borderColor: statusProgress(statusorder) >= 50 ? '#00A36E' : '#CCC' }]}>
                                                                                        <View style={{ backgroundColor: statusProgress(statusorder) >= 50 ? '#00A36E' : '#CCC', width: 10, height: 10, borderRadius: 5 }}></View>
                                                                                </View>
                                                                                <Text style={{ paddingLeft: 10 }}>En Camino</Text>
                                                                        </View>
                                                                        <View style={styles.linear}></View>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                                <View style={[styles.circle, { borderColor: statusProgress(statusorder) >= 100 ? '#00A36E' : '#CCC' }]}>
                                                                                        <View style={{ backgroundColor: statusProgress(statusorder) >= 100 ? '#00A36E' : '#CCC', width: 10, height: 10, borderRadius: 5 }}></View>
                                                                                </View>
                                                                                <Text style={{ paddingLeft: 10 }}>Entregado</Text>

                                                                        </View>
                                                                </View>
                                                                <View style={styles.content}>
                                                                        <ListItem
                                                                                icon={<Icon name="right" type='antdesign' color='#00A36E' size={25} />}
                                                                                iconShow={false}
                                                                                title='Subotal:'
                                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                                subtitle={`$ ${total - (shippingcost ?? 0)}`}
                                                                        />
                                                                        <ListItem
                                                                                icon={<Icon name="right" type='antdesign' color='#00A36E' size={25} />}
                                                                                iconShow={false}
                                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                                title='Envio:'
                                                                                subtitle={shippingcost ?? 0 == 0 ? 'Gratis' : `$ ${shippingcost}`}
                                                                        />
                                                                        <ListItem
                                                                                icon={<Icon name="right" type='antdesign' color='#00A36E' size={25} />}
                                                                                iconShow={false}
                                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                                title='Total:'
                                                                                subtitle={total + (shippingcost ?? 0)}
                                                                        />
                                                                        <ListItem
                                                                                containerStyle={{ paddingLeft: 2 }}
                                                                                icon={<BoxIcon color='#00A36E' size={23} />}
                                                                                iconShow={false}
                                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                                title='Unidades:'
                                                                                subtitle={quantityproduct}
                                                                        />

                                                                        <ListItem
                                                                                icon={<ShoppingCartIcon color='#00A36E' />}
                                                                                iconShow={false}
                                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                                title='Comprado:'
                                                                                subtitle={creationdate}
                                                                        />
                                                                        <ListItem
                                                                                icon={<ShoppingCartIcon color='#00A36E' />}
                                                                                iconShow={false}
                                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                                title='Llega:'
                                                                                subtitle={deliverydate}
                                                                        />
                                                                        <ListItem
                                                                                icon={<CreditCardIcon />}
                                                                                iconShow={false}
                                                                                titleStyle={{ fontWeight: 'bold' }}
                                                                                title='Metodo de pago:'
                                                                                subtitle={paymentmethod.name}
                                                                        />
                                                                </View>
                                                        </View>
                                                </View>
                                                <View style={styles.containerDirection}>
                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>El pedido esta en estado: {statusorder}</Text>
                                                        <Text>El o los productos llegaran a {street}, {numberStreet}, {state}, {city} y recibe {name}</Text>
                                                </View>
                                        </View>
                                </View>
                        </View>
                </ScrollView>

        )
}

export default Ordendetails