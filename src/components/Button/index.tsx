import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Button() {

     const navigation = useNavigation();

     function handleOpen(){
      navigation.navigate('new')
     }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bnt}

      >
        <Text style={styles.titlebnt}>BUY NOW</Text>

      </TouchableOpacity >

      <TouchableOpacity style={styles.bnt}
          onPress={handleOpen}
      >

        <Text style={styles.titlebnt}>BUY NOW</Text>

      </TouchableOpacity>
    </View>
  );
}