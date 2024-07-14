import { TouchableOpacity,Text, View } from 'react-native';
import {useState} from 'react';
export default function Square({value,onSquareClick}) {
    return <TouchableOpacity onPress={onSquareClick}>
            <View style={{width: 50, height: 50, backgroundColor: 'white',borderColor: 'black',borderWidth: 1,alignItems: 'center',justifyContent: 'center'}}>  
                    <Text style={{fontWeight: 'bold',fontSize: 35}}>{value}</Text>
             </View>
         </TouchableOpacity>

}