import * as React from 'react';
import {Text, View } from 'react-native';


export default function DetalleScreen({route}){
    const {item} = route.params;  
    return(
        <View style = {{flex : 1 ,alignItems : 'flex-start' ,justifyContent : 'center', marginLeft : 50}}>
          <Text>Nombre : {item.Nombre}</Text>
          <Text>Apellidos : {item.Apellidos}</Text>
          <Text>Edad : {item.Edad}</Text>
        </View>
      )
  }