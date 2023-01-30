import React, { useEffect, useState } from 'react';
import { RefreshControl, Text, FlatList, View, Image } from 'react-native';

const wait = (timeout) => {
    return new Promise(resolve =>{
        setTimeout(resolve, timeout);
    });
}

export default function MarketScreen(){
    const[fruits, setFruits] = useState(null);
    const[refreshing,setRefreshing]= useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    },[]);

    useEffect(() => {
        fetch("http://10.88.3.197:8080/fruits")
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from fetch', responseJson);
            setFruits(responseJson);
        })
        .catch(error=> console.log(error));
    },[]);

    const renderItem= ({item})=>{
        return(
            <View>
        <Text style={{
            color:'blue',
            shadowColor:'black',
            fontSize:18,
            textAlign:'center'


        }}>{item.name} Precio: {item.price}</Text>
        <Image style={{
        height: 450,
        width: 415
      }}
        source={item.name==='piña'?require('../img/piña.jpg'):item.name==='pera'?require('../img/pera.jpg'):item.name==='melocoton'?require('../img/melocoton.jpg')
        :item.name==='manzana'?require('../img/manzana.jpg'):item.name==='uva'?require('../img/uva.jpg'):item.name==='naranja'?require('../img/naranja.jpg'):
        item.name==='kiwi'?require('../img/kiwi.jpg'):require('../img/platano.jpg')} />
    </View>
      )
    }
       
        
        
        

    

    return(
       <View>
        
      
            
            <FlatList refreshControl={
                <RefreshControl refreshing={refreshing}onRefresh={onRefresh}/>
            }
            data={fruits}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            />
             </View>
    )
}
