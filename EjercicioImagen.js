import React, { useState } from 'react';
import { Switch,Text, TextInput, Image, View, StyleSheet, Button, ScrollView } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default function App(){
    const [isEnabled, setIsEnabled] = useState(false); 
    
    
    return(



    <View>
        
    <Switch

    trackColor={{false:"green", true:"purple"}}

    thumbColor={isEnabled ? "white":"red"}

    onValueChange = {() => setIsEnabled(PreviousState => !PreviousState)}
   
    value={isEnabled}

    />

    { isEnabled ?  img2() : img()}

   </View>
     )
     
}

function img(){
    return(
<Image

style={{width: 500, height: 500}}
source={{
    uri: "https://www.decantalo.com/es/18359-large_default/tanqueray-london-dry-gin.jpg"
}}
/>
)
}

function img2(){

    return(
        <Image
        
        style={{width: 500, height: 500}}
        source={{
            uri: "https://pbs.twimg.com/media/ExFRNeRW8AEMjqu.jpg"
        }}
        />
        )
        }
        


/*return(
    <ScrollView>
<Image


style={{width: 500, height: 500}}
source={{
    uri: "https://pbs.twimg.com/media/ExFRNeRW8AEMjqu.jpg"
}}
/>

<Image

style={{width: 500, height: 500}}
source={{
    uri: "https://www.decantalo.com/es/18359-large_default/tanqueray-london-dry-gin.jpg"
}}
/>

<Image

style={{width: 500, height: 500}}
source={{
        uri: "https://i.ytimg.com/vi/_Qe9O90cD80/maxresdefault.jpg"
}}
/>
</ScrollView>
)*/