import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import { styles } from './styles';
import { Header } from '../../components/Header';

import CardImg from '../../assets/perfume1.png';
import CarImg from '../../assets/perfume2.png';
import CaImg from '../../assets/perfume3.png';



export function Product() {

 
  return (
   
    <View style={styles.container}>
      <Header />

      <View style={styles.sub}>
        <Text style={styles.title}>Latest Collections</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={CarImg}
          style={styles.perf}
        />
       
        <Image
          source={CardImg}
          style={styles.perf}
        />
     
      </View>
       
      <Text style={styles.cardtop}>Featured Products</Text>

      <View style={styles.cardCent}>
       <Image
          source={CardImg}
          style={styles.perf}
        />
       
        <Image
          source={CaImg}
          style={styles.perf}
        />
       </View>
    </View>
  );
}