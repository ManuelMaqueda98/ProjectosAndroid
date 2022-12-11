import * as React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { NavigationContainer, TabRouter, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ListadoScreen({navigation}) {
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

function InfoScreen({navigation}) {
  return(
    <View><Text style={{textAlign: 'center', justifyContent: 'center' }}>Esta App te permite conocer 
                en mas profundidad a las personas</Text></View>
  )
}

function DetalleScreen({navigation,item}){
    return(
      
      <Text>
          {}
      </Text>
        
           
    )
}

const UsuarioStack = createNativeStackNavigator();

function UsuarioStackScreen(){

  return(
    <UsuarioStack.Navigator screenOptions={{headerShown : false}}>
      <UsuarioStack.Screen name="Listado" component={ListadoScreen} />
      <UsuarioStack.Screen name="UserScreen" component={DetalleScreen} />
    </UsuarioStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ }}>
        <Tab.Screen name="Listado de Usuarios" component={UsuarioStackScreen} />
        <Tab.Screen name="Informacion" component={InfoScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}