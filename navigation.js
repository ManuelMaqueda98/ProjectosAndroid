import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla principal</Text>
      <Button onPress={()=> navigation.navigate("Perfil")} title="Siguiente"></Button>
    </View>

    
  );
}

function ProfileScreen({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color:'green'}}>Pantalla de Perfil</Text>
          <Button onPress={()=> navigation.navigate("Home")} title="Home"></Button>
          <Button onPress={()=> navigation.navigate("Registro")} title="Registrarse"></Button>
        </View>
      );
    }

function RegistroScreen({navigation}){
    return(

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color:'green'}}>
                Pantalla de Registro
                console.log({route});
            </Text>
            <Button onPress={()=> navigation.navigate("Home")} title="Home"></Button>
          <Button onPress={()=> navigation.navigate("Perfil")} title="Perfil"></Button>
        </View>
    )

}
   

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        
      
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

export default App;

