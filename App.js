import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalProvider } from './src/context/globalContext';
import StackScreeen from './src/routes/stack';
import Toast from './src/components/toast';
import { StatusBar } from 'react-native';

export default function App() {

        return (
                <>
                        <StatusBar backgroundColor="#00A36E" showHideTransition="fade" />
                        <GlobalProvider>
                                <NavigationContainer>
                                        <StackScreeen />
                                </NavigationContainer>
                                <Toast />
                        </GlobalProvider>
                </>
        );
}
