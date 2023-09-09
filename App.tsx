import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { Product } from './src/pages/Product';
import Routes from './src/routes';
import { New } from './src/pages/New';

export default function App() {
  return (
    <Routes/>
  );
}


