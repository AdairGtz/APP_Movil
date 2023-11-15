import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        containerImage: {
                width: '100%',
                height: '80%',
                borderBottomEndRadius: 100,
                borderBottomLeftRadius: 100,
                borderBottomStartRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
        },
        box_title: {
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                marginTop: 20,
                zIndex: 2
        },
        title: {
                fontSize: 30,
                fontWeight: 'bold',
                color: '#595959'
        },
        containerForm: {},
        box_input: {},
        inputIcon: {},
        label: {
                marginBottom: 5,
                fontWeight: 'bold',
                fontSize: 18,
                color: '#595959'
        },
        boxinformationAccount: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
        },
        textRegister: {
                color: '#00A36E',
                fontWeight: 'bold',
                fontSize: 14,
        },
        textRecover: {
                color: '#FF0000',
                fontWeight: 'bold',
                fontSize: 14,
        },
        submit: {},
        boxOtherAccount: {
                width: '100%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
        },
        titleOtherAccount: {
                fontSize: 14,
                fontWeight: 'bold',
                color: '#595959'
        },
        containerTabs: {
                width: '90%',
                marginTop: 20,
                height: '65%',
                backgroundColor: '#FFF',
                overflow: 'hidden',
                borderRadius: 20,
                zIndex: 2,
                padding: 10,
                elevation: 2,
        },
        boxLogin: {
                flex: 1,
                alignItems: 'center'
        },
        titleLogin: {
                fontSize: 20,
                marginBottom: 5,
                marginTop: 5,
                fontWeight: 'bold',
        },
        containerTabView: {
                flex: 1,
                overflow: 'hidden',
        },
        submitButton: {
                width: '70%',
                borderRadius: 30,
                marginTop: 10,
        },
        boxRegister: {
                flex: 1,
                alignItems: 'center',
        },
        titleRegister: {
                fontSize: 20,
                marginBottom: 5,
                marginTop: 5,
                fontWeight: 'bold',
        },
        inputs: {
                height: 60
        }
})