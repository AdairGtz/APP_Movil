import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image, Input, TabView } from '@rneui/themed'
import { Button } from '@rneui/base'
import { styles } from '../../styles/login.style'
import { EmailIcon, FacebookIcon, GoogleIcon, LockIcon, TwitterIcon } from '../../icons/icons'
import { Link } from '@react-navigation/native'
import useLogin from '../../hooks/useLogin'
const user = require('../../../assets/user.png')

const TabLogin = () => {

        const { signIn, handleChangeText, loading, signInWithGoogle, signInWithFacebook, signInWithTwitter } = useLogin()

        return (
                <TabView.Item style={{ flex: 1 }}>
                        <ScrollView keyboardDismissMode='interactive'>
                                <View style={styles.boxLogin}>
                                        <Text style={styles.titleLogin}>Iniciar Sesión</Text>
                                        <Image source={user} style={{ width: 100, height: 100 }} />
                                        <Input leftIcon={<EmailIcon />} placeholder='Correo' onChangeText={(value) => handleChangeText(value, 'email')} />
                                        <Input leftIcon={<LockIcon />} placeholder='Contraseña' containerStyle={{ height: 55 }} onChangeText={(value) => handleChangeText(value, 'password')} />
                                        <Link to={{ screen: 'recover' }} style={{ width: '100%', padding: 0, color: '#00A36E', fontWeight: 'bold', fontSize: 14, textAlign: 'right', paddingRight: 10 }}>Olvide mi contraseña</Link>
                                        <Button title={loading ? 'Iniciando...' : 'Acceder'} color='#00A36E' containerStyle={styles.submitButton} onPress={() => signIn()} disabled={loading ? true : false} />
                                </View>
                                <View style={{ alignItems: 'center', padding: 10, gap: 10 }}>
                                        <Text>O accede con </Text>
                                        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                                                <Button icon={<GoogleIcon size={30} />} color='transparent' onPress={() => signInWithGoogle()} />
                                                <Button icon={<FacebookIcon size={30} />} color='transparent' onPress={() => signInWithFacebook()} />
                                                <Button icon={<TwitterIcon />} color='transparent' onPress={() => signInWithTwitter()} />
                                        </View>
                                </View>
                        </ScrollView>
                </TabView.Item>
        )
}

export default TabLogin