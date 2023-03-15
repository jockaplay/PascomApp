import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import Feedbox from '../../components/Feedbox';
import { FlatList } from 'react-native-gesture-handler';
import { Posts } from '../../posts';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} data={Posts} keyExtractor={item=>item.id} renderItem={
                ({item})=>(item.id != "end")?<Feedbox/>:<View style={styles.separator}/>
            }/>
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
});
