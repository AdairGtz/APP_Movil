import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Overlay } from '@rneui/themed'
import { stylesModal } from '../../styles/addresses.style'
import { Dropdown } from 'react-native-element-dropdown'

const ModalAddress = ({ activeModal, handleChangeText, formAddress, addAdress, loading, listCode, exitModal }) => {

        const { getCode, loaderSave } = loading
        const { name, state, city, street, code, colony, numberStreet, reference, isEditing } = formAddress

        return (
                <Overlay
                        animationType="slide"
                        transparent={true}
                        visible={activeModal}
                        overlayStyle={stylesModal.overlay}
                        onRequestClose={() => exitModal()}
                >
                        <View style={stylesModal.modalView}>
                                <ScrollView contentContainerStyle={{ width: '100%' }}>
                                        <Text style={stylesModal.title}>{isEditing ? 'Actualizar' : 'Nueva'} direccion</Text>
                                        <View style={stylesModal.containerInput}>
                                                <Text style={stylesModal.label}>Nombres y Apellidos</Text>
                                                <Input containerStyle={stylesModal.Input} inputContainerStyle={stylesModal.boxInput} value={name} onChangeText={(value) => handleChangeText(value, 'name')} />
                                        </View>
                                        <View style={[stylesModal.containerInput, { flexDirection: 'row' }]}>
                                                <View style={stylesModal.card}>
                                                        <Text style={stylesModal.label}>Calle</Text>
                                                        <Input containerStyle={stylesModal.Input} inputContainerStyle={stylesModal.boxInput} value={street} onChangeText={(value) => handleChangeText(value, 'street')} />
                                                </View>
                                                <View style={stylesModal.card}>
                                                        <Text style={stylesModal.label}>Numero</Text>
                                                        <Input containerStyle={stylesModal.Input} inputContainerStyle={stylesModal.boxInput} value={numberStreet} onChangeText={(value) => handleChangeText(value, 'numberStreet')} />
                                                </View>
                                        </View>
                                        <View style={[stylesModal.containerInput, { flexDirection: 'row' }]}>
                                                <View style={stylesModal.card}>
                                                        <Text style={stylesModal.label}>Código postal</Text>
                                                        <Input containerStyle={[stylesModal.Input, { borderColor: getCode ? '#ECEEEF' : '#CCC' }]} inputContainerStyle={stylesModal.boxInput} value={code} onChangeText={(value) => handleChangeText(value, 'code')} disabled={getCode} />
                                                </View>
                                                <View style={stylesModal.card}>
                                                        <Text style={stylesModal.label}>Estado</Text>
                                                        <Input containerStyle={[stylesModal.Input, { borderColor: getCode ? '#ECEEEF' : '#CCC' }]} inputContainerStyle={stylesModal.boxInput} disabled={getCode} value={state} onChangeText={(value) => handleChangeText(value, 'state')} />
                                                </View>
                                        </View>
                                        <View style={[stylesModal.containerInput, { flexDirection: 'row' }]}>
                                                <View style={stylesModal.card}>
                                                        <Text style={stylesModal.label}>Ciudad</Text>
                                                        <Input containerStyle={[stylesModal.Input, { borderColor: getCode ? '#ECEEEF' : '#CCC' }]} inputContainerStyle={stylesModal.boxInput} disabled={getCode} value={city} onChangeText={(value) => handleChangeText(value, 'city')} />
                                                </View>
                                                <View style={stylesModal.card}>
                                                        <Text style={stylesModal.label}>Colonia</Text>
                                                        <Dropdown
                                                                disabled={getCode}
                                                                style={stylesModal.Input}
                                                                value={colony}
                                                                data={listCode}
                                                                valueField="value"
                                                                labelField="value"
                                                                placeholder="Seleccione"
                                                                onChange={e => {
                                                                        handleChangeText(e.value, 'colony')
                                                                }}
                                                        />
                                                </View>
                                        </View>
                                        <View style={stylesModal.containerInput}>
                                                <Text style={stylesModal.label}>Referencia</Text>
                                                <Input containerStyle={stylesModal.Input} inputContainerStyle={stylesModal.boxInput} value={reference} onChangeText={(value) => handleChangeText(value, 'reference')} />
                                        </View>
                                        <View style={[stylesModal.containerInput, { flexDirection: 'row', justifyContent: 'center', gap: 20 }]}>
                                                <Button title='Cancelar'
                                                        containerStyle={stylesModal.buttons}
                                                        color='red'
                                                        buttonStyle={{ borderRadius: 20 }}
                                                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
                                                        onPress={() => exitModal()}
                                                />
                                                <Button title={loaderSave ? 'Guardando...' : 'Guardar'}
                                                        containerStyle={stylesModal.buttons}
                                                        buttonStyle={{ borderRadius: 20 }}
                                                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
                                                        onPress={() => addAdress()}
                                                        disabled={loaderSave}
                                                />
                                        </View>
                                </ScrollView>
                        </View>
                </Overlay>
        )
}

export default ModalAddress