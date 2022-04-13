import React, {useEffect, useState} from "react";
import { Text, View } from "react-native";
import {styles} from "./Lista.styles";

import { list, create, onCreate } from "../../services/todos";



export default function ListaScreen(){
  const [todos, setTodos] = useState();

  const [todo, setTodo] = useState({titulo:"", autor:"", isbm:"",name:"", description:"",status:"",fecha})
async function listTodos(){
  const todosFetched = await list();
  if(todosFetched) setTodos(todosFetched);
} 
async function createTodo(titulo, autor, isbm,description,status,name){
  const todoCreated = await create({titulo, autor, isbm, name, description, status});
  return todoCreated;
}
const addData = () => {
  createTodo(todo.titulo, todo.autor, todo.isbm,todo.name, todo.description, todo.status);
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
        


        {todos && 
          todos.map((todo)=> (
          <Text key={todo.id}> {`${todo.titulo} ${todo.autor, todo.isbm} ${todo.name,todo.description,todo.status}`}</Text>
          ))}

      </View>
    );
  }