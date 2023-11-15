import { View, Text } from 'react-native'
import React from 'react'
import { Button, CheckBox } from '@rneui/themed'
import { styles } from '../../styles/dispatch.style'

const CardDispatch = ({ item, dispatchSelected, setDispatchSelected }) => {

        const { id, street, numberStreet, reference, city, state, code, name } = item

        const Content = () => {

                return (
                        <View style={styles.content}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>C.P. {code}</Text>
                                <Text style={{ fontSize: 15, color: '#00A36E' }}>{street} {numberStreet}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
                                <Text style={{ fontSize: 14, color: '#CCC' }}>{reference}</Text>
                                <Button title='Editar' titleStyle={{ color: '#00A36E', backgroundColor: 'transparent', fontWeight: 'bold', textAlign: 'left' }} color='none' />
                        </View>
                )
        }

        return (
                <CheckBox title={<Content />}
                        checked={dispatchSelected?.id ?? null == id}
                        onPress={() => setDispatchSelected(item)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checkedColor='#00A36E'
                        containerStyle={[styles.containerCheckBox, { borderColor: dispatchSelected?.id ?? null == id ? '#00A36E' : 'transparent' }]}

                />
        )
}



export default CardDispatch