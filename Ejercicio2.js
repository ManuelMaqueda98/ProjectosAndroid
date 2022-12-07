import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ListadoScreen() {
    const DATA =[
        {id:'1',Nombre:'Antonio',Apellidos:'Diaz Peña',Edad:'24'},
        {id:'2',Nombre:'Adri',Apellidos:'Aparcero', Edad:'26'},
        {id:'3',Nombre:'Manuel',Apellidos:'Maqueda',Edad:'24'}
    ]
    const renderitem =({item})=>(
        <View>
            <Text>{item.title}</Text>
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

function InfoScreen() {
  return (
   
  );
}

function DetalleScreen(){
    return(
      
    );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Listado" component={ListadoScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

