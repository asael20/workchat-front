import {AppProvider} from './context/AppContext'
import PageRoutes from './routes/PageRoutes';
import MainHeader from './components/MainHeader';
import LoginForm from './components/LoginForm';
import Modal from './components/Modal';

import './styles/main.css'

function App() {

  
  return (
    <AppProvider>
      <MainHeader />
      <Modal title={"formulario de Inicio de sesión"}>
        <LoginForm />
      </Modal>
      <PageRoutes />
    </AppProvider>
  );
}

export default App;
