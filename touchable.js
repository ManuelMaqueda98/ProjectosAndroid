import React, { useState } from 'react';
import { SwitchText, TextInput, Image, View, StyleSheet, Button, ScrollView, Text, TouchableOpacity,TouchableHighlight } from 'react-native';
export default function app(){


    const [contador, setcontador] = useState(0);

    return(
        <View>
            <TouchableOpacity 
            style={{alignItems: "center", backgroundColor: "blue",padding:10}}
            onPress={() =>setcontador(contador-1)}
            >
                <Text>Pulsa aqui-</Text>
            </TouchableOpacity>
            <TouchableHighlight
            style={{alignItems:"center",backgroundColor:"red",padding:10}}
            onPress={() => setcontador(contador+1)}
            >
                <Text>Pulsa aqui+</Text>
            </TouchableHighlight>

            <Text>total : {contador}</Text>


        </View>



    )
    

}