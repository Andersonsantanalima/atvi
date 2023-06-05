import React from "react";
import { Text,ImagemBackground } from "react-native-web";

import imgCapa from '../assets/capa.jpg';
import estilos from "./estilo";

export default function TelaInicial(){
    return(

<ImagemBackground  blurRadius={10} style={estilos.container}   source={imgCapa} > 
   <Text style={estilos.titulo}>Adega Preferida</Text>
   <Text style={estilos.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
</ImagemBackground>


    );
}