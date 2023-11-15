import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, CheckBox, Input, TabView } from '@rneui/themed'
import { EmailIcon, LockIcon, UserIcon } from '../../icons/icons'
import { styles } from '../../styles/login.style'
import useRegister from '../../hooks/useRegister'

const TabRegister = () => {

        const { checked, setChecked, handleChangeText, saveUser, loading } = useRegister()

        return (
                <TabView.Item style={{ flex: 1 }}>
                        <ScrollView keyboardDismissMode='interactive'>
                                <View style={styles.boxRegister}>
                                        <Text style={styles.titleRegister}>Registrarme</Text>
                                        <Input leftIcon={<UserIcon />} placeholder='Nombre' containerStyle={styles.inputs} onChangeText={(value) => handleChangeText(value, 'name')} />
                                        <Input leftIcon={<EmailIcon />} placeholder='Correo' containerStyle={styles.inputs} onChangeText={(value) => handleChangeText(value, 'email')} />
                                        <Input leftIcon={<LockIcon />} placeholder='Contraseña' containerStyle={styles.inputs} onChangeText={(value) => handleChangeText(value, 'password')} />
                                        <Input leftIcon={<LockIcon />} placeholder='Confirmar Contraseña' containerStyle={styles.inputs} onChangeText={(value) => handleChangeText(value, 'password2')} />
                                        <CheckBox center title='Acepto las potliticas de privacidad' checked={checked} containerStyle={{ height: 30, padding: 0 }} onPress={() => setChecked(!checked)} />
                                        <Button title={loading ? 'Guardando...' : 'Registrarme'} color='#00A36E' containerStyle={styles.submitButton} onPress={() => saveUser()} disabled={loading ? true : false} />
                                </View>
                        </ScrollView>
                </TabView.Item>
        )
}

export default TabRegister