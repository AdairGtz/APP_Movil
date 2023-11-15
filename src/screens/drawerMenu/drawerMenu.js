import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Image } from '@rneui/themed'
import { styles } from '../../styles/drawerMenu.style'
import ListItem from '../../components/listItem'
import { BrushIcon, CreditCardIcon, ExitIcon, HomeIcon, LockIcon, MessageIcon, UserIcon } from '../../icons/icons'
import Switch from '../../components/switch'
import { GlobalContext } from '../../context/globalContext'
import useLogin from '../../hooks/useLogin'
const UserProfile = require("../../../assets/PerfilUser.png")

const DrawerMenu = ({ navigation }) => {

        const { session } = useContext(GlobalContext)
        const { logout } = useLogin()
        const [activeSwitch, setActiveSwitch] = useState(false)

        return (
                <View style={styles.container}>
                        <View style={styles.containerProfile}>
                                <Image source={session?.profilePicture && session?.profilePicture !== "" ? { uri: session.profilePicture } : UserProfile} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                <Text style={styles.name}>{session?.name ?? ""}</Text>
                                <Text style={styles.email}>{session?.email ?? ""}</Text>
                        </View>
                        <View style={styles.containerInformation}>
                                <ListItem
                                        title="Datos Personales"
                                        iconShow={false}
                                        icon={<UserIcon />}
                                        navigate={() => navigation.navigate('personalinfo')}
                                />
                                <ListItem
                                        title="Domicilio"
                                        iconShow={false}
                                        icon={<HomeIcon />}
                                        navigate={() => navigation.navigate('addresses')}
                                />
                                <ListItem
                                        title='Pedidos'
                                        iconShow={false}
                                        icon={<MessageIcon />}
                                        navigate={() => navigation.navigate('myorders')}
                                />
                                <ListItem
                                        title="Seguridad"
                                        iconShow={false}
                                        icon={<LockIcon />}
                                        navigate={() => navigation.navigate('security')}
                                />
                                <ListItem
                                        title="Metodos de Pago"
                                        iconShow={false}
                                        icon={<CreditCardIcon />}
                                        navigate={() => navigation.navigate('security')}
                                />
                                <ListItem
                                        title="Mensajes"
                                        subtitle="Proximamente"
                                        iconShow={false}
                                        icon={<MessageIcon />}
                                />
                                <ListItem
                                        title="Tema"
                                        subtitle="Proximamente"
                                        icon={<BrushIcon />}
                                        iconLeft={<Switch value={activeSwitch} onValueChange={setActiveSwitch} />}
                                />
                                <View>
                                        <Button
                                                icon={<ExitIcon color='#FFF' />}
                                                titleStyle={{ marginLeft: 10, fontSize: 20, alignItems: 'center' }}
                                                title='Salir'
                                                color='red'
                                                containerStyle={{ width: 140, marginTop: 20, justifyContent: 'center', borderRadius: 20 }}
                                                onPress={() => logout()}
                                        />
                                </View>
                        </View>
                </View>
        )
}


export default DrawerMenu