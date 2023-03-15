import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

export default function Home({navigation}) {
    const [liked, setLike] = useState(false);
    const [likes, setlikes] = useState(9)
    return (
        <View style={styles.container}>
            <View style={styles.separator}></View>
            <View style={styles.card}>
                <Text style={{fontWeight: 900}}>Hoje</Text>
                <View style={styles.separator}></View>
                <Text>Sim, teremos missa hoje, e é importante que todos compareçam.</Text>
                <View style={styles.separator}></View>
                <Pressable onPress={()=>{setLike(!liked); liked?setlikes(likes-1):setlikes(likes+1)}} style={{padding: 5, backgroundColor: '#EEE', borderRadius: 7, width: '20%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}><Ionicons name='heart' size={17} color={liked?'#ff1111':'#CCC'}/><Text> {likes}</Text></Pressable>
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
    },
    separator: {
        paddingTop: 10
    },
    card: {
        backgroundColor: '#fff',
        width: '95%',
        padding: 20,
        borderRadius: 10
    },
});
