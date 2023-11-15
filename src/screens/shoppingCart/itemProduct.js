import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/shoppingCart.style'
import { Button, Image } from '@rneui/themed'
import { DeleteIcon } from '../../icons/icons'
import { StatusBar } from 'expo-status-bar'

const ItemProduct = ({ product, deleteOneProductToCart, increaseQuantityProduct, decreaseQuantityProduct }) => {



        const { image, title, price, id, quantity } = product

        return (
                <View style={styles.boxProduct}>
                        <View style={styles.boxImage}>
                                <Image style={{ width: 100, height: 100 }} source={{ uri: image }} />
                        </View>
                        <View style={styles.content}>
                                <Text style={styles.titleProduct}>{title}</Text>
                                <View style={styles.boxPrice}>
                                        <Text style={styles.nameValue}>Unitario:</Text>
                                        <Text style={styles.valueProduct}>$ {price}</Text>
                                </View>
                                <View style={styles.boxPrice}>
                                        <Text style={styles.nameValue}>Total:</Text>
                                        <Text style={styles.valueProduct}>$ {price * quantity}</Text>
                                </View>
                                <View style={styles.boxQuantity}>
                                        <Button
                                                title='-' color='transparent'
                                                titleStyle={{ fontSize: 20, fontWeight: 'bold', height: 28 }}
                                                containerStyle={{ height: 30, justifyContent: 'center' }}
                                                onPress={() => decreaseQuantityProduct(id)}
                                        />
                                        <Text style={styles.quantity}>{quantity}</Text>
                                        <Button
                                                title='+'
                                                color='transparent'
                                                titleStyle={{ fontSize: 18, fontWeight: 'bold', height: 25 }}
                                                containerStyle={{ height: 30, justifyContent: 'center' }}
                                                onPress={() => increaseQuantityProduct(id)}
                                        />
                                </View>
                        </View>
                        <View style={styles.buttonDelete}>
                                <Button icon={<DeleteIcon color='red' />} onPress={() => deleteOneProductToCart(id)} color="transparent" />
                        </View>
                </View>
        )
}

export default ItemProduct