import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Product } from '../pages/Product';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (

    <stackRoutes.Navigator
        screenOptions={{ headerShown: false }}
    >
        <stackRoutes.Screen
            name='home'
            component={Home}
        />

        <stackRoutes.Screen
            name='product'
            component={Product}
        />

        <stackRoutes.Screen
            name='new'
            component={New}
        />


    </stackRoutes.Navigator>
)

export default AppRoutes;