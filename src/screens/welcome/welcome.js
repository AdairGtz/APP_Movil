import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { BACKGROUND } from '../../utils/contants';
import { LogoIcon } from '../../icons/icons';

const Welcome = ({navigation}) => {

        const getAtEcommerce = () => {
                navigation.navigate('ecommerce')
        }

        return (
                <ImageBackground source={BACKGROUND} style={{ width: '100%', height: '100%' }}>
                        <View style={styles.containerWelcome}>
                                <View style={styles.containerLogo}>
                                       <LogoIcon size={200}/>
                                </View>
                                <View>
                                        <Text style={styles.content}>BIENVENIDO</Text>
                                        <Text style={styles.content}>A</Text>
                                        <Text style={styles.content}>XOCHICALLI</Text>
                                </View>
                                <Button title='¡Comenzar!' color='#00A36E' size='md' containerStyle={styles.buttonWelcome} titleStyle={{fontSize:20}} onPress={getAtEcommerce}/>
                        </View>
                </ImageBackground>
        )
}


const styles = StyleSheet.create({
        containerWelcome: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
        },
        containerLogo: {
                marginBottom: 20,
        },
        content: {
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#FFF',
        },
        buttonWelcome: {
                width: '80%',
                borderRadius: 30,
                marginTop: 30,
                elevation: 10,

        }
})
export default Welcome