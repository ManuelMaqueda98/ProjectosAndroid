/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {Text, StyleSheet,TextInput,Switch,Button,View, Image} from "react-native";
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
//const name = "Antonio J";
export default function App()
{
  //#region Style
  const styles =StyleSheet.create
  (
    {
      container:
      {
        marginTop: 10,
        backgroundColor: 'white'
      },
      styleTInput:
      {
        borderWidth:1,
        borderColor: "Black", 
        width: 250, 
        margin: 20,
        heigh: 20
      },
      row:
      {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 2
      },
      styleText:
      {
        fontSize:20,
        color:"Black",
        marginTop:25,
        fontWeight:'bold'
      },
      styleButton:
      {
        width:300,
        height:300,
        alignSelf: 'center',
        margin:20
      }
    }
  );
  //#endregion
 const [sex, setSex] = useState(false);
  return(
  <View style={styles.container}> 
   <View style={styles.row}>
   <Text style={styles.styleText}>Nombre</Text>
   <TextInput
   defaultValue=''
   placeholder='Escriba aqui su nombre...'
   style={styles.styleTInput}
   />
   </View>

   <View style={styles.row}>
   <Text style={styles.styleText}>Apellidos</Text>
   <TextInput
   defaultValue=''
   placeholder='Escriba aqui su Apellidos...'
   style={styles.styleTInput}
   />
   </View>

   <View style={styles.row}>
   <Text style={styles.styleText}>Edad</Text>
   <TextInput
   defaultValue=''
   placeholder='Escriba aqui su edad...'
   style={styles.styleTInput}
   />
   </View>

   <View style={styles.row}>
   <Text style={styles.styleText}>E-mail</Text>
   <TextInput
   defaultValue=''
   placeholder='Escriba aqui su Correo electronico...'
   style={styles.styleTInput}
   />
   </View>
  <View style={styles.row}>
  <Switch
    trackColor={{false:'pink', true:'blue'}}
    thumbColor={!sex?'white':'white'}
    onValueChange={() => setSex(previousState => !previousState)}
    value={sex}
   />
   <Text style={{margin:20}}>{sex?"Masculino":"Femenino"}</Text>
  </View>
  <View style={styles.styleButton}>
  <Button title='Enviar'/>
  </View>
  </View>);
  
}

//#region Dentro del Return App
/*
 Ejemplo para que cada boton tenga un estilo predeterminado
   <View style ={styles.containerButton}>
    <Button onPress={() =>{setCount(0), setCount2(0)}} title ={"Resetea"}/> 
    </View>
    
    <Text style={styles.red}>Cada vez que pulso sumo 1 y llevo: {count}</Text> 
   <View style ={styles.containerButton}>
      <Button onPress={() => {setCount(count+1)}} title ={"Cuenta 1"}/> 
   </View>
    <Text style={styles.bigBlue}>Cada vez que pulso sumo 10 y llevo: {count2}</Text> 
    <View style ={styles.containerButton}>
    <Button onPress={() =>{setCount2(count2 +10)}} title ={"Cuenta 10"}/>   
    </View>
  Ejemplo para que cada boton tenga un estilo predeterminado

  Crear un texto donde escribir
   <TextInput
       style={{
         height: 40,
         borderColor: 'gray',
         borderWidth: 1
       }}
       defaultValue ="Escriba su nombre aqui.."
     />
  Crear un texto donde escribir  

     <Dog name = "Timon"/>
     <Dog name = "Chufi"/>
     <Dog name = "Tyson"/>
     <Dog name = "Brown"/>   


  Ejercicio de preguntar edad introduciendo un numero, este no permite caracteres alfabeticos
     <Text >Hola mi nombre es: <Text style ={styles.nameAndSurName}>Antonio Jose Diaz</Text></Text>
  <TextInput 
       defaultValue =""
       placeholder = "Escriba su edad aqui.."
       onChangeText = {edad => setEdad(edad)}
       />
  <Button onPress={() =>{validateEdad(edad); ComprobarEdad}} title = {"Finalizar"}/>

  <Text>{tEdad}</Text>
  Ejercicio de preguntar edad introduciendo un numero, este no permite caracteres alfabeticos

  Imagenes
    <Image style={styles.myImageStyle}
      source={
        {
         uri: "https://images.wikidexcdn.net/mwuploads/wikidex/0/02/latest/20090125150654/Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png"
        }
    }/>

    <Image style={styles.myImageStyle}
      source={
       {
        uri: "https://images.wikidexcdn.net/mwuploads/wikidex/c/cb/latest/20220227153601/Fuecoco.png"
       }
    }/>
*/
//#endregion


