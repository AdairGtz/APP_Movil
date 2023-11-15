import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/themed'
const userImage = require("../../assets/PerfilUser.png")
const UserImage = ({ session, navigation }) => {

        const letterName = session?.name?.charAt(0).toUpperCase() ?? ""

        return (
                <>
                        {session !== null ? (
                                session?.profilePicture && session.profilePicture !== "" ? (
                                        <Button
                                                color="transparent"
                                                icon={<Image source={{ uri: session.profilePicture }}
                                                        style={{ width: 35, height: 35, borderRadius: 17 }} />}
                                                onPress={() => navigation.navigate('personalinfo')}
                                        />
                                ) : (
                                        <Button
                                                title={letterName}
                                                color="transparent"
                                                containerStyle={styles.box}
                                                titleStyle={{ top: -1, height: '100%', fontWeight: 'bold', fontSize: 20 }}
                                                onPress={() => navigation.navigate('personalinfo')}
                                        />
                                )
                        ) : (
                                <Button
                                        color="transparent"
                                        icon={<Image source={userImage} style={{ width: 35, height: 35 }} />}
                                        onPress={() => navigation.navigate('login')}
                                />
                        )}
                </>
        )
}

const styles = StyleSheet.create({
        box: {
                width: 35,
                height: 35,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                backgroundColor: '#2AAE47'
        }
})

export default UserImage