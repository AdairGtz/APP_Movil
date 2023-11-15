import { View, Text } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed'

const SkeletonProduct = () => {


        const LinearGradient = () => {

                return (
                        <View style={{ flex: 1, backgroundColor: '#CCC' }}></View>
                )
        }
        return (
                <>
                        <View style={{ width: '100%', gap: 10, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                        <Skeleton
                                                LinearGradientComponent={LinearGradient}
                                                animation="wave"
                                                width='100%'
                                                height={200}
                                                style={{ borderRadius: 20 }}
                                        />
                                </View>
                                <View style={{ width: '50%' }}>
                                        <Skeleton
                                                LinearGradientComponent={LinearGradient}
                                                animation="wave"
                                                width='100%'
                                                height={200}
                                                style={{ borderRadius: 20 }}

                                        />
                                </View>
                        </View>
                        <View style={{ width: '100%', gap: 10, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                        <Skeleton
                                                LinearGradientComponent={LinearGradient}
                                                animation="wave"
                                                width='100%'
                                                height={200}
                                                style={{ borderRadius: 20 }}

                                        />
                                </View>
                                <View style={{ width: '50%' }}>
                                        <Skeleton
                                                LinearGradientComponent={LinearGradient}
                                                animation="wave"
                                                width='100%'
                                                height={200}
                                                style={{ borderRadius: 20 }}
                                        />
                                </View>
                        </View>
                </>
        )
}

export default SkeletonProduct