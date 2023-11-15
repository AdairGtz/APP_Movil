import { View, Text, StyleSheet, TextInput, ToastAndroid, ScrollView } from 'react-native'
import React from 'react'
import ScreenTemplate from '../screenTemplate'
import { Button, Image } from '@rneui/themed'
const keyImage = require("../../../assets/LLave.png")
const VerifyCode = ({ navigation }) => {

      const validateCode = () => {

            navigation.navigate('newpassword')
            // ToastAndroid.show('Codigo incorrecto', ToastAndroid.SHORT, ToastAndroid.CENTER)
      }

      return (
            <ScreenTemplate>
                  <View style={styles.containerCode}>
                        <ScrollView keyboardDismissMode='interactive' contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={styles.title}>Ingresa el codigo</Text>
                              <Image source={keyImage} style={{ width: 100, height: 100 }} />
                              <Text style={styles.textMessage}>Hemos enviado un codigo al correo ejemplo@gmail.com, por favor ingresar el codigo</Text>
                              <View style={styles.boxInputs}>
                                    <TextInput style={styles.textInput} />
                                    <TextInput style={styles.textInput} />
                                    <TextInput style={styles.textInput} />
                                    <TextInput style={styles.textInput} />
                              </View>
                              <Text title='Enviar' style={styles.resend} >Reenviar código</Text>
                              <Text>00:00</Text>
                              <Button title='Enviar' containerStyle={styles.buttonSubmit} color='#00A36E' onPress={validateCode} />
                        </ScrollView>
                  </View>
            </ScreenTemplate>
      )
}

const styles = StyleSheet.create({
      containerCode: {
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
      },
      resend: {
            width: '100%',
            marginTop: 20,
            textAlign: 'center',
            color: '#00A36E',
      },
      boxInputs: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 20,
      },
      textInput: {
            width: 45,
            height: 45,
            borderWidth: 2,
            borderColor: '#CCC',
      },
      textMessage: {
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 16,

      },
      buttonSubmit: {
            marginTop: 20,
            width: '80%',
            borderRadius: 20,
      }
})

export default VerifyCode