import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/themed'
import ListItem from '../../components/listItem'
import { CalendaryIcon, HappyBirthdayIcon, UserIcon } from '../../icons/icons'
import ModalEdit from './modalEdit'
import useUser from '../../hooks/useUser'

const userImage = require("../../../assets/PerfilUser.png")

const PersonalInformation = ({ navigation }) => {

        const { loading, handleChangeText, activeModal, closeModal, openModal, formUser, updateUser, error } = useUser()
        const fullName = `${loading ? 'Cargando...' : formUser.name ?? ""} ${formUser.fatherSurname ?? ""} ${formUser.motherSurname ?? ""}`

        return (
                <>
                        <ScrollView style={{ flex: 1, backgroundColor: '#DBEFED' }}>
                                <View style={styles.container}>
                                        <View style={styles.card}>
                                                <Text style={styles.title}>Perfil</Text>
                                                <Image source={formUser?.profilePicture && formUser.profilePicture !== "" ? { uri: formUser.profilePicture } : userImage} style={{ width: 100, height: 100,borderRadius:50 }} />
                                                <Text style={styles.userName}>{loading ? 'Cargando...' : fullName}</Text>
                                                <Text style={styles.emailUser}>{loading ? 'Cargando...' : formUser.email}</Text>
                                                <View style={styles.boxListInfo}>
                                                        <ListItem
                                                                icon={<UserIcon />}
                                                                title="Nombre"
                                                                subtitle={formUser.name}
                                                                iconShow={false}
                                                        />
                                                        <ListItem
                                                                icon={<UserIcon />}
                                                                title="Apellido Paterno"
                                                                subtitle={loading ? 'Cargando...' : formUser.fatherSurname ?? 'No definido'}
                                                                iconShow={false}
                                                        />
                                                        <ListItem
                                                                icon={<UserIcon />}
                                                                title="Apellido Materno"
                                                                subtitle={loading ? 'Cargando...' : formUser.motherSurname ?? 'No definido'}
                                                                iconShow={false}
                                                        />
                                                        <ListItem
                                                                title="Fecha de Nacimiento"
                                                                subtitle={loading ? 'Cargando...' : formUser.birthday ?? 'No definido'}
                                                                iconShow={false}
                                                                icon={<CalendaryIcon />}
                                                        />
                                                        <ListItem
                                                                title="Edad"
                                                                subtitle={loading ? 'Cargando...' : formUser.age ?? 'No definido'}
                                                                iconShow={false}
                                                                icon={<HappyBirthdayIcon />}
                                                        />
                                                </View>
                                                <Button title='Editar datos' color='#00A36E' containerStyle={{ width: '60%', borderRadius: 30 }} onPress={() => openModal()} />
                                        </View>
                                </View>
                        </ScrollView>
                        <ModalEdit
                                loading={loading}
                                updateUser={updateUser}
                                activeModal={activeModal}
                                handleChangeText={handleChangeText}
                                closeModal={closeModal}
                                formUser={formUser}
                                error={error}
                        />
                </>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                alignItems: 'center',
        },
        card: {
                width: '95%',
                height: 'auto',
                backgroundColor: '#FFF',
                borderRadius: 10,
                padding: 10,
                marginVertical: 20,
                elevation: 2,
                alignItems: 'center',
                rowGap: 10
        },
        boxListInfo: {
                width: '100%',
                height: 'auto',
                rowGap: 5
        },
        title: {
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10
        },
        userName: {
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10
        },
        emailUser: {
                fontSize: 16,
                marginTop: -20,
                color: '#00A36E',
        }
})
export default PersonalInformation