import {View, Text, ScrollView, FlatList} from 'react-native';
import Card from './Card';
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
    
    <ScrollView>
      <View style={estilos.container}>
        <FlatList               
          data={contatos}
          renderItem={({item})=>
            <CardContato
                tipo = {item.tipo}
                icone = {item.icone}
                descricao = {item.descricao}
            />
          }
          keyExtractor={item => item.id}          
        />        
      </View>
    </ScrollView>
  );
}
