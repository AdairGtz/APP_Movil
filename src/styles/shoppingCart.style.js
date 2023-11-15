import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        container: {
                flex: 1,
                padding: 10,
                alignItems: 'center',
                gap: 10,
        },
        boxSubTotal: {
                width: '80%',
                height: 'auto',
                padding: 10,
                backgroundColor: '#FFF',
                elevation: 2,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                borderRadius: 10,
        },
        subTotal: {
                fontSize: 18,
                fontWeight: 'bold',
        },
        boxProduct: {
                width: '100%',
                height: 'auto',
                padding: 10,
                flexDirection: 'row',
                backgroundColor: '#FFF',
                elevation: 2,
                borderRadius: 10,
                marginTop: 10,
        },
        titleProduct: {
                width: '100%',
                fontSize: 16,
                fontWeight: 'bold',
        },
        boxPrice: {
                width: '100%',
                flexDirection: 'row',
                columnGap: 5,
        },
        boxImage: {
                paddingRight: 5,
        },
        nameValue: {
                fontWeight: 'bold',
        },
        valueProduct: {
                color: '#00A36E',
                fontWeight: 'bold',
        },
        content: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
        },
        buttonDelete: {
                justifyContent: 'center',
        },
        boxQuantity: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                backgroundColor: '#9973DA',
                columnGap: 10,
                borderRadius: 10,
        },
        quantity: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#FFF',
        },
        cartOff: {
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
        },
        containerSubmit: {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 70
        }

});