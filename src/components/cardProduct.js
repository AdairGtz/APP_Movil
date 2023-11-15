import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Icon, Image } from '@rneui/themed'
import { styles } from '../styles/cardProduct.style'
import { GlobalContext } from '../context/globalContext'

const CardProduct = ({ product }) => {

        const { image, title, price, id } = product

        const navigation = useNavigation()
        const { addToCart } = useContext(GlobalContext)

        const getProductId = () => {
                navigation.navigate('productdetails', { id })
        }

        return (
                <View style={styles.item}>
                        <Pressable style={styles.boxContent} onPress={getProductId}>
                                <View style={styles.boxImage}>
                                        {image === '' ? (
                                                <Icon name='image' type='antdesign' color='#CCC' />
                                        ) : (
                                                <Image style={styles.imageProduct} source={{ uri: image }} />
                                        )}
                                </View>
                                <Text style={styles.textNameProduct}>{title}</Text>
                                <View style={styles.boxPrice}>
                                        <Text style={styles.textPriceProduct}>${price}</Text>
                                        <View style={styles.boxStar}>
                                                <Icon name='star' type='antdesign' color='#FFB549' />
                                                <Text style={styles.numberStart}>5</Text>
                                        </View>
                                </View>
                        </Pressable>
                        <Button
                                title=''
                                icon={<Icon name='shoppingcart' type='antdesign' color='#FFF' size={30} />}
                                containerStyle={styles.buttonAdd}
                                color='#9973DA'
                                onPress={() => addToCart(product)}
                        />
                </View>
        )
}



export default CardProduct