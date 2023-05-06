import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ViewOneResturant from './components/ViewOneResturant';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/resturant-view/:id' element={<ViewOneResturant/>}/>
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
