import { View, Text } from 'react-native'
import React from 'react'

const Br = ({ color = '#CCC' }) => {
        return (
                <View style={{ width: '100%', height: 1, backgroundColor: color, marginTop: 15 }}></View>
        )
}

export default Br