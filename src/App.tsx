import './App.css';
import Auth from './routing/Auth';
import Routing from './routing/Routing';

const App = () => {

  return (
    <div className="App">
      <Auth>
        <Routing>
        </Routing>
      </Auth>
    </div>
  );
}

export default App;
