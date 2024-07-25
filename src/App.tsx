

import './App.css'
import Calendar from './components/Calendar.tsx'
import SearchBar from './components/SearchBar.tsx'
import Card from './components/test.components/Card.tsx'
// adicionei aqui o card//
import 'bootstrap/dist/css/bootstrap.css';
import UpperCard from './components/UpperCard.tsx';
import WeatherTable from './components/test.components/Table.tsx';

function App() {


  return (
    <>
      <SearchBar/>
      <Calendar/>
      <UpperCard/>
      <Card/>
      <WeatherTable/>
      
    </>
  )
}

export default App
