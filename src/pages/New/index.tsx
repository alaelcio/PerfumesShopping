import React from 'react';
import {  Image, Text, View } from 'react-native';

import SliderImg from '../../assets/perfume1.png';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { CardInfo } from '../../components/CardInfo';

export function New() {
  return (
    <View style={styles.container}>
     <Header/>
     <Image
     source={SliderImg}
     style={styles.img}
     />
     <Text style={styles.title}>COCO NOIR CHANEL</Text>
    
        <View style={styles.add}>
            <Text style={styles.addX}>$200.00</Text>
        </View>  
        <Button/>

       <View>
        <Text style={styles.rev}>Reviews</Text>
       </View>
        <CardInfo/>
      
    </View>
  );
}