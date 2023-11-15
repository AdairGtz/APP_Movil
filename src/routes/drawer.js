import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMenu from '../screens/drawerMenu/drawerMenu';
import TabsHeader from './tabs';
const Drawer = createDrawerNavigator();

const DrawerHome = () => {
        return (
                <Drawer.Navigator
                        screenOptions={{
                                headerShown: true,
                                headerStyle: {
                                        backgroundColor: '#FFF',
                                        zIndex: 100,
                                }
                        }}
                        drawerContent={(props) => <DrawerMenu {...props} />}
                >
                        <Drawer.Screen name="menu" component={TabsHeader}
                                options={({ route, navigation }) => ({
                                        headerShown: false,
                                        drawerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                })}
                        />
                </Drawer.Navigator>
        )
}

export default DrawerHome