import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../../components/listItem'
import { ActiveIcon, CommentsIcon, DoubleSettingsIcon, VolumeIcon } from '../../icons/icons'
import Switch from '../../components/switch'

const SongAndNotify = () => {

        const [activeSwitch, setActiveSwitch] = useState(false)
        const [activeSwitch2, setActiveSwitch2] = useState(false)
        return (
                <View style={styles.container}>
                        <View style={styles.card}>
                                <Text style={styles.title}>Sonidos y Notificaciones</Text>
                                <ListItem
                                        title="Activar"
                                        icon={<ActiveIcon />}
                                        iconLeft={
                                                <Switch
                                                        onValueChange={() => setActiveSwitch(!activeSwitch)}
                                                        value={activeSwitch}
                                                />
                                        }
                                />
                                <ListItem
                                        title="Vista previa de Notificaciones"
                                        icon={<CommentsIcon />}
                                        iconLeft={
                                                <Switch
                                                        onValueChange={() => setActiveSwitch2(!activeSwitch2)}
                                                        value={activeSwitch2}
                                                />
                                        }
                                />
                                <ListItem
                                        title="Tono"
                                        icon={<VolumeIcon />}
                                />
                                <ListItem
                                        title="Administrar notificaciones"
                                        icon={<DoubleSettingsIcon />}
                                />
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                alignItems: 'center',
                marginTop: 20,
        },
        card: {
                width: '90%',
                backgroundColor: 'white',
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                        width: 0,
                        height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                padding: 10,
                elevation: 5,
                gap: 10,
        },
        title: {
                width: '100%',
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
                textAlign: 'center',
                paddingVertical: 10,
        }
})

export default SongAndNotify