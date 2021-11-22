import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, FlatList, TouchableOpacity } from "react-native";
import * as SQLite from 'expo-sqlite';
import Feather from 'react-native-vector-icons/Feather';
 
const db = SQLite.openDatabase("db_tarefa.db");
 
const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };

  const deleteTarefa = (id) => {
    db.transaction(tx => {
      tx.executeSql(`DELETE FROM tarefas WHERE id = ?`, [id],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa deletada com sucesso!`);
          setTarefas("");
          getTarefas();
        }, error => {
          console.log("Erro ao deletar uma Tarefa " + error.message);
        },
      )
    })
  }

  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefas");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };
 
  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };
 
  const renderTarefa = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
          <View style={{flexDirection: "row"}}>
            <Text style={{ marginRight: 9 }}>{item.id}.</Text>
            <Text>{item.nome}</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => {deleteTarefa(item.id)}}>
              <Feather name='trash-2' size={25} style={{color: "#ff6347"}}/>
            </TouchableOpacity>
          </View>
      </View>
    );
  };
 
  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);

  return (
    <View style={{paddingTop: 100}}>
      
      <StatusBar backgroundColor="blue" />
 
    <View style={{flexDirection: "row", justifyContent: "center"}}>
      <TextInput
        placeholder="Informe uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{ marginHorizontal: 8 }}
      />
  

      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            }}
            onPress={incluirTarefa}
            >
            <Feather name='plus-circle' size={25} style={{color: "#3CB371"}} />
          </TouchableOpacity>
      </View>
    </View>

 
      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        key={t => t.id}
      />
    </View>
  );
};
 
export default App;