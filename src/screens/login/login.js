import { View } from 'react-native'
import React, { useState } from 'react'
import { Tab, TabView } from '@rneui/themed'
import ScreenTemplate from '../screenTemplate'
import { styles } from '../../styles/login.style'
import TabRegister from './tabRegister'
import TabLogin from './tabLogin'

const Login = () => {

        const [tabSelected, setTabSelected] = useState(0)

        return (
                <ScreenTemplate>
                        <View style={styles.containerTabs}>
                                <View style={{ backgroundColor: '#CCC', borderRadius: 30 }}>
                                        <Tab
                                                value={tabSelected}
                                                onChange={(e) => setTabSelected(e)}
                                                dense={true}
                                                titleStyle={{ color: '#FFF' }}
                                                containerStyle={{ borderRadius: 30 }}
                                                indicatorStyle={{ backgroundColor: '#00A36E', height: '100%', borderRadius: 30, zIndex: -1, width: '50%' }}
                                        >
                                                <Tab.Item title="Iniciar Sesión" color='primary' />
                                                <Tab.Item title="Registrarse" />
                                        </Tab>
                                </View>
                                <View style={styles.containerTabView}>
                                        <TabView value={tabSelected} onChange={setTabSelected} animationType='spring'>
                                                <TabLogin />
                                                <TabRegister />
                                        </TabView>
                                </View>
                        </View>
                </ScreenTemplate>
        )
}

export default Login