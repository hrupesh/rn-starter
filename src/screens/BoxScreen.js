import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BoxScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Box Screen 1</Text>
            <Text style={styles.text2}>Box Screen 2</Text>
            <Text style={styles.text3}>Box Screen 3</Text>
            <Text style={styles.text4}>Box Screen 4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'yellow',
        // alignItems:'center',
        // flexDirection:'row',
        // justifyContent:'center',
        height:'100%',
    },
    text1:{
        borderColor:'tomato',
        borderWidth:4,
        flex:0.25,
        textAlign:"center",
        textAlignVertical:'center',
        fontSize:14,
        letterSpacing:3,
       alignSelf:'flex-start',
       paddingHorizontal:40
    },
    text2:{
        borderColor:'tomato',
        borderWidth:4,
        flex:0.25,
        textAlign:"center",
        textAlignVertical:'center',
        fontSize:14,
        letterSpacing:3,
        alignSelf:'center',
        paddingHorizontal:10
    },
    text3:{
        borderColor:'tomato',
        borderWidth:4,
        flex:0.25,
        textAlign:"center",
        textAlignVertical:'center',
        fontSize:14,
        letterSpacing:3,
        alignSelf:'center',
        paddingHorizontal:10
    },
    text4:{
        borderColor:'tomato',
        borderWidth:4,
        flex:0.25,
        textAlign:"center",
        textAlignVertical:'center',
        fontSize:14,
        letterSpacing:3,
        alignSelf:'flex-end',
        paddingHorizontal:40,
        // backgroundColor:'#673AB7',
        // ...StyleSheet.absoluteFillObject
    },
})
