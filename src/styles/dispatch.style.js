import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

        container: {
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: 'auto',
                rowGap: 10,
                paddingTop: 10,
                paddingBottom: 200,
        },
        card: {
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '90%',
                height: 'auto',
                borderRadius: 10,
                backgroundColor: '#FFF',
                elevation: 5,
        },
        containerCheckBox: {
                width: '95%',
                borderRadius: 10,
                elevation: 4,
                borderWidth: 1,
        },
        content: {
                paddingLeft: 10,
        },
        submitButton: {
                width: '80%',
                borderRadius: 30,
        },
        textButton: {
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: 18,
        },
})