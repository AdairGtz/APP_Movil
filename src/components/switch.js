import { View, StyleSheet } from 'react-native'
import { Switch as Sw } from '@rneui/themed'

const Switch = ({ onValueChange, value }) => {

        return (
                <View style={[styles.containerSwitch, { backgroundColor: value ? '#00A36E' : '#CCC' }]}>
                        <Sw
                                style={styles.switch}
                                trackColor={{ false: "transparent", true: "transparent" }}
                                thumbColor="#FFF"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={onValueChange}
                                value={value}
                        />
                </View>
        )
}

const styles = StyleSheet.create({
        containerSwitch: {
                width: 45,
                height: 24,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
        },
        switch: {
                width: 47,
                height: 24,
        }
})
export default Switch