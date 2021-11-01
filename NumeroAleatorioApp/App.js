import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      numero: null,
      result: '',
      calc: ''
    }

    this.calc = this.calc.bind(this);
  }
  
  calc() {
    let numero = this.state.numero;

    let message = '';
    let random =  Math.floor(Math.random() * 10) + 1;

    if (numero == null )
      message = 'Digite todos os valores';
    else {
      if (random == numero) 
        message = 'Você acertou! Você digitou o número: ' + numero + ' e o número do jogo é: ' + random;
      else 
        message = 'Você errou! Você digitou o número: ' + numero + ' e o número do jogo é: ' + random;
    }

    this.setState({
      result: message,      
    });
  }

  render() {
    let img = './img/numero.png';   
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Número Aleatório
        </Text>

        <View style={styles.linha}></View>

        <Image 
          source={require(img)}
          style={styles.image}
        />
        <Text style={styles.label}>Digite um número:</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({numero: text})}}
        />
        <Pressable style={styles.button} onPress={this.calc}>
          <Text style={styles.text}>Descubra</Text>
        </Pressable>
        <Text style={styles.result}>{this.state.result}</Text>
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
    marginBottom: 8
  },
  image: {
    width: '100%',
    height: 220,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 25
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
    textAlign: 'center',
    color: 'black',
    fontSize: 18, 
    marginBottom: 2
  }
});

export default App;
