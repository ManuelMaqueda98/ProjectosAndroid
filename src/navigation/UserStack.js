import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoScreen from '../containers/ListadoScreen';
import DetalleScreen from '../containers/DetalleScreen';

const UsuarioStack = createNativeStackNavigator();

export default function UserStack(){

  return(
    <UsuarioStack.Navigator screenOptions={{headerShown : false}}>
      <UsuarioStack.Screen name="List" component={ListadoScreen} />
      <UsuarioStack.Screen name="UserScreen" component={DetalleScreen} />
    </UsuarioStack.Navigator>
  );
}