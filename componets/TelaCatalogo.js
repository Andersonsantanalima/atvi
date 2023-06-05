
import {View, ScrollView, FlatList} from 'react-native';
import Card from './Card';
import estilos from './estilo';

export default function TelaCatalogo(props) {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/vinho-branco.jpg"),
      tipo: "Chatigny Chardonnay",
      descricao: "Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto."
    },
    {
      id:"2",
      imagem: require("../assets/vinho-rose.jpg"),
      tipo: "Concha y Toro Exportacion",
      descricao: "Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos. "
    },
    {
      id:"3",
      imagem: require("../assets/vinho-especial.jpg"),
      tipo: "Portada Winemaker's",
      descricao: "Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas."
    },
    {
      id:"4",
      imagem: require("../assets/Tenis/Adidas/10.png"),
      tipo: "Elvio Cogno Ravera Barolo",
      descricao: "Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados."
    }
  ];
 
  return (
    
    <ScrollView>
      <View style={estilos.container2}>
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
