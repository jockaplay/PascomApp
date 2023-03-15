import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login({ navigation }) {
    const [showPass, setShowPass] = useState(true);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={{fontSize: 15, fontWeight: 900}}>Faça o login!</Text>
                <View style={styles.separator}></View>
                <View style={styles.separator}></View>
                <Text style={styles.row}>Login</Text>
                <View style={styles.row}><TextInput style={styles.entry} placeholder={'Login'}></TextInput></View>
                <Text style={styles.row}>Senha</Text>
                <View style={styles.row}><TextInput style={styles.entry} secureTextEntry={showPass} placeholder={'Senha'}/><Pressable onPressIn={()=>setShowPass(false)} onPressOut={()=>setShowPass(true)}><Ionicons style={{padding: 8, position: 'absolute', transform: [{translateY: -15}, {translateX: -29}]}} name={'eye'} color={'#888'}/></Pressable></View>
                <View style={styles.separator}></View>
                <View style={styles.separator}></View>
                <Button onPress={()=>navigation.navigate('main')} title='Entrar' color={'#505050'} fg={'#000'}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dde',
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        paddingTop: 10
    },
    card: {
        backgroundColor: '#fff',
        width: '75%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    row: {
        width: "70%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'column'
    },
    entry: {
        backgroundColor: '#DDD',
        paddingVertical: 2,
        paddingHorizontal: 10,
        width: "100%",
        marginVertical: 10
    }
});
