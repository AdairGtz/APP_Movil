import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import ScreenTemplate from '../screenTemplate'
import { Button, Image, Input } from '@rneui/themed'
import { LockIcon } from '../../icons/icons'
import { styles } from '../../styles/newPassword.style'

const lockHiddenImg = require("../../../assets/lockHidden.png")

const NewPassword = () => {
        return (
                <ScreenTemplate>
                        <View style={styles.container}>
                                <ScrollView keyboardDismissMode='interactive' contentContainerStyle={{ alignItems: 'center' }}>
                                        <Text style={styles.title}>Crea una nueva contraseña</Text>
                                        <Image source={lockHiddenImg} style={{ width: 250, height: 80 }} />
                                        <Text style={styles.text}>Crea una nueva contraseña para poder acceder a tu cuenta</Text>
                                        <Input leftIcon={<LockIcon/>} placeholder='Contraseña' containerStyle={styles.inputs} />
                                        <Input leftIcon={<LockIcon />} placeholder='Confirmar contraseña' containerStyle={styles.inputs} />
                                        <Button title='Enviar' color='#00A36E' containerStyle={styles.buttonSubmit} />
                                </ScrollView>
                        </View>
                </ScreenTemplate>
        )
}


export default NewPassword