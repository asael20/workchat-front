import {AppProvider}  from './context/AppContext';
import PageRoutes     from './routes/PageRoutes';
import MainHeader     from './components/MainHeader';
import LoginForm      from './workcha-page/LoginForm';
import Modal          from './components/Modal';

import './styles/main.css'

function App() {

  return (
    <AppProvider>
      <MainHeader />
      <PageRoutes />
    </AppProvider>
  );
}

export default App;
