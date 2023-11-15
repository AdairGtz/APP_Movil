import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from '../../styles/home.style'
import { ButtonGroup, SearchBar } from '@rneui/themed'
import ProductsHome from './productsHome'
import useProducts from '../../hooks/useProducts'

const imageHome = require('../../../assets/image_principal.jpg')

const HomeScreen = ({ navigation }) => {

        const { products, loading, categories, selectedIndexes, setSelectedIndexes, search, searchProducts, onChangeSearch,setSearch } = useProducts()

        return (
                <ScrollView horizontal={false}>
                        <View style={styles.containerHome}>
                                <View style={styles.containerSearching}>
                                        <SearchBar
                                                placeholder='Busca aqui tus plantas favoritas'
                                                onChangeText={(value) => setSearch(value)}
                                                value={search}
                                                onSubmitEditing={() => searchProducts(search)}
                                                containerStyle={styles.containerStyle}
                                                inputContainerStyle={styles.inputContainerStyle}
                                                inputStyle={styles.inputStyleSearch}
                                        />
                                </View>
                                <View style={styles.containerImage}>
                                        <Image style={styles.mainImage} source={imageHome} />
                                </View>
                                <Text style={styles.textFilter}>Categorias</Text>
                                <View style={styles.containerCategories}>
                                        <ScrollView horizontal={true} contentContainerStyle={styles.scrollCategories} showsHorizontalScrollIndicator={false}>
                                                <ButtonGroup
                                                        buttons={categories}
                                                        containerStyle={styles.containerButtonGroup}
                                                        buttonContainerStyle={styles.buttonCategories}
                                                        selectMultiple
                                                        selectedButtonStyle={styles.selectedButtonStyle}
                                                        buttonStyle={styles.buttonStyle}
                                                        selectedIndexes={selectedIndexes}
                                                        onPress={(value) => setSelectedIndexes(value)}
                                                />
                                        </ScrollView>
                                </View>
                                <ProductsHome
                                        products={products}
                                        loading={loading}
                                />
                        </View>
                </ScrollView>
        )
}

export default React.memo(HomeScreen)
