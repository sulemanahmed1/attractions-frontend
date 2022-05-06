import React from 'react';
import './App.css';
import { AddAttraction } from './components/AddAttraction'
import { AttractionList } from './components/AttractionList';
import { GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >

          <AddAttraction />
          <AttractionList />
    </GlobalProvider>
  );
}

export default App;
