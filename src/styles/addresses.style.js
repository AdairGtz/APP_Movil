import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
        container: {
                flex: 1,
                alignItems: 'center',
                gap: 10,
                padding: 10,
        },
        item: {
                width: '85%',
                paddingHorizontal: 10,
                paddingTop: 10,
        },
        boxDelete: {
                width: '15%',
        },
        itemAddress: {
                width: '100%',
                backgroundColor: '#FFF',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                elevation: 5,
        },
        containerCreate: {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
        },
        buttonCreate: {
                width: '85%',
                borderRadius: 10,
                borderRadius: 20
        }
})

export const stylesModal = StyleSheet.create({
        overlay: {
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center',
                margin: 0,
                padding: 0,
                backgroundColor: 'rgba(0,0,0,0.5)'
        },
        modalView: {
                width: width,
                height: 550,
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                paddingVertical: 20,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: {
                        width: 0,
                        height: 2
                },
                shadowOpacity: 0.25,
                elevation: 5,
        },
        title: {
                width: '100%',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                textAlign: 'center',
                paddingHorizontal: 10,
        },
        card: {
                flex: 1,
                height: 70,
        },
        containerInput: {
                width: '100%',
                gap: 10,
                paddingVertical: 5,
        },
        buttons: {
               flex: 1,
                borderRadius: 10,
                paddingVertical: 10,
        },
        label: {
                fontSize: 16,
                fontWeight: 'bold',
        },
        Input: {
                width: '100%',
                height: 40,
                borderColor: '#CCC',
                borderWidth: 2,
                borderRadius: 10,
        },
        boxInput: {
                borderWidth: 0,
                borderColor: 0,
        }
})