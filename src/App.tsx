import './App.css';
import { Home } from './pages';
import { Header } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {

      return (
            <div className="App flex flex-col gap-2 tracking-wider h-full">
                  <Header/>

                  <div className='app-body__container flex flex-row justify-center'>
                        <Routes>
                              <Route path="/detail" element={<div>HEllo detail</div>} />
                              <Route path="/" element={<Home/>}/>
                        </Routes>
                  </div>
            </div>
      );
}

export default App;