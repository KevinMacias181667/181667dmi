import React, {useEffect, useState} from "react";
import { Text, View, TextInput } from "react-native";
import {styles} from "./AddLibro.styles";

import { list, create, onCreate } from "../../services/todos";
import ButtonComponent from "../../components/Button";
import i18n from"../../../localizations/i18n";


export default function AddLibroScreen(){
  const [todos, setTodos] = useState();

  const [todo, setTodo] = useState({titulo:"", autor:"", isbm:""})
async function listTodos(){
  const todosFetched = await list();
  if(todosFetched) setTodos(todosFetched);
} 
async function createTodo(titulo, autor, isbm){
  const todoCreated = await create({titulo, autor, isbm});
  return todoCreated;
}
const addData = () => {
  createTodo(todo.titulo, todo.autor, todo.isbm);
};

useEffect(() =>{
  listTodos();
  let subscription;
  (async function subscribe(){
    subscription = await onCreate(listTodos);

    })();
    return () => {
      subscription?.unsubscribe();
    };
}, []);

return (
      <View style={styles.container}>
        <Text>Agregar Un Nuevo Libro</Text>

        <Text>Titulo</Text>
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, titulo: text}))
      }
       style={{width:100, height:50, backgroundColor:"#faf0e6"}} 
       />
       <Text>Autor</Text>
        <TextInput 
        onChangeText={(text)=>
          setTodo((current) =>({...current, autor: text}))
      }
         style={{
           width:100, 
           height:50, 
           backgroundColor:"#e8eaed",
           paddingHorizontal:10, 
           marginVertical:10,
          }} 
           />
            <Text>{i18n.t("ISBN")}</Text>
          
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, isbm: text}))
      }
       style={{width:100, height:50, backgroundColor:"#faf0e6"}} 
       />
        <ButtonComponent title="Create todo" onPress={addData} />

      </View>
    );
  }