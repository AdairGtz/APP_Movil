import { Icon, Image } from "@rneui/themed"
import { LOGO } from "../utils/contants"
import { Text } from "react-native"


export const HeaderOption = ({
        route = "",
        navigation = "",
        title = "Header",
        tabBarLabel = "Header",
        tabBarIcon = ({ color, size }) => (
                <Icon name="user" color={color} size={size} type='feather' />
        ),
        tabBarButton = () => null
}) => {

        return {
                title: "",
                tabBarLabel: tabBarLabel,
                headerTitleAlign: 'center',
                headerStyle: {
                        backgroundColor: '#00A36E',
                        borderWidth: 1,
                        borderColor: 'red',
                },
                headerRight: () => (
                        <Image source={LOGO} style={{ width: 30, height: 30 }} />
                ),
                headerLeft: () => (
                        <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
                ),
                headerTitle: () => (
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>{title}</Text>
                ),
                tabBarIcon,
                tabBarButton,
        }
}