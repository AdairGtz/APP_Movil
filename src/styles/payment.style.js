import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        containerTabs: {
                width: '90%',
                height: '60%',
                backgroundColor: '#FFF',
                overflow: 'hidden',
                borderRadius: 20,
                zIndex: 2,
                padding: 10,
                elevation: 2,
        },
        container: {
                flex: 1,
                rowGap: 10,
                paddingBottom: 10,
                alignItems: 'center',
                flexDirection: 'column',
        },
        containerTabView: {
                flex: 1,
                overflow: 'hidden',
        },
        boxCreditCard: {
                paddingTop: 10,
                flex: 1,
                alignItems: 'center'
        },
        titleCreditCard: {
                fontSize: 20,
                marginBottom: 5,
                marginTop: 5,
                fontWeight: 'bold',
        },
        boxOthers: {
                flex: 1,
                alignItems: 'center',
        },
        titleTabs: {
                width: '90%',
        },
        contentTabs: {
                width: '100%',
                height: 'auto',
        },
        buttonSubmit: {
                width: '90%',
                borderRadius: 30,
                textAlign: 'center',
                alignSelf: 'center',
        }
});