import { ScrollView, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, CheckBox, Icon, Tab, TabView } from '@rneui/themed'
import NameSteps from '../../components/nameSteps'
import { styles } from '../../styles/payment.style'
import { UserIcon } from '../../icons/icons'
import useOrders from '../../hooks/useOrders'

const Payment = ({ route, navigation }) => {

        const { progress, dispatchSelected } = route.params
        const [tabSelected, setTabSelected] = useState(0)
        const [paymentChecked, setPaymentChecked] = useState(false)
        const { generateOrder } = useOrders()

        const listPayment = [
                {
                        id: 1,
                        name: 'Mercado Pago',
                },
                {
                        id: 2,
                        name: 'Paypal',
                },
                {
                        id: 3,
                        name: 'Amazon Pay',
                }
        ]

        useEffect(() => {
                navigation.setOptions({
                        headerLeft: () => (
                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('order', { progress: 50, dispatchSelected: dispatchSelected })} />
                        ),
                })
        }, [])

        return (
                <View style={styles.container}>
                        <NameSteps progress={progress} />
                        <View style={styles.containerTabs}>
                                <View style={{ backgroundColor: '#CCC', borderRadius: 30 }}>
                                        <Tab
                                                value={tabSelected}
                                                onChange={(e) => setTabSelected(e)}
                                                dense={true}
                                                titleStyle={{ color: '#FFF' }}
                                                containerStyle={{ borderRadius: 30 }}
                                                indicatorStyle={{ backgroundColor: '#00A36E', height: '100%', borderRadius: 30, zIndex: -1, width: '50%' }}
                                        >
                                                <Tab.Item title="Credito/Debito" color='primary' />
                                                <Tab.Item title="Otros" />
                                        </Tab>
                                </View>
                                <View style={styles.containerTabView}>
                                        <TabView value={tabSelected} onChange={setTabSelected} animationType='spring'>
                                                <TabView.Item style={{ flex: 1 }}>
                                                        <ScrollView keyboardDismissMode='interactive'>
                                                                <View style={styles.boxCreditCard}>
                                                                        {listPayment.map((item, index) => (
                                                                                <CheckBox
                                                                                        key={index}
                                                                                        checked={paymentChecked?.id === item.id}
                                                                                        checkedIcon={<UserIcon />}
                                                                                        title={<Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}>{item.name}</Text>}
                                                                                        containerStyle={{ height: 50, padding: 10, borderWidth: 1, borderColor: '#CCC', width: '100%', justifyContent: 'center', elevation: paymentChecked === item.id ? 5 : 0 }}
                                                                                        onPress={() => setPaymentChecked(item)}
                                                                                />
                                                                        ))}
                                                                </View>
                                                        </ScrollView>
                                                </TabView.Item>
                                                <TabView.Item style={{ flex: 1 }}>
                                                        <ScrollView keyboardDismissMode='interactive'>
                                                                <View style={styles.boxOthers}>

                                                                </View>
                                                        </ScrollView>
                                                </TabView.Item>
                                        </TabView>
                                </View>
                                <Button
                                        title="Siguiente"
                                        containerStyle={styles.buttonSubmit}
                                        color='#00A36E'
                                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
                                        onPress={() => generateOrder(dispatchSelected,paymentChecked,navigation)}
                                />
                        </View>
                </View>
        )
}

export default Payment