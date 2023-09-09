
import { ImageBackground,TouchableOpacityProps, ImageSourcePropType, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export interface cardProps {
    id:string;
    cover: ImageSourcePropType;

}

interface Props extends TouchableOpacityProps{
    data:cardProps;
}

export function Card({data, ...rest}:Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground
        source={data.cover}
        style={styles.cover}
        />
    </TouchableOpacity>
  );
}