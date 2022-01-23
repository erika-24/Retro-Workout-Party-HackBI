import React, { useState, useEffect } from "react"
import { Route, Switch, Link } from "react-router-dom"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

import Workout from "../pages/Workout"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar";
import Final from "../pages/Final"
import jazzercise_img from "./jazzercise.png"
import pilates_img from "./pilates.png"
import aerobics_img from "./aerobics.png"

const TodoContainer = () => {

  const [todos, setTodos] = useState(getInitialTodos())

  // useEffect(() => {
  //   // getting stored items
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)

  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [])

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || [] 
  }
 
  const handleChange = id => {
    setTodos(prevState => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  };

  const addTodoItem = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };
    setTodos([...todos, newTodo])
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  return (   
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              {/* <InputTodo addTodoProps={addTodoItem} />
              <TodosList 
                todos={todos} 
                handleChangeProps={handleChange} 
                deleteTodoProps={delTodo}
                setUpdate ={setUpdate} 
              /> */}
              <div className="button_container">
              <button className="home_button"> <img src={jazzercise_img} /> <h2> Jazzercise </h2> <Link to="/Workout"> Start! </Link></button>
              <button className="home_button" ><img src={aerobics_img} /> <h2> Aerobics </h2> <Link to="/Workout"> Start! </Link></button>
              <button className="home_button"> <img src={pilates_img} /><h2> Pilates </h2> <Link to="/Workout"> Start! </Link></button>
            </div>
          </div>
          </div>
        </Route>
        <Route path= "/Workout">
          <Workout />
        </Route>
        <Route path= "/final">
          <Final />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
}

export default TodoContainer