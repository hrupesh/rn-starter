import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImgCard from '../components/ImgCard'



export default function ImageScreen() {
    return (
        <View>
            <ImgCard></ImgCard>
            <ImgCard></ImgCard>
            <ImgCard></ImgCard>
            <ImgCard></ImgCard>
        </View>
    )
}

const styles = StyleSheet.create({})
