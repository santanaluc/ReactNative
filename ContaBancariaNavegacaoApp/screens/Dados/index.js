import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Dados({route}) {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
           Dados
        </Text>

        <View style={styles.linha}></View>

        <Text style={styles.result}>Nome: {route.params?.nome}</Text>
        <Text style={styles.result}>Idade: {route.params?.idade}</Text>
        <Text style={styles.result}>Sexo: {route.params?.sexo}</Text>
        <Text style={styles.result}>Escolaridade: {route.params?.escolaridade}</Text>
        <Text style={styles.result}>Limite: {route.params?.limite}</Text>
        <Text style={styles.result}>Brasileiro: {route.params?.nacionalidade ? 'Sim' : 'Não'}</Text>

        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.text}>Voltar para tela Home</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 30,
      color: 'rgb(45, 46, 92)'
    },
    linha: {
      width: '100%',
      height: 1,
      backgroundColor: 'grey',
      marginBottom: 10
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 14,
      borderRadius: 6,
      backgroundColor: 'rgb(45, 46, 92)',
      width: '100%',
      marginBottom: 20,
      marginTop: 15
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      color: 'white',
    },
    result: {
      color: 'black',
      fontSize: 18
    },
    message: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18
    }
});