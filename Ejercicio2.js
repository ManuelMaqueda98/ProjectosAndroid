import * as React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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

            <Button title={item.Nombre} onPress={() => navigation.navigate('DetalleUsuario',{screen : 'DetalleUsuario', params :{item}})} />
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
  return(
    <View><Text style={{textAlign: 'center', justifyContent: 'center' }}>Esta App te permite conocer 
                en mas profundidad a las personas</Text></View>
  )
}

function DetalleScreen({item}){
    return(
      
      <View>
        <Text>{item.Nombre}</Text>
      </View>      
    )
}

function UsuarioStackScreen(){

  return(
    <UsuarioStack.Navigator>
      <UsuarioStack.Screen name="Listado de Usuarios" component={ListadoScreen} />
      <UsuarioStack.Screen name="DetalleUsuario" component={DetalleScreen} />
    </UsuarioStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const UsuarioStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ }}>
        <Tab.Screen name="Listado de Usuarios" component={ListadoScreen} />
        <Tab.Screen name="Informacion" component={InfoScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

