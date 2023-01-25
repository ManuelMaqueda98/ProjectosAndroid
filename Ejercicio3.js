import React, {useEffect, useState} from 'react';
import{Text,ScrollView, View,StyleSheet,FlatList,RefreshControl} from 'react-native';

export default function App({ route }) {
    const [fruits,setFruits] = useState(null);
    



        useEffect(() => {

            fetch("http://192.168.137.1:8080/fruits")

            .then(response=> response.json())

            .then((responseJson) => {

                console.log('getting data from fetch', responseJson);

                setFruits (responseJson);

            })

            .catch(error => console.log(error));

        }, [])

    
    const renderItem = ({ item }) => (
        <View>
            <Text>La id es: {item.id}</Text>
           <Text>El nombre es: {item.name}</Text> 
           <Text>El precio es: {item.price}</Text>
        </View>

          

        );

        return(
            <View> 
            <FlatList 
            data={fruits} 
            renderItem={renderItem} 
            keyExtractor={item => item.id} />
             </View> )
        


}

