import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BoxScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Box Screen</Text>
            <Text style={styles.text}>Box Screen</Text>
            <Text style={styles.text}>Box Screen</Text>
            <Text style={styles.text}>Box Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'yellow',
        alignItems:'center',
        flexDirection:'row'
    },
    text:{
        borderColor:'tomato',
        borderWidth:4
    }
})
