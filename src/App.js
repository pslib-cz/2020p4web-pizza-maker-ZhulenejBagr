import logo from './logo.svg';
import './App.css';
import {IngredientsList} from './components/Ingredients';
import {WebRouter} from './components/Router';

function App() {
  return (
    <>
      <WebRouter />
      <IngredientsList />
    </>
  );
}

export default App;
