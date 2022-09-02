import TodoList from "./TodoList";

function App() {
  return (
    //This 'fragment' allows us to return multiple things
    <div> 
      <TodoList />
      <input type="text" />
    </div>
  )
}

export default App;
