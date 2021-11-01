import React, { Component } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Switch, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      idade: '',
      sexos: 0,
      sexoOp: [
        {genero: 'Masculino'},
        {genero: 'Feminino'}
      ],
      escolaridade: 0,
      escolaridadeOp: [
        {esc: 'Ensino Fundamental'},
        {esc: 'Ensimo Médio'},
        {esc: 'Ensino Superior'},
        {esc: 'Pós-Graduação'},
        {esc: 'Mestrado'}
      ],
      nacionalidade: false,
      limite: 0,
      result: '',
      message: ''
    }

    this.result = this.result.bind(this);
  }

  result() {
    if(this.state.nome == '' || this.state.idade == '') 
      this.setState({message: "Digite todos os valores"});
    else {
     this.setState({
          nome: this.state.nome,
          idade: this.state.idade,
          limite: this.state.limite,
          result: `
            Nome: ${this.state.nome}
            Idade: ${this.state.idade}
            Sexo: ${this.state.sexoOp[this.state.sexos].genero}
            Escolaridade: ${this.state.escolaridadeOp[this.state.escolaridade].esc}
            ${(this.state.nacionalidade) ? "Brasileiro: Sim" : "Brasileiro: Não"}
            Limite: ${this.state.limite}
          `
      });
    } 
  }

  render() {
    let opSexo = this.state.sexoOp.map((i, key) => {
      return <Picker.Item key={key} value={key} label={i.genero} />
    });

    let opEscolaridade = this.state.escolaridadeOp.map((i, key) => {
      return <Picker.Item key={key} value={key} label={i.esc} />
    });

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
              onChangeText={(text) => this.setState({nome: text})}
          />
          <Text style={styles.label}>Idade:</Text>
          <TextInput 
              style={styles.input}
              onChangeText={(text) => this.setState({idade: text})}
              keyboardType='numeric'
          />
          <Text style={styles.label}>Gênero:</Text>
          <Picker 
            style={styles.combo}
            selectedValue={this.state.sexos}
            onValueChange={(itemValue, itemIndex) => this.setState({sexos: itemValue})}>
              {opSexo}
          </Picker>
          <Text style={styles.label}>Escolaridade:</Text>
          <Picker 
            style={styles.combo}
            selectedValue={this.state.escolaridade}
            onValueChange={(item, index) => {this.setState({escolaridade: item})}}>
              {opEscolaridade}
          </Picker>
          <Text style={styles.label}>Limite:</Text>
          <Slider
            style={{marginBottom: 12}}
            minimumValue={10}
            maximumValue={1000}
            step={10}
            value={this.state.limite}
            onValueChange={(text) => this.setState({limite: text})}
          />
          <Text style={styles.label}>Nacionalidade:</Text>
          <Switch 
            style={{alignSelf: 'center', marginTop: 8, marginBottom: 20}}
            value={this.state.nacionalidade}
            onValueChange={(text) => this.setState({nacionalidade: text})}
          />
          <Pressable style={styles.button} onPress={this.result}>
            <Text style={styles.text}>Confirmar</Text>
          </Pressable>
          <Text style={styles.message}>{this.state.message}</Text>
          <Text style={styles.result}>{this.state.result}</Text>
        </ScrollView>
      </View>
    );
  }
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
    lineHeight: 15,
    paddingTop: 20,
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

export default App;