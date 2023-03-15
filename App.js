import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import StackRoute from './src/routes/stack';

export default function App() {
    return (
        <NavigationContainer>
            <StackRoute />
        </NavigationContainer>
    );
}
