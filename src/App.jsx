import "./App.css";
import { PokemonProvider } from "./context/PokemonContext";
import Router from "./shared/Router";

function App() {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
}

export default App;
