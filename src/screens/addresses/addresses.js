import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/addresses.style'
import { Button } from '@rneui/themed'
import ItemAddress from './itemAddress'
import useAddress from '../../hooks/useAddress'
import ModalAddress from './modalAddress'

const Addresses = () => {

        const { loading, listAddresses, setActiveModal,listCode, activeModal, handleChangeText, formAddress, addAdress, deleteAddress,activeEdit,exitModal } = useAddress()

        return (
                <>
                        <ScrollView contentContainerStyle={{ width: '100%' }}>
                                <View style={styles.container}>
                                        {loading.address ? (
                                                <Text>Cargando...</Text>
                                        ) : (
                                                listAddresses.length === 0 ? (
                                                        <Text>No hay direcciones</Text>
                                                ) : (
                                                        listAddresses.map(item => (
                                                                <ItemAddress key={item.id} address={item} deleteAddress={deleteAddress} loading={loading} activeEdit={activeEdit}/>
                                                        ))
                                                )
                                        )}
                                </View>
                                <View style={styles.containerCreate}>
                                        <Button
                                                title='Crear'
                                                titleStyle={{ fontSize: 20 }}
                                                containerStyle={styles.buttonCreate}
                                                color='#00A36E'
                                                onPress={() => setActiveModal(true)}
                                        />
                                </View>
                        </ScrollView>
                        <ModalAddress
                                setActiveModal={setActiveModal}
                                activeModal={activeModal}
                                loading={loading}
                                handleChangeText={handleChangeText}
                                formAddress={formAddress}
                                addAdress={addAdress}
                                listCode={listCode}
                                exitModal={exitModal}
                        />
                </>
        )
}

export default Addresses