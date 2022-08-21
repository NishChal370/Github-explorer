import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Detail, Home } from './pages';

function App() {

      return (
            <div className="App flex flex-col gap-2 tracking-wider h-full">
                  <Header/>
                  
                  <div className='home__container flex flex-row justify-center'>
                        <Routes>
                              <Route path="/detail/:owner/:repository" element={<Detail/>} />
                              <Route path="/" element={<Home/>}/>
                              <Route path="*" element={<Navigate to="/?q=a&sort=bestMatch&page=1" replace /> }/>
                        </Routes>
                  </div>
            </div>
      );
}

export default App;