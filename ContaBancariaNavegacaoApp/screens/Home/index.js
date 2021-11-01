import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Switch, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
 
export default function Home() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState(0);
    const [escolaridade, setEscolaridade] = useState(0);
    const [limite, setLimite] = useState(0);
    const [nacionalidade, setNacionalidade] = useState(0);

    function nextScreen() {
        navigation.navigate('Dados', {nome, idade, sexo, escolaridade, limite, nacionalidade});
    }

    return (
        <View style={styles.container}>
         <ScrollView style={styles.scroll}>
          <Text style={styles.title}>
            Conta Bancária
          </Text>

          <View style={styles.linha}></View>

          <Text style={styles.label}>Nome:</Text>
          <TextInput
              style={styles.input}
              onChangeText={(text) => setNome(text)}
          />
          <Text style={styles.label}>Idade:</Text>
          <TextInput 
              style={styles.input}
              onChangeText={(text) => setIdade(text)}
              keyboardType='numeric'
          />
          <Text style={styles.label}>Gênero:</Text>
          <Picker 
            style={styles.combo}
            selectedValue={sexo}
            onValueChange={(text) => setSexo(text)}
          >
              <Picker.Item key={0} value={'Feminino'} label="Feminino" /> 
              <Picker.Item key={1} value={'Masculino'} label="Masculino" />
          </Picker>
          <Text style={styles.label}>Escolaridade:</Text>
          <Picker 
            style={styles.combo}
            selectedValue={escolaridade}
            onValueChange={(text) => setEscolaridade(text)}
          >
              <Picker.Item key={0} value={'Ensino Fundamental'} label={'Ensino Fundamental'} />
              <Picker.Item key={1} value={'Ensimo Médio'} label={'Ensimo Médio'} />
              <Picker.Item key={2} value={'Ensino Superior'} label={'Ensino Superior'} />
              <Picker.Item key={3} value={'Pós-Graduação'} label={'Pós-Graduação'} />
              <Picker.Item key={4} value={'PMestrado'} label={'Mestrado'} />
          </Picker>
          <Text style={styles.label}>Limite:</Text>
          <Slider
            style={{marginBottom: 12}}
            minimumValue={10}
            maximumValue={1000}
            step={10}
            value={limite}
            onValueChange={(text) => setLimite(text)}
          />
          <Text style={styles.label}>Nacionalidade:</Text>
          <Switch 
            style={{alignSelf: 'center', marginTop: 8, marginBottom: 20}}
            value={nacionalidade}
            onValueChange={(text) => setNacionalidade(text)}
          />
          <Pressable style={styles.button} onPress={nextScreen}>
            <Text style={styles.text}>Ir para tela de dados</Text>
          </Pressable>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
  scroll: {
    padding: 0,
    margin: 0
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
  image: {
    width: 220,
    height: 220,
    alignSelf: 'center'
  },
  label: {
    textAlign: 'left',
    color: 'rgb(45, 46, 92)',
    fontSize: 16,
    marginBottom: 5,
    fontStyle: 'normal'
  },
  input: {
    width: '100%',
    borderColor: 'rgb(45, 46, 92)',
    borderWidth: 1,
    padding: 5,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    fontStyle: 'normal'
  }, 
  combo: {
    borderColor: 'rgb(45, 46, 92)',
    borderWidth: 1,
    padding: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 6,
    backgroundColor: 'rgb(45, 46, 92)',
    width: '100%',
    marginBottom: 20
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