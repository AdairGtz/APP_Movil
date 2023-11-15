import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars'

const Calendary = () => {
        const [selectedDate, setSelectedDate] = useState(null)

        const onDayPress = (day) => {
                setSelectedDate(day.dateString)
        }

        return (
                <View>
                        <Calendar
                                onDayPress={onDayPress}
                                markedDates={{
                                        [selectedDate]: {
                                                selected: true,
                                                disableTouchEvent: true,
                                                selectedDotColor: 'orange'
                                        }
                                }}
                        />
                        {selectedDate && <Text>Selected date: {selectedDate}</Text>}
                </View>
        )
}

export default Calendary
