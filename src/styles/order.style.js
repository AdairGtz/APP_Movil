import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        containerOrder: {
                width: '100%',
                height: 'auto',
                rowGap: 10,
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
        },
        content: {
                width: '90%',
                height: 'auto',
                rowGap: 10,
                padding: 10,
                backgroundColor: '#FFF',
                borderRadius: 10,
                elevation: 5,
        },
        title: {
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
        },
        dataOrder: {
                rowGap: 5,
        },
        boxTotal: {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                borderColor: '#CCC',
                borderTopWidth: 1,
                paddingTop: 5,
                gap: 5,
        },
        containerButton: {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
        },
        buttons: {
                width: '45%',
                borderRadius: 30,
        }
})