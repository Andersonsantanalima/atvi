import estilo from './estilo';
import {View, Text, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Detalhes(props) {
  let produtos  = props.route.params;
  console.log(produtos);
  const voltar = () => { props.navigation.goBack(); };
  return (
    <View style={estilo.container}>
      <View style={estilo.head}>
        <Ionicons name="arrow-back-outline" size={24} color="#555" onPress={voltar} />
        <Text style={estilo.head_title}>
          Detalhes
        </Text>
      </View>
      <View style={estilo.body}>
          <View style={estilo.slides}>
            <ScrollView horizontal={true}>
              {              
                pro.fotos.map(foto=>(
                  <Image style={estilo.foto} source={require(`../../assets/img_vinho/${imagem}`)} />)
                )
              }
            </ScrollView>
          </View>
          <View style={estilo.info}>
            <Text style={estilo.titulo}> {produtos.modelo}</Text>
            <Text style={estilo.valor}> {produtos.preco}</Text>
            <Text style={estilo.valor}> {veiculo.ano}</Text>

          </View>
      </View>
    </View>
  );
}
