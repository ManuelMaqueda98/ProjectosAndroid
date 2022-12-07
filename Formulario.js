import React, { useState } from 'react';
import { Switch,Text, TextInput, Image, View, StyleSheet, Button, ScrollView } from 'react-native';



export default function Estilo(){
    const style = StyleSheet.create
    
    (
      {
        container:
        {
          marginTop: 20,
          marginLeft: 4.5,
          
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
        },
        marginTexto:
        {
            marginTop: 20,
            marginLeft: 10,
           
            fontSize: 20,
            flex: 0,
            flexDirection: 'row',
            
            
        },
        marginEnviar:
        {
            marginTop: 30
        },
        OrdenarText1:
        {
            marginLeft: 80,
            borderWidth: 2,
            borderColor: 'black',
            width: 200
        
        },
        switch:
        {
            marginTop:50,
            marginBottom: -45
            
            
        }
        
        
           
        }
      
    );
   


    
    var [name,setname] = useState ("");
    var [apellido,setapellido] = useState("");
    var [edad,setedad] = useState("");
    var [correo,setcorreo] = useState("");
    var [genero,setgenero] = useState("");
    const [isEnabled, setIsEnabled] = useState(false); 
    const [mostrar, setmostrar] = useState(true);
    
    
return(
    <View >

    <View style={style.marginTexto}>
       
       
        <Text style={style.marginTexto}>Nombre</Text>

        <TextInput style={style.OrdenarText1} onChangeText ={name =>setname(name)} defaultValue='' placeholder='Escriba aqui...' backgroundColor = 'white'  />
    

     </View>

     <View style={style.marginTexto}>

        
        <Text style={style.marginTexto}>Apellido</Text>

        <TextInput style={style.OrdenarText1} onChangeText ={apellido =>setapellido(apellido)} defaultValue='' placeholder='Escriba aqui...' backgroundColor = 'white'  />
          
     

     </View>

     <View style={style.marginTexto}>
       
       
        <Text style={style.marginTexto} >Edad     </Text>

        <TextInput style={style.OrdenarText1}onChangeText ={edad =>setedad(edad)} defaultValue='' placeholder='Escriba aqui...' backgroundColor = 'white'  />
    

     </View>
    

     <View style={style.marginTexto}>
       
       
        <Text style={style.marginTexto}>Correo  </Text>

        <TextInput style={style.OrdenarText1}onChangeText ={correo =>setcorreo(correo)} defaultValue='' placeholder='Escriba aqui...' backgroundColor = 'white'  />
    

     </View>

    <View>

    <Switch style={style.switch}


            trackColor={{false:"red", true:"green"}}

            thumbColor={isEnabled ? "white":"white"}

            onValueChange = {() => setIsEnabled(PreviousState => !PreviousState)}

           
         
            value={isEnabled}
    
         
    
    />
 
    {isEnabled ?<Text style={style.marginTexto}> {genero="Masculino"}</Text>:<Text style={style.marginTexto}> {genero="Femenino"}</Text>}


    
  

    </View>

    

     <View style={style.marginEnviar}>
        
        <Button onPress={() => setmostrar(!mostrar)} title='Enviar'></Button>
     
        {mostrar? null:<Text >Hola mi nombre es {name} {apellido}, tengo {edad} años. Mi correo es {correo} y mi sexo es {genero}</Text>
    }
     </View>


        <View style={{alignItems:'center'}}>
     <Image
        
        style={{width: 300, height: 300}}
        source={{
            uri: "https://www.mypokecard.com/es/Galeria/my/galery/N2fWtWCQJLki.jpg"
        }}
        />

</View>
     </View>


     
)


}