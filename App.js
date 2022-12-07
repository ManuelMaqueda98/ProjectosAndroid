import React, { useState } from 'react';
import { Text, TextInput, Image, View, StyleSheet, Button } from 'react-native';





/*export default function App () {

  const name = "Manuel";

  return (
    <Text>Hola, soy {name}</Text>
  )

}*/

/*export default function App() {

  const GetFullname = (firstname , secondname) =>
  {
    return firstname + " " + secondname ;
  } 
  return (<Text>Hola, me llamo {GetFullname("Manuel","Maqueda")} no entiendo un pijo</Text>)
}*/

/*export default function App () {
  return (
    <View>
      <Text>Hola, me llamo ...</Text>
      <TextInput
        style ={{
          height: 40,
          borderColor: 'blue',
          borderWidth: 1
        }}
        defaultValue = "Escriba su nombre"
        />
    </View>
  );
}*/

/*const Human = (props) => {
  return (
    <View>
<Text>Soy humano {props.name}</Text>

    </View>
  );
}

export default function App () {

  const [name, Setname] = useState ("Manuel");
  const [apellido, Setapellido] = useState ("Maqueda");
  return (

    <View>
      <Text>Hola {name} {apellido}</Text>
      <Text>Bienvenido</Text>
      <Human name="Maru"/>
      <Human name="Jellylorum"/>
      <Human name="Spot"/>
    </View>
  );
}*/

/*export default function App (){

  const [texto, setTexto] = useState('');

  function checkInp(){
    var regex=/^[a-zA-Z]+S/;
    if(!texto.match(regex))
    {
      return <Text>Es un numero</Text>
      
     } else{
          return <Text>Es letra</Text>
        }
      
    }

      return (

        <View>
          <TextInput
          defaultValue=""
          placeholder="Texto"
          onChangeText={texto => setTexto(texto)}
          />
          {checkInp()}
        </View>
      )
  }*/

export default function App() {
  const nombre = "Manuel Maqueda";
  const [edad, setEdad] = useState('');

  const [texto, setTexto] = useState("")

  const style = StyleSheet.create
    (
      {
        container:
        {
          marginTop: 10,
          backgroundColor: 'Pink'
        },
        bigBlue:
        {
          color: 'yellow',
          fontWeight: 'bold',
          fontSize: 30

        },
        red:
        {
          color: 'red'
        },

        green:
        {
          color: 'green'
        },
        containerButton:
        {
          margin: 50
        },
        nameAndSurName:
        {
          color: 'blue'
        }
      }
    );
 
  function ComprobarEdad() {


    
    console.log(edad)
    return(
    setTexto(
      edad <= 18 
      ? <Text style={style.bigBlue}>¡Qué joven eres!</Text> 
      : edad == 19 
        ? <Text style={style.red}>¡Qué buena edad!</Text> 
        : <Text style={style.green}>Viejo</Text> ))
  }

  return (
    <View style={style.container}>

      <Text >Hola, me llamo <Text style={style.nameAndSurName}>{nombre}</Text></Text>


      <TextInput
        defaultValue=""
        placeholder="Escribe aqui tu edad"
        onChangeText={edad => setEdad(edad)}
        backgroundColor='grey'
      />


      <Text>{texto}</Text>

      <Button onPress={ComprobarEdad} title={"Finalizar"}></Button>
    </View>





  )

}
