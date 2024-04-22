import { BrowserRouter } from 'react-router-dom'

import Rotas from './rotas';
import Header from './componentes/Header';
import AuthProvider from './contexts';


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Rotas />
        </AuthProvider>
      </BrowserRouter>
    </>

  );
}

export default App;

