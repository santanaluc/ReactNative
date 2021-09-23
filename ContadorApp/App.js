import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){ 
    this.setState({contador: this.state.contador + 1}); 
  }

  diminuir(){
    if(this.state.contador > 0){
      this.setState({contador: this.state.contador - 1}); 
    } else {
      return;
    }
  }

  render(){
    return(
      <View style={{margin: 20}}>
        <Text style={{fontSize: 30, margin: 20, textAlign: 'center'}}>Contador de Pessoas</Text>
        <Text style={{fontSize: 28, margin: 10, textAlign: 'center'}}>{this.state.cont}</Text>
        <Pressable style={{alignItems: 'center',justifyContent: 'center', height: 90, backgroundColor: "green", color: "white"}} onPress={this.aumentar}>
          <Text style={{fontSize: 30}}>+</Text>
        </Pressable>
        <Pressable style={{backgroundColor: "red", color: "white", alignItems: 'center', justifyContent: 'center', height: 90}} onPress={this.diminuir}>
          <Text style={{fontSize: 30}}>-</Text>
        </Pressable>
      </View>
    )
  }
}
 
export default App;