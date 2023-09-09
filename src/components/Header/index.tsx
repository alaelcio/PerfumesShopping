import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';



export function Header() {

    const navigation = useNavigation();

    function handlePro(){
        navigation.navigate('new')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity >
            <Feather
                name='arrow-left'
                size={35}
                style={styles.left}
                
                
            />
       </TouchableOpacity >
            <Feather
                name='user'
                size={35}
                style={styles.user}
                onPress={handlePro}
            />

        </View>
    );
}