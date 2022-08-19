import './App.css';
import { Home } from './pages';
import { Header } from './components';

function App() {

      return (
            <div className="App flex flex-col gap-2 tracking-wider h-full">
                  <Header/>

                  <div className='app-body__container flex flex-row justify-center'>
                        <Home/>    
                  </div>
            </div>
      );
}

export default App;