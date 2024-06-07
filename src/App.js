import logo from './logo.svg';
import './App.css';
import AddAlbum from './Components/AddAlbum';
import SearchAlbum from './Components/SearchAlbum';
import DeleteAlbum from './Components/DeleteAlbum';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddAlbum/>}/>
      <Route path="/search" element={<SearchAlbum/>}/>
      <Route path="/delete" element={<DeleteAlbum/>}/>
      <Route path="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
