import React, { useEffect, useState } from 'react';
import { Button,RefreshControl, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import BotonPers from './BotonPers';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default function MarketScreen(){
    const [fruits,setFruits] = useState(null);
    const [refreshing,setRefreshing] = useState(false);
    const [nombre, setNombre] = useState(null);
    const [precio, setPrecio] = useState(null);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    function post(){
        let data ={
            method:'POST',
            Headers:{
                'Accept' : 'application/json',
                'Conten-Type':'application/json',
            },
            body: JSON.stringify({
                name: nombre,
                price: precio
            }),
        };
        return fetch("http://192.168.137.1/fruits", data)
    }

    return(
        <ScrollView>
            <Text style={{textAlign: 'center', fontSize: 17}}>Add fruits</Text>
            <TextInput style={{
                alignSelf:'center',
                marginBottom:25,
                marginTop:25,
                marginLeft:25,
                padding:0,
                height:30,
                width:250,
                borderWidth:1,
                fontSize:15,
                borderColor: 'F1A999'
            }}
            placeholder="Name"
            onChangeText={nombre => setNombre(nombre)}/>
            <TextInput
            style={{
                alignSelf:'center',
                marginBottom:25,
                marginLeft:25,
                padding:0,
                height:30,
                width:250,
                borderWidth:1,
                fontSize:15,
                borderColor: 'F1A999'
            }}
            placeholder="Price"
            onChangeText={precio => setprecio(precio)} />

            <BotonPers onPress={post} />
        </ScrollView>
    )
}