import {View, Text, ScrollView, FlatList} from 'react-native';
import estilos from './estilos';
import { FontAwesome5, Entypo  } from '@expo/vector-icons'; 

function CardContato({tipo, icone, descricao}) {
  return(
    <View>
      <Text>{tipo}</Text>
      <Text>{descricao}</Text>
      {icone}
    </View>
  )
}
export default function TelaContato(props) {
  const contatos = [
    {
      id:"1",
      icone:<FontAwesome5 name="phone-alt" size={24} color="black" />,
      tipo: "Telefone:",
      descricao: "+55 21 000000000"
    },
    {
      id:"2",
      icone: <Entypo name="location" size={24} color="black" />,
      tipo: "Endereço:",
      descricao: "Av. 123, 222 - Rio de Janeiro RJ  "
    },
    {
      id:"3",
      icone: <Entypo name="email" size={24} color="black" />,
      tipo: "Email:",
      descricao: "@preferida@adega.com.br"
    },
    {
      id:"4",
      icone: <FontAwesome5 name="instagram-square" size={24} color="black" />,
      tipo: "Instagram:",
      descricao: "@adegapreferida"
    }
  ];
 
  return (
    
<View style={estilos.container}>

  <View style={estilos.contato}>
  <FontAwesome5 name="phone-alt" size={24} color="black" />
  <Text style={estilos.titulo }>Endereço</Text>
  <Text style={estilos.subtitulo} >Av. 123, 222 - Rio de Janeiro RJ </Text>
  </View>


</View>
  );
}
