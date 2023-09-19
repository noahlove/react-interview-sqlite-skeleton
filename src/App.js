import './App.css';
import { useState, useEffect} from 'react';
import TaskList from './TaskList';

function App() {
  const [totalInventoryValue, setTotalInventoryValue] = useState(null);

  useEffect(() => {
    // Fetch products from server
    fetch('http://localhost:3005/products')
      .then((response) => response.json())
      .then((data) => {
        setTotalInventoryValue(data.totalInventoryValue);
      });
  }, []);

  if (totalInventoryValue === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Total Inventory Value: ${totalInventoryValue.toFixed(2)}</div>
        <div className="App">
          <TaskList />
        </div>
      </header>
    </div>
  );
}

export default App;