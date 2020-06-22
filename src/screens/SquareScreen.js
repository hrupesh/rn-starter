import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from './ColorCounter'

export default function SquareScreen() {
    return (
        <View>
            <Text>Square Screen</Text>

            <ColorCounter color="red" />
            <ColorCounter color="red" />
            <ColorCounter color="red" />
        </View>
    )
}

const styles = StyleSheet.create({})
