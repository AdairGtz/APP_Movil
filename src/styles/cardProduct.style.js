import { Dimensions, StyleSheet } from "react-native"
const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
        item: {
                position: 'relative',
                width: width / 2 - 15,
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



})