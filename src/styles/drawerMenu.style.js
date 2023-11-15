import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
        container: {
                flex: 1,
                width: '100%',
        },
        containerProfile: {
                width: '100%',
                height: '25%',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
        },
        name: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#FFF',
                marginTop: 10,
        },
        email: {
                fontSize: 15,
                color: '#000',
        },
        containerInformation: {
                flex: 1,
                width: '100%',
                backgroundColor: '#FFF',
                padding: 10,
                alignItems: 'center',
                rowGap: 10,
        },
        item: {
                width: '100%',
                height: 'auto',
                flexDirection: 'row',
                alignContent: 'center',
                gap: 10,
        }
})