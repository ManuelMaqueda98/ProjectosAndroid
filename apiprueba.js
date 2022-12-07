import React, { useState } from 'react';
import { Switch,Text, TextInput, Image, View, StyleSheet, Button, ScrollView, FlatList } from 'react-native';


export default function(){


const DATA = [
{ id: 'bd7aabea-c1b1-46c2-aed5-3ad53abb28ba',
title: 'Primer elemento',
name: 'Azucar',
year: '2020',},
{ id: '3ac68afc-c6m05-41d3-a4f8-fbd91aa97f63',
title: 'Segundo elemento',
name: 'Pimienta',
year: '2019',},
{ id: '58694a0f-3da11-471f-bd96-145571e29d72',
title: 'Tercer elemento',
name: 'Sal',
year: '2021',},
{ id: '581694a0f-3da1-471f-bd96-145571e29d72',
title: 'Cuarto elemento',
name: 'Queso',
year: '2004',},
{ id: '58694a0f-3da1-471f-b1d96-145571e29d72',
title: 'Quinto elemento',
name: 'Cebolla',
year: '2021',},{ id: 'bd7acbea-c11b1-46c2-aed5-3a1d53abb28ba',
title: 'Sexto elemento',
name: 'Pan',
year: '2000',},
{ id: '3ac68afc-c605-48d3-a4f8-fb1d91aa97f63',
title: 'Septimo elemento',
name: 'Mantequilla',
year: '2009',},
{ id: '58694a0f-3da1-471f-b11d96-145571e29d72',
title: 'Octavo elemento',
name: 'Lechuga',
year: '2021',},
{ id: '58694a0f-3da1-11471f-bd96-145571e29d72',
title: 'Noveno elemento',
name: 'Leche',
year: '2021',},
{ id: '58694a0f-311da1-471f-bd96-145571e29d72',
title: 'Decimo elemento',
name: 'Pimenton',
year: '2021',},{ id: 'bd711acbea-c1b1-46c2-aed5-3ad53abb28ba',
title: 'Undecimo elemento',
name: 'Hierbabuena',
year: '2020',},
{ id: '3ac68afc-c61105-48d3-a4f8-fbd91aa97f63',
title: 'Duodecimo elemento',
name: 'Marihuana',
year: '2019',},
{ id: '58694a0f-312da1-471f-bd96-145571e29d72',
title: 'Decimotercer elemento',
name: 'Panceta',
year: '2021',},
{ id: '58694a0f-3da1-47121f-bd96-145571e29d72',
title: 'DecimoCuarto elemento',
name: 'Mortadela',
year: '2021',},
{ id: '58694a0f-3da1-12471f-bd96-145571e29d72',
title: 'DecimoQuinto elemento',
name: 'Chorizo',
year: '2021',},{ id: 'b12d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
title: 'DecimoSexto elemento',
name: 'Estoy ya cansado',
year: '2020',},
{ id: '3ac68afc-c605-48d3-a4f8-fbd91aa9712f63',
title: 'DecimoSeptimo elemento',
name: '3 mas',
year: '2019',},
{ id: '58694a0f-3d21a1-471f-bd96-145571e29d72',
title: 'DecimoOctavo elemento',
name: 'solo 2 mas',
year: '2021',},
{ id: '58694a0f-3da1-471211f-bd96-145571e29d72',
title: 'DecimoNoveno elemento',
name: 'el ultimo bof',
year: '2021',},
{ id: '58694a0f-3da1-42711f-bd96-145571e29d72',
title: 'Vigesimo elemento',
name: 'bomba ',
year: '2021',},];


const renderItem = ({item}) => (

    <View>
        <Text>{item.name}</Text>
    </View>
)

return(
    <View>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>
)
}