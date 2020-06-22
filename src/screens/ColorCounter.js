import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function ColorCounter() {
    return (
        <View>
            <Text>Red</Text>
            <Button title="Add Redness" />
            <Button title="Reduce Redness" />
        </View>
    )
}

const styles = StyleSheet.create({})
