import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import ListItem from '../../components/listItem'
import { SheetIcon, UserIcon, VolumeIcon } from '../../icons/icons'
import { styles } from '../../styles/settings.style'
import Switch from '../../components/switch'
import { GlobalContext } from '../../context/globalContext'

const Settings = ({ navigation }) => {

        const [activeSwitch, setActiveSwitch] = useState(false)
        const { session } = useContext(GlobalContext)

        return (
                <View style={styles.container}>
                        <View style={styles.box}>
                                <Text style={styles.title}>Cuenta</Text>
                                <ListItem
                                        title="Perfil"
                                        navigate={() => navigation.navigate(session === null ? 'login' : 'personalinfo')}
                                        icon={<UserIcon />}
                                />
                                <Text style={styles.title}>Sonido y Apariencia</Text>
                                <ListItem
                                        title="Sonidos y Notificaciones"
                                        navigate={() => navigation.navigate('songandnotify')}
                                        icon={<VolumeIcon />}
                                />
                                <ListItem
                                        title="Tema"
                                        subtitle='Próximamente'
                                        navigate={() => navigation.navigate('personalinfo')}
                                        iconLeft={<Switch value={activeSwitch} onValueChange={setActiveSwitch} />}
                                />
                                <Text style={styles.title}>Legal</Text>
                                <ListItem
                                        title="Politicas de privacidad"
                                        navigate={() => navigation.navigate('privacypolicies')}
                                />
                                <ListItem
                                        title="Términos y condiciones"
                                        navigate={() => navigation.navigate('termcondition')}
                                        icon={<SheetIcon />}
                                />
                        </View>
                </View>
        )
}

export default Settings