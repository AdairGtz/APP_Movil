import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        container: {
                width: '90%',
                marginTop: 20,
                height: '55%',
                backgroundColor: '#FFF',
                overflow: 'hidden',
                borderRadius: 20,
                zIndex: 2,
                padding: 10,
                alignItems: 'center',
                shadowColor: "#000",
                shadowOffset: {
                        width: 0,
                        height: 2,
                },
                elevation: 2,
        },
        title: {
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
        },
        inputs: {
                height: 55
        },
        text: {
                fontSize: 16,
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
        },
        buttonSubmit: {
                width: '80%',
                marginTop: 20,
                borderRadius: 20,
        }
})