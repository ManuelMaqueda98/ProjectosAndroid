/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {Text, StyleSheet,TextInput,Button,View, Image} from "react-native";
import splitLayoutProps from 'react-native/Libraries/StyleSheet/splitLayoutProps';

//const name = "Antonio J";
export default function App()
{
  //#region CrearVariable con funciones
  const getFullName = (firstName, secondName) =>
  {
    return firstName + " " + secondName;
  }
  //#endregion
  //#region CrearEtiqueta 
  //Esto sirve para poder crear una etiqueta en caso de necesitar un componente a menudo se ha de usar
  const Dog = (props) => 
  {
    return(
      <View>
        <Text>soy un perro GUAFH! me llamo {props.name}</Text>
      </View>
    )
  }
  //#endregion
  //#region useState
  const [name, setName] = useState("Cesur"); // Ejemplo para textos
  const [count, setCount] = useState(true); //Ejemplo para contar
  const [count2, setCount2] =useState(true);
  //#endregion
  //#region Style
  const styles =StyleSheet.create
  (
    {
      container:
      {
        marginTop: 10,
        backgroundColor: 'white'
      },
      bigBlue:
      {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
      },
      red:
      {
        color:'red'
      },
      containerButton:
      {
        margin: 50
      },
      nameAndSurName:
      {
        color: 'blue'
      },
      joven:
      {
        color: 'green'
      },
      mayorEdad:
      {
        color: 'red'
      },
      viejo:
      {
        color: 'blue'
      },
      myImageStyle:
      {
          width:200,
          height:200,
          margin: 100
      }
    }
  );
  //#endregion
  //#region FuncionIF
 /*
  const [texto, setTexto] = useState('');
  const [count3, setCount3] = useState(3);
  function funcionIF()
  {
    var regex=/^[a-zA-Z]+5/;
   
    if(!texto.match(regex))
    {
      return <Text>Es un numero</Text>
    }
    else
    {
      return <Text>Es un texto</Text>
    }
    
  
    //return (!texto.match(regex)?console.log("Es un numero"):console.log("Es un texto"));
  }*/
  //#endregion
  //#region FuncionComprobarEdad
  const [edad, setEdad] = useState(0);
  const [tEdad, setTEdad] = useState('');

  function ComprobarEdad()
  {
    
    if(edad < 18)
    {
      setTEdad(<Text style ={styles.joven}>Que joven eres</Text>)  
    }
    else if(edad < 19)
    {
      
     setTEdad(<Text style ={styles.mayorEdad}>Eres mayor de edad</Text>)
    }
    else if(edad >= 19)
    {
   
      setTEdad(<Text style ={styles.viejo}>Eres de mi quinta</Text>)
    }
  }
 
  //#endregion
  //#region ValidarEdad
  const validateEdad = texto => {
    const reg = /^[a-zA-Z]+$/;
    if (!texto.match(reg)) {
      {ComprobarEdad()}
    } else { 
      setTEdad (<Text style ={styles.red}>Es una letra</Text>)
    }
  
  };
  //#endregion
  return(
  <View style={styles.container}> 
  <Image

style={styles.myImageStyle}

source={{

    uri: "https://images.wikidexcdn.net/mwuploads/wikidex/0/02/latest/20090125150654/Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png"

}}/>
  
  </View>);
  
}

//#region Dentro del Return App
/*
 //Ejemplo para que cada boton tenga un estilo predeterminado
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
  //Ejemplo para que cada boton tenga un estilo predeterminado

  //Crear un texto donde escribir
   <TextInput
       style={{
         height: 40,
         borderColor: 'gray',
         borderWidth: 1
       }}
       defaultValue ="Escriba su nombre aqui.."
     />
  //Crear un texto donde escribir  

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
  Ejercicio de preguntar edad introduciendo un numero, este no permite caracteres alfabeticos

  <Text>{tEdad}</Text>
*/
//#endregion


