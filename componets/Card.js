import { ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';


const Card = ({props, produto})=>{
    const irParaDetalhes = () => { props.navigation.navigate("Detalhes",produto); };
    return(
        <ImageBackground                                 
            style={estilo.produto}
            source={require(`../assets/img_vinho/${img}`)}
            borderRadius={10}
            resizeMode="cover"
            onTouchEnd={irParaDetalhes}  
        >
            <Text style={estilo.titulo}>{produto.tipo}</Text>

        </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    produto:{
        width: 360,
        height: 700,
        backgroundColor: '#ddd',
        borderRadius: 10,
        justifyContent: "space-between",
        marginVertical: 20               
    },    
    titulo:{
        padding:5,
        backgroundColor: "rgba(255, 255, 255, 0.4)"
    }
  });
  
  export default Card;