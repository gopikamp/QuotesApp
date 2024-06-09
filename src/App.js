import logo from './logo.svg';
import './App.css';
import AddQuotes from './components/AddQuotes';
import SearchQuote from './components/SearchQuote';
import DeleteQuote from './components/DeleteQuote';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddQuotes/>}/>
      <Route path='/Search' element={<SearchQuote/>}/>
      <Route path='/Delete' element={<DeleteQuote/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
