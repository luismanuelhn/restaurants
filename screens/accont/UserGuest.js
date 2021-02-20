import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import {Button} from 'react-native-elements'
import{useNavigation}from '@react-navigation/native'

export default function UserGuest() {
    const navigation=useNavigation()
    return (
        <ScrollView
         centerContent
         style={styles.viewBody}
        
        >
        <Image
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        style={styles.image}
        
        /> 
        <Text style={styles.title}>Consulta tu perfil en restaurante</Text>
        <Text style={styles.description}>Como discribirias tu mejor restaurante, busca y visualiza de una forma sencilla, vota por el tuyo</Text>
        <Button
        buttonStyle={styles.button}
         title="Ver tu perfil"
         onPress={() => navigation.navigate("login")}
        />

       
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal:30
    },
    image: {
        height:300,
        width: "100%",
        marginBottom:10,
       
    },
    title:{
        fontWeight:"bold",
        fontSize:19,
        marginVertical:10,
       textAlign:"center"
    },
    description:{
      
        marginBottom:20,
        color:"#a65273",
        textAlign:"center"
    },
    button:{
        backgroundColor:"#442484"
    }
})
