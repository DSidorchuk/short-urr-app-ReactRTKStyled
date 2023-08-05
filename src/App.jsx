import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<MainPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
