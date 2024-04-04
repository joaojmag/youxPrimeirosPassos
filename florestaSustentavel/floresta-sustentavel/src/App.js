import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import Header from "./components/Header";


function App() {
  return (
    <div>
      <div className='container-fluid row planode-fundo'>
        <div className='container-fluid row planode-fundo imgfundo'>
          <BrowserRouter>
            <Header />
            <RoutesApp />
          </BrowserRouter >
        </div>
      </div>
    </div>
  );
}

export default App;
