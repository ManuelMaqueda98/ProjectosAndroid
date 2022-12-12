import * as React from 'react';
import { Button, FlatList, Text, View } from 'react-native';


export default function ListadoScreen({navigation}) {
    const DATA =[
        {id:'1',Nombre:'Antonio',Apellidos:'Diaz Peña',Edad:'24'},
        {id:'2',Nombre:'Adri',Apellidos:'Aparcero', Edad:'26'},
        {id:'3',Nombre:'Manuel',Apellidos:'Maqueda',Edad:'24'}
    ]
    const renderitem =({item})=>(
        <View>
            <Text>{item.title}</Text>

            <Button 
            title={item.Nombre} 
            onPress={() => navigation.navigate('UserScreen',{item})} />
            
        </View>

    )
      
  return (
    <View>
            <FlatList
            data={DATA}
            renderItem={renderitem}
            keyExtractor={item => item.Nombre}
            />
        </View>

  );
}