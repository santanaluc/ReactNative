
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render(){
  let nome = 'Lucas Santos Santana da Silva';
  let img = 'https://avatars.githubusercontent.com/u/47119652?v=4';
  let linkedin = 'https://linkedin.com/in/upxtls';
  return(
    <View style={{margin: 40}}>
      <Text style={{ fontSize:30, fontWeight: 'bold', textAlign: 'center', marginTop: 60, marginBottom: 0}}> Meu Perfil</Text>
      <Image source={{uri: img}} style={{width:200, height:200, borderRadius:100, margin: 60}}/>
      <Text style={{ fontSize:20, textAlign: 'center' }}>{nome}</Text>
      <Text style={{ fontSize:20, fontWeight: 'bold',margin: 20, textAlign: 'center' }}>Formação</Text>
      <Text style={{ fontSize:20, textAlign: 'center' }}>Superior Cursando</Text>
      <Text style={{ fontSize:20, fontWeight: 'bold',margin: 20, textAlign: 'center' }}>Experiência</Text>
      <Text style={{ fontSize:20, textAlign: 'center' }}>Devops, Suporte Técnico</Text>
      <Text style={{ fontSize:20, fontWeight: 'bold',margin: 20, textAlign: 'center' }}>Projetos</Text>
      <Text style={{ fontSize:20, textAlign: 'center' }}>https://github.com/santanaluc</Text>
      <Text style={{ fontSize:20, fontWeight: 'bold',margin: 20, textAlign: 'center' }}>Linkedin</Text>
      <Text style={{ fontSize:20, textAlign: 'center' }}>{ linkedin }</Text>
    </View>
  );
}
}
export default App;

