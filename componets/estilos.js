import { StyleSheet } from "react-native-web";


const estilos = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding :20,
    },
    titulo:{
        color: 'rgba(255,14 ,20, 0.6)',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10 , 
    },
    subtitulo:{
        color: 'rgba(255,14 ,20, 0.6)',
        fontSize: 18 ,
        textAlign: 'center', 
    },
});

export default estilos;