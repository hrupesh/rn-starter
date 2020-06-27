import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BoxScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}> #1</Text>
            <Text style={styles.text2}> #2</Text>
            <Text style={styles.text3}> #3</Text>
            {/* <Text style={styles.text4}>Box Screen 4</Text> */}
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
       width:120,
       backgroundColor:'tomato'
    //    paddingHorizontal:40
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
        // paddingHorizontal:10,
        width:80,
        backgroundColor:'lightgreen'
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
        paddingHorizontal:10,
        position:'absolute',
        right:0,
        height:190,
        width:120,
        backgroundColor:'#512DA8',
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
