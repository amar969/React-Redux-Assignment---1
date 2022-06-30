import './App.css';
import { Counter } from './Components/Counter';
import { Todo } from './Components/Todo';
import {Routes, Route} from "react-router-dom"
import { TodoItem } from './Components/TodoItem';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo /> }></Route>
        <Route path='/TodoItem/:id' element={< TodoItem />} ></Route>
        <Route path="/Counter" element={<Counter /> } ></Route>
      </Routes>
    </div>
  );
}

export default App;
