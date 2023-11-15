import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/welcome/welcome';
import Login from '../screens/login/login';
import Recover from '../screens/recover/recover';
import VerifyCode from '../screens/verifycode/verifyCode';
import NewPassword from '../screens/newPassword/newPassword';
import DrawerHome from './drawer';

const Stack = createNativeStackNavigator();

const StackScreeen = () => {
        return (
                <Stack.Navigator
                        initialRouteName='welcome'
                >
                        <Stack.Screen name="welcome" component={Welcome}
                                options={{
                                        headerShown: false,
                                }}
                        />
                        <Stack.Screen name="ecommerce" component={DrawerHome}
                                options={{
                                        headerShown: false,
                                }}
                        />
                        <Stack.Screen name="login" component={Login}
                                options={{
                                        headerShown: false,
                                }}
                        />
                        <Stack.Screen name="recover" component={Recover}
                                options={{
                                        headerShown: false,
                                }}
                        />
                        <Stack.Screen name="verifycode" component={VerifyCode}
                                options={{
                                        headerShown: false,
                                }}
                        />
                        <Stack.Screen name="newpassword" component={NewPassword}
                                options={{
                                        headerShown: false,
                                }}
                        />
                </Stack.Navigator>
        )
}

export default StackScreeen