import React from "react";
import { View, Text, ScrollView } from "react-native-web";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons'
import estilos from "./estilos";

export default function TelaContato () {
    return (
        <ScrollView>
            <Text style={estilos.textoTtilo}>Entre em contato conosco para comprar nossos produtos</Text>
            <View style={estilos.card}>
                <FontAwesome name='phone' size={50} color={'#400303'} />
                <Text style={estilos.texto}>Telefone:</Text>
                <Text style={estilos.texto2}>+55 21 000000000</Text>
            </View>
            <View style={estilos.card}>
                <Entypo name='location-pin' size={50} color={'#400303'} />
                <Text style={estilos.texto}>Endereço:</Text>
                <Text style={estilos.texto2}>Av. 123, 222 - Rio de Janeiro RJ </Text>
            </View>
            <View style={estilos.card}>
                <MaterialIcons name='email' size={50} color={'#400303'} />
                <Text style={estilos.texto}>Email:</Text>
                <Text style={estilos.texto2}>preferida@adega.com.br</Text>
            </View>
            <View style={estilos.card}>
                <FontAwesome name='instagram' size={50} color={'#400303'} />
                <Text style={estilos.texto}>Instagram:</Text>
                <Text style={estilos.texto2}>@adegapreferida</Text>
            </View>
        </ScrollView>
    )
}