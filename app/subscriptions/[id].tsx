import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function SubscriptionDetails() {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>Subscription Details {id}id</Text>
        </View>
    )
}