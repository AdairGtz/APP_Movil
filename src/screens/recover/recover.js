import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ScreenTemplate from '../screenTemplate'
import { Button, Icon, Image, Input, Tab, TabView } from '@rneui/themed'
import { Link } from '@react-navigation/native'
import { EmailIcon, TelephoneIcon } from '../../icons/icons'

const lockImage = require("../../../assets/candado.png")

const Recover = () => {


        const [tabSelected, setTabSelected] = useState(0)

        return (
                <ScreenTemplate>
                        <View style={styles.containerRecover}>
                                <View style={{ backgroundColor: '#CCC', borderRadius: 30 }}>
                                        <Tab
                                                value={tabSelected}
                                                onChange={(e) => setTabSelected(e)}
                                                dense={true}
                                                titleStyle={{ color: '#FFF' }}
                                                containerStyle={{ borderRadius: 30 }}
                                                indicatorStyle={{ backgroundColor: '#00A36E', height: '100%', borderRadius: 30, zIndex: -1, width: '50%' }}
                                        >
                                                <Tab.Item title="Correo" color='primary' />
                                                <Tab.Item title="Teléfono" />
                                        </Tab>
                                </View>
                                <View style={styles.containerTabView}>
                                        <TabView value={tabSelected} onChange={setTabSelected} animationType='spring'>
                                                <TabView.Item style={{ flex: 1 }}>
                                                        <ScrollView keyboardDismissMode='interactive'>
                                                                <View style={{ flex: 1, alignItems: 'center' }}>
                                                                        <Text style={styles.title}>Restablecer contraseña</Text>
                                                                        <Image source={lockImage} style={{ width: 100, height: 100 }} />
                                                                        <Text style={styles.textInstructions}>Ingresa tu correo electronico para recuperar tu cuenta</Text>
                                                                        <Input leftIcon={<EmailIcon/>} placeholder='Correo' containerStyle={styles.boxInput} />
                                                                        <Link to={{ screen: 'verifycode' }} style={styles.codeExist}>Ya tengo el codigo</Link>
                                                                        <Button title='Enviar' containerStyle={styles.buttonSubmit} color='#00A36E' />
                                                                </View>
                                                        </ScrollView>
                                                </TabView.Item>
                                                <TabView style={{ flex: 1 }}>
                                                        <ScrollView keyboardDismissMode='interactive'>
                                                                <View style={{ flex: 1, alignItems: 'center' }}>
                                                                        <Text style={styles.title}>Reestablecer contraseña</Text>
                                                                        <Image source={lockImage} style={{ width: 100, height: 100 }} />
                                                                        <Text style={styles.textInstructions}>Ingresa tu telefono con terminacion *******7897 para poder recuperar tu cuenta</Text>
                                                                        <Input leftIcon={<TelephoneIcon/>} placeholder='Teléfono' containerStyle={styles.boxInput} />
                                                                        <Link to={{ screen: 'verifycode' }} style={styles.codeExist}>Ya tengo el codigo</Link>
                                                                        <Button title='Enviar' containerStyle={styles.buttonSubmit} color='#00A36E' />
                                                                </View>
                                                        </ScrollView>
                                                </TabView>
                                        </TabView>
                                </View>
                        </View>
                </ScreenTemplate>
        )
}

const styles = StyleSheet.create({
        containerRecover: {
                width: '90%',
                marginTop: 20,
                height: '55%',
                backgroundColor: '#FFF',
                overflow: 'hidden',
                borderRadius: 20,
                zIndex: 2,
                padding: 10,
                elevation: 2,
        },
        title: {
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
                marginBottom: 10,
        },
        containerTabView: {
                flex: 1,
                overflow: 'hidden',
        },
        textInstructions: {
                fontSize: 16,
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
        },
        boxInput: {
                height: 50,
        },
        codeExist: {
                width: '100%',
                textAlign: 'right',
                color: '#00A36E',
                marginBottom: 10,
                marginRight: 15,
                fontWeight: 'bold'
        },
        buttonSubmit: {
                width: '70%',
                borderRadius: 30,
        }
})

export default Recover