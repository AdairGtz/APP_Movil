import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const TermAndConditions = () => {

        return (
                <View style={styles.container}>
                        <View style={styles.content}>
                                <ScrollView>
                                        <Text style={styles.title}>Términos y Condiciones</Text>
                                        <Text style={{ width: '100%', textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginBottom: 20 }}>Introducción</Text>
                                        <Text style={styles.textContent}>
                                                Los siguientes términos y condiciones rigen el uso del sitio web y los servicios ofrecidos por Xochicalli.
                                                Al acceder y utilizar nuestros servicios, aceptas cumplir y estar sujeto a estos términos y condiciones.
                                                Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices nuestros servicios.
                                        </Text>
                                        <Text style={{ width: '100%', textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginBottom: 20 }}>Uso del Sitio web</Text>
                                        <Text style={styles.textContent}>
                                                1. Uso Aceptable: El sitio web de Xochicalli está destinado para uso personal y no comercial.
                                                No está permitido utilizar nuestros servicios de manera que infrinja los derechos de terceros o viole las leyes aplicables.
                                        </Text>
                                </ScrollView>
                        </View>
                </View>
        )
}


const styles = StyleSheet.create({
        container: {
                flex: 1,
                alignItems: 'center',
                marginTop: 20
        },
        content: {
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
        textContent: {
                textAlign: 'justify',
                fontSize: 18,
        },
        title: {
                width: '100%',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                textAlign: 'center',
                paddingVertical: 10,
        }
})

export default TermAndConditions