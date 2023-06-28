import  React from 'react';
import { View, Text, ImageBackground} from 'react-native';

import imgcapa from '../../assets/img_vinhos/capa.jpg'
import estilo from './estilo';

export default function TelaInicio () {
    return(
        <ImageBackground
            blurRadius={ 10 }
            style={ estilo.container }
            source= { imgcapa }
            >
        <View>
            <Text style={ estilo.titulo}> Adega Preferida </Text>
            <Text style={ estilo.subtitulo}> Aqui você encontra os melhores e mais saborosos vinhos. </Text>
        </View>
        </ImageBackground>
    )
}