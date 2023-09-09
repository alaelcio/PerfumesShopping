import React from 'react';
import { Image, View,Text } from 'react-native';
import CardImg from '../../assets/woman.png';
import { styles } from './styles';


export function CardInfo() {
  return (
    <View style={styles.container}>
        <View style={styles.cardinfor}>
            <Image
            source={CardImg }
            style={styles.img}
            
            />
            <Text style={styles.title}>Annie</Text>

            <Text style={styles.subtitle}>Washington, US</Text>
            <Text style={styles.bottom}>
              
The flowery  fragrance are aswm all the perfume sticks
diffrt fragrance nd best in own..... i feel like im in heaven . 
Fll in love wid this. I wanna try all more fragrance in ur booth .
            </Text>
        </View>
        
    </View>
  );
}