import { Dimensions, StyleSheet } from "react-native";

const widthScreen = Dimensions.get('window').width;
export const styles = StyleSheet.create({
        containerHome: {
                flex: 1,
                rowGap: 10,
                padding: 10,
        },
        textFilter: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#00A36E'
        },
        containerSearching: {

        },
        containerImage: {
                position: 'relative',
                width: '100%',
                height: 200,
                borderWidth: 1,
                borderColor: '#C0C0C0',
                overflow: 'hidden',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
        },
        mainImage: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
        },
        containerContent: {
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: 10,
        },
        title: {
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
        },
        subTitle: {
                fontSize: 18,
                textAlign: 'center',
        },
        content: {
                fontSize: 14,
                textAlign: 'justify',
        },
        containerStyle: {
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: 'transparent',
                padding: 2
        },
        inputContainerStyle: {
                backgroundColor: '#FFF',
                padding: 0,
                margin: 0,
                borderRadius: 30,
        },
        inputStyleSearch: {
                backgroundColor: 'transparent',
                color: '#000',
                padding: 0,
                margin: 0,
                fontSize: 14
        },
        containerCategories: {
                width: '100%',
        },
        scrollCategories: {
                columnGap: 20,
        },
        containerButtonGroup: {
                backgroundColor: 'transparent',
                borderWidth: 0,
                height: 30,
                gap: 10,
        },
        buttonCategories: {
                backgroundColor: '#00A36E',
                color: '#FFF',
                width: 100,
                height: 25,
                borderRadius: 20,
        },
        selectedButtonStyle: {
                backgroundColor: '#00A36E',
                borderRadius: 30,

        },
        buttonStyle: {
                backgroundColor: '#C0C0C0',
                gap: 20,
                borderRadius: 20,
                borderWidth: 0,
                borderColor: 'transparent',
                color: '#FFF',
        },
        //estilos de los productos de la home
        containerProducts: {
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                rowGap: 10,
                paddingBottom: 70,
        },
        item: {
                position: 'relative',
                width: widthScreen / 2 - 15,
                height: 300,
                backgroundColor: 'transparent',
                alignItems: 'center',
        },
        boxContent: {
                position: 'relative',
                flex: 1,
                width: '100%',
                elevation: 2,
                borderRadius: 10,
                backgroundColor: '#FFF',
                marginTop: 30,
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: 10,
        },
        separator: {
                gap: 10,
                marginBottom: 15,
        },
        boxImage: {
                position: 'absolute',
                width: '100%',
                height: 'auto',
                aspectRatio: 1,
                borderRadius: 90,
                elevation: 2,
                overflow: 'hidden',
                top: -30,
        },
        imageProduct: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
        },
        textNameProduct: {
                width: '100%',
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
        },
        boxPrice: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: 5,
                alignItems: 'center',
        },
        textPriceProduct: {
                fontSize: 20,
                fontWeight: 'bold',
                color: "#00A36E"
        },
        boxStar: {
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
        },
        numberStart: {
                color: '#CCCCCC',
                fontSize: 18,
                fontWeight: 'bold',
        },
        buttonAdd: {
                width: '80%',
                height: 40,
                borderRadius: 10,
        }

});

