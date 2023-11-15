import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Input, Overlay } from '@rneui/themed'

const ModalEdit = ({ closeModal, activeModal, handleChangeText, formUser, updateUser, loading, error, onChangeBirthday }) => {

        const { name, fatherSurname, motherSurname, birthday, age } = formUser

        //faltan las validaciones de los campos
        return (
                <Overlay
                        animationType="slide"
                        transparent={true}
                        visible={activeModal}
                        overlayStyle={styles.overlay}
                        onRequestClose={() => closeModal()}
                >
                        <View style={styles.modalView}>
                                <ScrollView>
                                        <Text style={styles.title}>Editar mis datos</Text>
                                        <View style={styles.box}>
                                                <Text style={styles.label}>Nombres</Text>
                                                <Input onChangeText={(value) => handleChangeText(value, 'name')} value={name} containerStyle={styles.Input} inputContainerStyle={styles.boxInput} errorMessage={error?.name ? error.name : ""} errorStyle={styles.boxErrors} />
                                        </View>
                                        <View style={[styles.box, { flexDirection: 'row', gap: 10 }]}>
                                                <View style={styles.containerInput}>
                                                        <Text style={styles.label}>Apellido Paterno</Text>
                                                        <Input onChangeText={(value) => handleChangeText(value, 'fatherSurname')} value={fatherSurname} containerStyle={styles.Input} inputContainerStyle={styles.boxInput} errorMessage={error?.fatherSurname ? error.fatherSurname : ""} errorStyle={styles.boxErrors} />
                                                </View>
                                                <View style={styles.containerInput}>
                                                        <Text style={styles.label}>Apellido Materno</Text>
                                                        <Input onChangeText={(value) => handleChangeText(value, 'motherSurname')} value={motherSurname} containerStyle={styles.Input} inputContainerStyle={styles.boxInput} />
                                                </View>
                                        </View>
                                        <View style={[styles.box, { flexDirection: 'row', gap: 10 }]}>
                                                <View style={styles.containerInput}>
                                                        <Text style={styles.label}>Fecha de Nacimiento</Text>
                                                        <Input onChangeText={(value) => handleChangeText(value, 'birthday')} value={birthday} containerStyle={styles.Input} inputContainerStyle={styles.boxInput} placeholder='Ej: 12/29/2001' />
                                                </View>
                                                <View style={styles.containerInput}>
                                                        <Text style={styles.label}>Edad</Text>
                                                        <Input onChangeText={(value) => handleChangeText(value, 'age')} value={age} containerStyle={styles.Input} inputContainerStyle={styles.boxInput} placeholder='Ej: 23' errorMessage={error?.age ? error.age : ""} errorStyle={styles.boxErrors} />
                                                </View>
                                        </View>
                                        <View style={styles.containerButtons}>
                                                <Button
                                                        title='Cancelar'
                                                        buttonStyle={{ borderRadius: 20, backgroundColor: 'red' }}
                                                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
                                                        containerStyle={{ flex: 1 }}
                                                        onPress={() => closeModal()}
                                                />
                                                <Button
                                                        disabled={loading}
                                                        title={loading ? 'Guardando...' : 'Guardar'}
                                                        buttonStyle={{ borderRadius: 20 }}
                                                        containerStyle={{ flex: 1 }}
                                                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
                                                        onPress={() => updateUser()}
                                                />
                                        </View>
                                </ScrollView>
                        </View>
                </Overlay>
        )
}

const styles = StyleSheet.create({
        overlay: {
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center',
                margin: 0,
                padding: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
        },
        modalView: {
                width: '100%',
                height: 'auto',
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                paddingVertical: 20,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: {
                        width: 0,
                        height: 2
                },
                shadowOpacity: 0.25,
                elevation: 5,
        },
        title: {
                width: '100%',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                textAlign: 'center',
        },
        box: {
                flex: 1,
                width: '100%',
                height: 'auto',
                marginVertical: 15,
        },
        containerInput: {
                flex: 1,
        },
        containerButtons: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 20,
                paddingVertical: 20
        },
        Input: {
                width: '100%',
                height: 40,
                borderColor: '#CCC',
                borderWidth: 2,
                borderRadius: 10,
        },
        boxInput: {
                borderWidth: 0,
                borderColor: 0,
        },
        label: {
                fontSize: 16,
                fontWeight: 'bold',
        },
        boxErrors: {
                textAlign: 'right',
                top: -10,
                width: '100%',
                fontWeight: 'bold',
        }
})

export default ModalEdit