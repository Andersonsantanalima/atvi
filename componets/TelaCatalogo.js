
import {View,Text ,ScrollView, FlatList} from 'react-native';
import Card from './Card';
import estilos from './estilos';

export default function TelaCatalogo(props) {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/img_vinho/vinho-branco.jpg"),
      tipo: "Chatigny Chardonnay",
      descricao: "Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto."
    },
    {
      id:"2",
      imagem: require("../assets/img_vinho/vinho-rose.jpg"),
      tipo: "Concha y Toro Exportacion",
      descricao: "Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos. "
    },
    {
      id:"3",
      imagem: require("../assets/img_vinho/vinho-especial.jpg"),
      tipo: "Portada Winemaker's",
      descricao: "Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas."
    },
 
  ];
 
  return (
    
    <ScrollView>
      <View style={estilos.container}>
     <Text style={estilos.titulo}>Nossos vinhos   </Text> 
     <Text style={estilos.subtitulo} >Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>

        <FlatList               
          data={produtos}
          renderItem={({item})=>
            <Card
                props={props}
                produto={item}
            />
          }
          keyExtractor={item => item.id}          
        />        
      </View>
    </ScrollView>
  );
}
