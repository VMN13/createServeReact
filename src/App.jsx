import  { useState, useEffect} from 'react';
import './App.css';

function App() {

const [todoItems, setTodoItems] = useState([]);

useEffect(() => {
  fetch('http://localhost:3010/api/todo-tems')
  .then((res) => res.json())
  .then((result) => setTodoItems(result.data));

}, []);


  return (
    <div className="App">
         <div>
      {todoItems.map((item) => (
        <Form.Group key={item.id} className="app__todo-item">
          <Form.Check type="checkbox" checked={item.done} />
          <Form.Control type="text" value={item.text} />
        </Form.Group>
      ))}
    </div>
  );
}
    </div>
  );
}

export default App;
