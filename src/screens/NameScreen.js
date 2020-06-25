import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function NameScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Text</Text>
            <TextInput  placeholder="Enter Text"  style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Nunito Sans Regular'
    },
    label:{
        fontSize:35,
        letterSpacing:2,
    }
})
