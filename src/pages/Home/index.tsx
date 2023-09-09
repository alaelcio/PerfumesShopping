import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { styles } from './styles';
import  imageImg from '../../assets/image.png';
import {useNavigation} from '@react-navigation/native';

export function Home() {

  const navigation = useNavigation();
 function handleStart(){
  navigation.navigate("product");
 }
  return (
    <ImageBackground
    source={imageImg}
    style={styles.img}
    >
        <Text style={styles.title}>PERFUMES</Text>
        <Text style={{color:'#FDFDFD',
        marginLeft:140,
        marginTop:-35
       }}>.COM</Text>

       <View style={styles.card}>
            <Text style={styles.cardText}>PERFUMES</Text>
       </View>

       <Text style={styles.subtitle}>
       Your fragrance{'\n'} is your message,{'\n'} 
                your scented slogan.
       </Text>

       <TouchableOpacity style={styles.bnt}
        onPress={handleStart}
       >
           <Text style={styles.box}>SHOP NOW</Text>
        <Feather
        name='arrow-right'
        size={15}
        style={{marginRight:15}}
        />
        
       </TouchableOpacity>

    </ImageBackground>
  );
}