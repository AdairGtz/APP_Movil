import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'

const { width } = Dimensions.get('window')
const widthProgressBar = width - 70

const NameSteps = ({ progress }) => {

        const ProgressBar = () => {

                return (
                        <View style={styles.boxProgressBar}>
                                <View style={[styles.progessBar, { width: `${progress}%` }]}></View>
                        </View>
                )
        }

        return (
                <View style={styles.container}>
                        <View style={styles.containerProgress}>
                                <View style={[styles.circle, { borderColor: progress >= 0 ? '#00A36E' : '#CCC' }]}>
                                        <View style={[styles.fillCircle, { backgroundColor: progress >= 0 ? '#00A36E' : '#CCC' }]}></View>
                                </View>
                                <Text>Domicilio</Text>
                        </View>
                        <View style={styles.containerProgress}>
                                <View style={[styles.circle, { borderColor: progress >= 50 ? '#00A36E' : '#CCC' }]}>
                                        <View style={[styles.fillCircle, { backgroundColor: progress >= 50 ? '#00A36E' : '#CCC' }]}></View>
                                </View>
                                <Text>Confirmar</Text>
                        </View>
                        <View style={styles.containerProgress}>
                                <View style={[styles.circle, { borderColor: progress >= 100 ? '#00A36E' : '#CCC' }]}>
                                        <View style={[styles.fillCircle, { backgroundColor: progress >= 100 ? '#00A36E' : '#CCC' }]}></View>
                                </View>
                                <Text>Pagar</Text>
                        </View>
                        <ProgressBar />
                </View>
        )
}


const styles = StyleSheet.create({
        container: {
                position: 'relative',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: 60,

        },
        containerProgress: {
                width: 70,
                alignItems: 'center',
                zIndex: 2,
        },
        circle: {
                width: 25,
                height: 25,
                borderColor: '#CCC',
                borderWidth: 3,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
        },
        fillCircle: {
                width: 10,
                height: 10,
                backgroundColor: '#CCC',
                borderRadius: 5,
        },
        boxProgressBar: {
                position: 'absolute',
                width: widthProgressBar,
                height: 2,
                backgroundColor: '#CCC',
                zIndex: 1,
                top: 20,
                left: 35,
        },
        progessBar: {
                width: 0,
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: 2,
                backgroundColor: '#00A36E',
                zIndex: 1,
        }

})

export default NameSteps