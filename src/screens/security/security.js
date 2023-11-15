import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/security.style'
import { Image } from '@rneui/themed'
import { iconLockCircle } from '../../utils/contants'

const Security = () => {
        return (
                <View style={styles.container}>
                        <View style={styles.card}>
                                <Text>Seguridad</Text>
                                <Image source={iconLockCircle} style={{ width: 100, height: 100, marginVertical: 10 }} />
                                <Text style={styles.resumeInfo}>Es de vital importancia cuidar tu informaciónpara evitar fraudes</Text>
                                
                        </View>
                </View>
        )
}

export default Security