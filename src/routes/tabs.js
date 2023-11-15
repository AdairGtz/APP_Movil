import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button, Icon, Image } from '@rneui/themed'
import Products from '../screens/products/products'
import ShoppingCart from '../screens/shoppingCart/shoppingCart'
import { styles, tabBarActiveTintColor, tabBarInactiveTintColor } from '../styles/tabs.style'
import Settings from '../screens/settings/settings'
import PersonalInformation from '../screens/personalInfo/personalInformation'
import { Text } from 'react-native'
import { LOGO } from '../utils/contants'
import ProductDetail from '../screens/productDetail/productDetail'
import HomeScreen from '../screens/home/home'
import Security from '../screens/security/security'
import { BoxIcon, HomeIcon, LogoIcon, SettingsIcon, ShoppingCartIcon } from '../icons/icons'
import Dispatch from '../screens/dispatch/dispatch'
import Payment from '../screens/payment/payment'
import Order from '../screens/order/order'
import { GlobalContext } from '../context/globalContext'
import Addresses from '../screens/addresses/addresses'
import SongAndNotify from '../screens/songAndNotify/songAndNotify'
import PrivacyPolicies from '../screens/privacyPolicies/privacyPolicies'
import UserImage from '../components/userImage'
import TermAndConditions from '../screens/termAndConditions/termAndConditions'
import MyOrders from '../screens/myorders/myorders'
import Ordendetails from '../screens/orderdetails/ordendetails'
const UserProfile = require("../../assets/PerfilUser.png")

const config = {
        animation: 'spring',
        config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
        },
};

const TabsHeader = () => {

        const Tabs = createBottomTabNavigator()
        const { state: { quantityProducts }, session } = useContext(GlobalContext)

        return (
                <Tabs.Navigator
                        screenOptions={{
                                tabBarStyle: styles.tabBarStyle,
                                tabBarInactiveTintColor,
                                tabBarActiveTintColor,
                                tabBarShowLabel: false,
                        }}
                >
                        <Tabs.Screen name="home" component={HomeScreen}
                                options={({ route, navigation }) => ({
                                        title: '',
                                        tabBarIcon: ({ color, size }) => (
                                                <HomeIcon color={color} />
                                        ),
                                        headerTintColor: '#FFF',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        headerLeft: () => (
                                                <>
                                                        {session ? (
                                                                <Button
                                                                        icon={<Icon name='menu' style={{ width: 30, height: 30 }} color='#FFF' />}
                                                                        color='transparent'
                                                                        onPress={() => navigation.openDrawer()}
                                                                />
                                                        ) : null}
                                                </>
                                        ),
                                        headerRight: () => <UserImage session={session} navigation={navigation} />,
                                        headerTitleAlign: 'center',
                                        headerTitle: () => (
                                                <LogoIcon size={40} />
                                        )
                                })}
                        />
                        <Tabs.Screen name="tienda" component={Products}
                                options={{
                                        tabBarLabel: '',
                                        tabBarShowLabel: false,
                                        headerLeft: () => (
                                                <LogoIcon size={30} />
                                        ),
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        tabBarIcon: ({ color, size }) => (
                                                <BoxIcon color={color} />
                                        )
                                }}
                        />
                        <Tabs.Screen name="shoppingcart" component={ShoppingCart}
                                options={({ route, navigation }) => ({
                                        title: '',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        tabBarBadge: quantityProducts > 0 ? quantityProducts : null,
                                        headerRight: () => (
                                                <LogoIcon size={30} />
                                        ),
                                        tabBarIcon: ({ color, size }) => (
                                                <ShoppingCartIcon size={30} color={color} />
                                        ),
                                        headerLeft: () => (
                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
                                        ),
                                        headerTitle: () => (
                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Carrito</Text>
                                        ),
                                })}
                        />
                        <Tabs.Screen name="settings" component={Settings}
                                options={({ route, navigation }) => ({
                                        title: '',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        headerRight: () => (
                                                <LogoIcon size={30} />
                                        ),
                                        tabBarIcon: ({ color, size }) => (
                                                <SettingsIcon color={color} size={25} />
                                        ),
                                        headerLeft: () => (
                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
                                        ),
                                        headerTitle: () => (
                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Ajustes</Text>
                                        ),
                                })}
                        />
                        <Tabs.Screen name="productdetails" component={ProductDetail}
                                options={({ route, navigation }) => ({
                                        tabBarButton: () => null,
                                        headerTintColor: '#FFF',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        headerLeft: () => (
                                                session ? (
                                                        <Button
                                                                icon={<Icon name='menu' style={{ width: 30, height: 30 }} color='#FFF' />}
                                                                color='transparent'
                                                                onPress={() => navigation.openDrawer()}
                                                        />
                                                ) : null
                                        ),
                                        headerRight: () => (
                                                <Button
                                                        icon={<Image source={UserProfile} style={{ width: 30, height: 30 }} />}
                                                        color='transparent'
                                                        onPress={() => navigation.navigate('login')}
                                                />
                                        ),
                                        headerTitleAlign: 'center',
                                        headerTitle: () => (
                                                <Image source={LOGO} style={{ width: 35, height: 45 }} />
                                        )
                                })}
                        />
                        <Tabs.Screen name="dispatch" component={Dispatch}
                                options={({ route, navigation }) => ({
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        headerRight: () => (
                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                        ),
                                        headerLeft: () => (
                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('shoppingcart', { progress: 0 })} />
                                        ),
                                        headerTitle: () => (
                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Domicilio</Text>
                                        ),
                                        tabBarButton: () => null
                                })}
                        />
                        <Tabs.Screen name="addresses" component={Addresses}
                                options={({ route, navigation }) => ({
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        tabBarButton: () => null,
                                        headerRight: () => (
                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                        ),
                                        headerLeft: () => (
                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('home')} />
                                        ),
                                        headerTitle: () => (
                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Direcciones</Text>
                                        ),
                                })}
                        />
                        <Tabs.Screen name="privacypolicies" component={PrivacyPolicies}
                                options={({ route, navigation }) => ({
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        tabBarButton: () => null,
                                        headerRight: () => (
                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                        ),
                                        headerLeft: () => (
                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('settings', { progress: 0 })} />
                                        ),
                                        headerTitle: () => (
                                                <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#FFF' }}>Politicas de privacidad</Text>
                                        ),
                                })}
                        />
                        <Tabs.Screen name="termcondition" component={TermAndConditions}
                                options={({ route, navigation }) => ({
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        tabBarButton: () => null,
                                        headerRight: () => (
                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                        ),
                                        headerLeft: () => (
                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('settings', { progress: 0 })} />
                                        ),
                                        headerTitle: () => (
                                                <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#FFF' }}>Terminos y condiciones</Text>
                                        ),
                                })}
                        />
                        {session !== null && (
                                <>
                                        <Tabs.Screen name="order" component={Order}
                                                options={({ route, navigation }) => ({
                                                        headerTitleAlign: 'center',
                                                        headerStyle: {
                                                                backgroundColor: '#00A36E',
                                                        },
                                                        headerRight: () => (
                                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                                        ),
                                                        headerLeft: () => (
                                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('dispatch', { progress: 0 })} />
                                                        ),
                                                        headerTitle: () => (
                                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Confirmar compra</Text>
                                                        ),
                                                        tabBarButton: () => null
                                                })}
                                        />
                                        <Tabs.Screen name="payment" component={Payment}
                                                options={({ route, navigation }) => ({
                                                        headerTitleAlign: 'center',
                                                        headerStyle: {
                                                                backgroundColor: '#00A36E',
                                                        },
                                                        headerRight: () => (
                                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                                        ),
                                                        headerTitle: () => (
                                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Pagar</Text>
                                                        ),
                                                        tabBarButton: () => null
                                                })}
                                        />
                                        <Tabs.Screen name="security" component={Security}
                                                options={({ route, navigation }) => ({
                                                        headerTitleAlign: 'center',
                                                        headerStyle: {
                                                                backgroundColor: '#00A36E',
                                                        },
                                                        headerRight: () => (
                                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                                        ),
                                                        tabBarIcon: ({ color, size }) => (
                                                                <Icon name="settings" color={color} size={size} type='feather' />
                                                        ),
                                                        headerLeft: () => (
                                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
                                                        ),
                                                        headerTitle: () => (
                                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Seguridad</Text>
                                                        ),
                                                        tabBarButton: () => null
                                                })}
                                        />
                                        <Tabs.Screen name="personalinfo" component={PersonalInformation}
                                                options={({ route, navigation }) => ({
                                                        title: '',
                                                        tabBarLabel: 'Datos personales',
                                                        headerStyle: {
                                                                backgroundColor: '#00A36E',
                                                        },
                                                        transitionSpec: {
                                                                open: config,
                                                                close: config,
                                                        },
                                                        headerTitleAlign: 'center',
                                                        headerLeft: () => (
                                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('settings')} />
                                                        ),
                                                        headerRight: () => (
                                                                <Image source={LOGO} style={{ width: 30, height: 30, marginRight: 10 }} />
                                                        ),
                                                        headerTitle: () => (
                                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Datos personales</Text>
                                                        ),
                                                        tabBarIcon: ({ color, size }) => (
                                                                <Icon name="user" color={color} size={size} type='feather' />
                                                        ),
                                                        tabBarButton: () => null
                                                })}
                                        />
                                        <Tabs.Screen name="songandnotify" component={SongAndNotify}
                                                options={({ route, navigation }) => ({
                                                        headerTitleAlign: 'center',
                                                        headerStyle: {
                                                                backgroundColor: '#00A36E',
                                                        },
                                                        tabBarButton: () => null,
                                                        headerRight: () => (
                                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                                        ),
                                                        headerLeft: () => (
                                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('settings', { progress: 0 })} />
                                                        ),
                                                        headerTitle: () => (
                                                                <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#FFF' }}>Sonidos y Notificaciones</Text>
                                                        ),
                                                })}
                                        />
                                        <Tabs.Screen name="myorders" component={MyOrders}
                                                options={({ route, navigation }) => ({
                                                        headerTitleAlign: 'center',
                                                        headerStyle: {
                                                                backgroundColor: '#00A36E',
                                                        },
                                                        tabBarButton: () => null,
                                                        headerRight: () => (
                                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                                        ),
                                                        headerLeft: () => (
                                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('home')} />
                                                        ),
                                                        headerTitle: () => (
                                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Compras</Text>
                                                        ),
                                                })}
                                        />
                                        <Tabs.Screen name="orderdetails" component={Ordendetails}
                                                options={({ route, navigation }) => ({
                                                        headerTitleAlign: 'center',
                                                        headerStyle: {
                                                                backgroundColor: '#00A36E',
                                                        },
                                                        tabBarButton: () => null,
                                                        headerRight: () => (
                                                                <Image source={LOGO} style={{ width: 30, height: 35, marginRight: 10 }} />
                                                        ),
                                                        headerLeft: () => (
                                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('myorders')} />
                                                        ),
                                                        headerTitle: () => (
                                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Compras</Text>
                                                        ),
                                                })}
                                        />
                                </>
                        )
                        }
                </Tabs.Navigator>
        )
}

export default TabsHeader