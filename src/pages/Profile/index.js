import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal } from 'react-native';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Header } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

const Data = require('../../data.json')

export default function Profile({navigation}) {
    const [modalVisible, setMV] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.separator}></View>
            <View style={styles.card}>
                <View style={styles.imagemContainer}>
                    <Image style={styles.imagem} source={{uri: Data.imagem}}/>
                    <Pressable onPress={() => {}} style={{position:'relative', backgroundColor: '#fff', borderRadius: 30, transform: [{translateX: 30}, {translateY: -20}]}}>
                        <Ionicons size={20} name='settings-outline'/>
                    </Pressable>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>{Data.nome}</Text>
                    <Text>{Data.func}</Text>
                </View>
            </View>
            <View style={styles.separator}></View>
            {Data.day?<View style={styles.card}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Você foi convocado para:</Text>
                    <Text style={{fontWeight: 900}}>{Data.day}</Text>
                </View>
            </View>:""}
            <View style={styles.separator}></View>
            <View style={{backgroundColor: '#fff',
                        width: '95%',
                        borderRadius: 10}}>
                <Pressable onPress={()=>navigation.navigate('login')} style={{justifyContent:'center', alignItems: 'center', padding: 20}}><Text style={{fontWeight: 900}}>Sair</Text></Pressable></View>
            <StatusBar style="auto"/>
            <Modal visible={modalVisible} transparent={true}><View style={{flex: 1, backgroundColor: '#0000005f'}}></View></Modal>
            <Modal visible={modalVisible} animationType={'fade'} transparent={true}>
                <View style={styles.modalView}>
                    <View style={styles.modal}>
                        <Text>Edit</Text>
                        <View style={styles.separator}></View>
                        <View style={styles.row}><Text>Nome: </Text><TextInput onSubmitEditing={()=>{setMV(!modalVisible)}} style={{width: 200, borderBottomWidth: .5, borderBottomColor: '#ccf'}}/></View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dde',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        width: '95%',
        padding: 20,
        borderRadius: 10
    },
    separator: {
        paddingTop: 10
    },
    imagemContainer:{
        alignItems: 'center',
        width: "100%",
    },
    imagem: {
        borderRadius: 40,
        width: 80,
        height: 80,
        alignItems: 'center',
    },
    info: {
        alignItems: 'center',
    },
    title: {fontSize: 20,
        fontWeight: 900,
        textTransform: 'capitalize',
    },
    modalView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        padding: 10,
        backgroundColor: '#fff',
        elevation: 1,
        alignItems: 'center',
        borderRadius: 5,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    }
});
