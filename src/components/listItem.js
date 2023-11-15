import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, Image } from '@rneui/themed'

const ListItem = ({
        icon = <View style={{ width: 25, height: 25 }} />,
        title = "mi titulo",
        titleStyle = {},
        subTitleStyle = {},
        subtitle = "",
        navigate = () => null,
        iconShow = true,
        iconLeft = false,
        containerStyle = {},
}) => {

        return (

                <TouchableOpacity style={[styles.boxLink,containerStyle]} onPress={navigate}>
                        <View style={styles.card}>
                                {icon}
                                <View style={styles.boxText}>
                                        <Text style={[styles.title, titleStyle]}>{title}</Text>
                                        {subtitle !== "" && (
                                                <Text style={[{ marginLeft: 10, fontSize: 12, color: '#00A36E' }, subTitleStyle]}>{subtitle}</Text>
                                        )}
                                </View>
                        </View>
                        {iconShow && (
                                iconLeft ? (
                                        iconLeft
                                ) : (
                                        <Icon name="right" type='antdesign' color='#00A36E' size={25} />
                                )
                        )}
                </TouchableOpacity>
        )
}


const styles = StyleSheet.create({
        title: {
                fontSize: 16,
                color: '#000',
                marginLeft: 10,
        },
        boxLink: {
                width: '100%',
                flexDirection: 'row',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'space-between',
        },
        card: {
                flexDirection: 'row',
                alignItems: 'center',
        },
        boxText: {
                rowGap: -2,
        }
})

export default ListItem