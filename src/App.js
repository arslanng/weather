import './App.css';
import Container from './Components/Container';
import Header from './Components/Header';
import { WeatherProvider } from './Context/WeatherContext';

function App() {
  return (
    <div className='App'>
      <WeatherProvider>
       <Header/>
       <Container/>
      </WeatherProvider>
    </div>
  );
}

export default App;
