import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Detalhe({route}) {
    const navigation = useNavigation();
   return (
     <View style={styles.container}>

        <View style={styles.row}> 
          <Text style={styles.titulo}>Filmes </Text>
          <Feather style={{marginLeft: 10}} name='film' size={35} />
        </View>
        

        <View>
            <Text style={styles.tituloFilme}>
                {route.params?.nome}
            </Text>
            <Text style={styles.texto}>
            Sinopse: {route.params?.sinopse}
            </Text>
        </View>

        <TouchableOpacity style={styles.linha2}
            onPress={() => {
            navigation.goBack();
            }}
        >
            <Feather name='arrow-left' size={25} />
            <Text style={styles.texto}>
                    voltar
            </Text>
        </TouchableOpacity>

    </View>
   )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 50
    },
    titulo: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 50
    },
    row: {
      flexDirection: 'row',
      justifyContent: "center"
    },
    texto: {
        fontSize: 18,
        margin: 20,
        textAlign: 'justify'
    },
    linha2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    tituloFilme: {
      fontSize: 18,
      fontWeight: '700',
      marginLeft: 20,
    },
  });