// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'push up', completed: true },
    { name: 'jogging', completed: false },
    { name: 'swimming', completed: true },
  ];

  return (
    <>
      <h1>exercises in a workout routine List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : 'not-completed`'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;