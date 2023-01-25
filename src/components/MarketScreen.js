import React, { useEffect, useState } from 'react';

import { RefreshControl, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

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
        fetch("http://192.168.137.1/fruits")
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from fetch', responseJson);
            setFruits(responseJson);
        })
        .catch(error=> console.log(error));
    },[]);

    const renderItem= ({item})=>{
        return(
        <Text>{item.id} {item.name} {item.price}</Text>
    )
}
    

    return(
       
            
            <FlatList
            data={fruits}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            />
            
    )
}
