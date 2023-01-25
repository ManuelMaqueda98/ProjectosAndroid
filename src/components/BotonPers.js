import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet, Button } from 'react-native'

export function Boton(props) {

    const{onPress}=props
    const styles= StyleSheet.create({
        Button:{
            alignSelf:'center',
            borderRadius:15,
            paddingVertical:15,
            width:'50%'
        },
        buttonText:{
            textAlign:'center'
        }
    })
    return (
        
        <TouchableOpacity style={{ ...styles.Button, backgroundColor:'#979595'}} onPress={onPress}>
                    <Text style={{...styles.buttonText,color:'#FFFFFF'}}>Enviar</Text>
                        
                        </TouchableOpacity>
      )
      
}