import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../../styles/shoppingCart.style'
import products from '../../utils/products.json'
import ItemProduct from './itemProduct'
import { GlobalContext } from '../../context/globalContext'
import { Button } from '@rneui/themed'
const ShoppingCart = ({ navigation }) => {


        const { state: { cart, subtotal }, deleteOneProductToCart, increaseQuantityProduct, decreaseQuantityProduct } = useContext(GlobalContext)

        return (
                <View style={styles.container}>
                        <View style={styles.boxSubTotal}>
                                <Text style={styles.subTotal}>Subtotal:</Text>
                                <Text style={[styles.subTotal, { fontWeight: 'normal', color: '#00A36E' }]}>$ {subtotal}</Text>
                        </View>
                        <ScrollView style={{ width: '100%' }}>
                                <View style={{ width: '100%', paddingBottom: 20 }}>
                                        {cart.length === 0 ? (
                                                <Text style={styles.cartOff}>Nada por aca</Text>
                                        ) : (
                                                cart.map(item => (
                                                        <ItemProduct
                                                                key={item.id}
                                                                product={item}
                                                                deleteOneProductToCart={deleteOneProductToCart}
                                                                increaseQuantityProduct={increaseQuantityProduct}
                                                                decreaseQuantityProduct={decreaseQuantityProduct}
                                                        />
                                                )))}
                                </View>
                                <View style={styles.containerSubmit}>
                                        {cart.length > 0 && (
                                                <Button
                                                        title='Comprar'
                                                        color='#00A36E'
                                                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
                                                        containerStyle={{ width: '90%', borderRadius: 20, }}
                                                        onPress={() => navigation.navigate('dispatch')}
                                                />
                                        )}
                                </View>
                        </ScrollView>
                </View>
        )
}

export default ShoppingCart