import { View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../../styles/home.style'
import CardProduct from '../../components/cardProduct'
import SkeletonProduct from './skeletonProduct'

const ProductsHome = ({products, loading}) => {

        return (
                <View style={styles.containerProducts}>
                        <SafeAreaView />
                        {loading ? <SkeletonProduct /> : (
                                <FlatList
                                        scrollEnabled={false}
                                        columnWrapperStyle={styles.separator}
                                        style={styles.list}
                                        data={products}
                                        numColumns={2}
                                        renderItem={({ item }) => <CardProduct product={item} />}
                                        keyExtractor={item => item.id.toString()}
                                />
                        )}
                </View>
        )
}

export default ProductsHome