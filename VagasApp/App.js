import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Vaga from './scr/Vaga';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vagas: [
        {
          id: 0,
          titulo: 'Analista DevOps Sr.',
          salario: 'R$ 5.000',
          descricao: 'Experiência na implementação de esteiras DevOps (CI/CD), utilizando as ferramentas Azure DevOps e Jenkins (Freestyle e Groovy). Conhecimento em Git. Construir e realizar a manutenção de scripts por meio das plataformas Bash/PowerShell, além de Docker e Kubernetes. Por fim, ter atuado em projetos Ágeis, gestão de equipe e elaboração de status report de projetos.          ',
          contato: 'empresa@empresa.com'
        },
        {
          id: 1,
          titulo: 'DevOps Engineer',
          salario: 'R$ 4.500',
          descricao: 'A equipe de DevOps é responsável pela consolidação das fontes de dados de várias aplicações para a exibição de dashboard. Como parte desse time, você irá estabelecer e facilitar as melhores práticas de CI/CD, baseado em Cloud, elaborando estratégias de testes automatizados e auxiliando a equipe a agregar agilidade e valor ao negócio.',
          contato: 'empresa@empresa.com'
        },
        {
          id: 2,
          titulo: 'Consultor(a) DevOps Sr.',
          salario: 'R$ 6.000',
          descricao: 'Experiência na implementação de esteiras DevOps (CI/CD), utilizando as ferramentas Azure DevOps e Jenkins (Freestyle e Groovy). Conhecimento em Git. Construir e realizar a manutenção de scripts por meio das plataformas Bash/PowerShell, além de Docker e Kubernetes. Por fim, ter atuado em projetos Ágeis, gestão de equipe e elaboração de status report de projetos.',
          contato: 'empresa@empresa.com'
        }
      ],
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Vagas</Text>
        <FlatList
          data={this.state.vagas}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Vaga detalhes={item}/>}
        />
      </View>            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    textAlign: 'center',
    margin: 10,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 15,
    paddingTop: 20,
    color: 'rgb(45, 46, 92)'
  }
});

export default App;