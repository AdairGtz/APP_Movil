import { Dimensions, StyleSheet } from "react-native";

const widthScreen = Dimensions.get('window').width

export const styles = StyleSheet.create({
        container: {
                width: '100%',
                backgroundColor: '#DBEFED',
                alignItems: 'center',
                paddingBottom: 80,
        },
        boxImage: {
                position: 'relative',
                width: '100%',
                height: 'auto',
                aspectRatio: 1 / 1,
                backgroundColor: '#CCC',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 3,
        },
        image: {
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                aspectRatio: 1 / 1,
        },
        boxCard: {
                width: widthScreen - 20,
                height: 'auto',
                backgroundColor: '#FFF',
                padding: 10,
                elevation: 3,
                marginTop: 10,
                borderRadius: 10,
        },
        boxPrice: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                height: 30
        },
        price: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#00A36E',
        },
        titleStock: {
                fontSize: 14,
                color: '#000',
                fontWeight: 'bold',
        },
        stock: {
                fontSize: 14,
                color: '#00A36E',
        },
        boxRating: {
                flexDirection: 'row',
        },
        boxColor: {
                flexDirection: 'row',
                gap: 5,
        },
        caracteristics: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
        },
        boxVariant: {
                width: 130,
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: 5,
        },
        size: {
                width: 30,
                height: 25,
                borderWidth: 1,
                borderColor: '#00A36E',
                textAlign: 'center',
                fontSize: 16,
        },
        sizeSelected: {
                backgroundColor: '#00A36E',
                color: '#FFF',
        },
        buttonAddProduct: {
                position: 'absolute',
                width: 60,
                height: 60,
                bottom: 10,
                right: 10,
                borderRadius: 50,
                padding: 10,
                backgroundColor: '#9973DA',
                alignItems: 'center',
                justifyContent: 'center',
        },
        boxWeOffer: {
                gap: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
        },
        contentWeOffer: {
                width: 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
        },
        boxComments: {
                flex: 1,
        }

})