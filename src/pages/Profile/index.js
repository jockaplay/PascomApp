import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Data = require('../../data.json')

export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.separator}></View>
            <View style={styles.card}>
                <View style={styles.imagemContainer}>
                    <Image style={styles.imagem} source={{uri: Data.imagem}}/>
                    <Pressable onPress={() => console.log("Edit Img")} style={{position:'relative', backgroundColor: '#fff', borderRadius: 30, transform: [{translateX: 30}, {translateY: -20}]}}>
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
    }
});
