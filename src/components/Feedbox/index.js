import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class Feedbox extends Component {
    render() {
        var imagem;
        var texto = "none";
        return (
            <View>
                {imagem ? <Image source={{uri : imagem}} /> : ""}
                <Text>{texto}</Text>
            </View>
        );
    }
}