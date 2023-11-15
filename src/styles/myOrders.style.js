import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#f2f2f2',
                gap: 10,
                paddingBottom: 80
        },
        boxItem: {
                width: '100%',
                height: 120,
                flexDirection: 'row',
                borderRadius: 10,
                backgroundColor: 'white',
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.1)',
        },
        boxImage: {
                position: 'relative',
                width: '30%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
        },
        boxContent: {
                width: '70%',
                height: '100%',
                paddingLeft: 10,
                justifyContent: 'center',
                gap: 4
        },
        image: {
                width: 100,
                height: 100,
                borderRadius: 5,
        },
        quantities: {
                position: 'absolute',
                top: 0,
                right: 0,
                fontSize: 18,
                fontWeight: 'bold',
        },
        boxView: {
                flexDirection: 'row',
                height: 20,
                alignItems: 'center',
        },
        bold: {
                fontWeight: 'bold',
                fontSize: 16,
                marginRight: 5
        },
        statusBox: {
                marginRight: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 100
        },
        estimatedDate: {
                fontSize: 14,
                color: 'gray'
        },
        buttonDetail: {
                width: 'auto',
                height: 'auto',
                padding: 0,
                margin: 0,
        },
        containerOrderDetail: {
                flex: 1,
                padding: 10,
                borderRadius: 10,
                gap: 10,
                marginBottom: 80
        },
        status: {
                width: '100%',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16
        },
        containerProduct: {
                width: '100%',
                height: 'auto',
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.1)',
                gap: 10,
                backgroundColor: '#FFF'
        },
        titleProduct: {
                width: '100%',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18
        },
        imageProduct: {
                width: 50,
                height: 50,
                borderRadius: 5,
        },
        cardProduct: {
                width: '100%',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(0,0,0,0.1)',
                padding: 10,
        },
        productDetail: {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
        },
        orderDetailsContent: {
                width: '100%',
                alignItems: 'center',
                gap: 10
        },
        contentDetail: {
                width: '100%',
                flexDirection: 'row',
        },
        boxProcess: {
                flex: 1,
                justifyContent: 'center',
        },
        circle: {
                width: 22,
                height: 22,
                borderRadius: 15,
                backgroundColor: 'white',
                borderColor: '#00A36E',
                borderWidth: 3,
                alignItems: 'center',
                justifyContent: 'center'
        },
        linear: {
                position: 'relative',
                width: 3,
                height: 90,
                backgroundColor: '#00A36E',
                left: 10,
        },
        content: {
                flex: 1,
                gap: 2,
        },
        containerDirection: {
                width: '100%',
                paddingHorizontal: 10,
                paddingVertical: 30,
                borderRadius: 10,
        }
});
