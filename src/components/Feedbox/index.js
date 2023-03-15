import React, { Component, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './style';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Feedbox ({navigation}) {
    const [liked, setLike] = useState(false);
    const [likes, setlikes] = useState(9)
    return (
        <View>
            <View style={styles.separatorView}></View>
            <View style={styles.card}>
                <Text style={{fontWeight: 900}}>Hoje</Text>
                <View style={styles.separator}></View>
                <Text>Sim, teremos missa hoje, e é importante que todos compareçam.</Text>
                <View style={styles.separator}></View>
                <Pressable onPress={()=>{
                    setLike(!liked); liked?setlikes(likes-1):setlikes(likes+1)
                }} style={styles.button}><Ionicons name='heart' size={17} color={liked?'#ff1111':'#CCC'}/><Text> {likes}</Text></Pressable>
            </View>
        </View>
    );
}
