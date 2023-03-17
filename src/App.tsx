import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <main>
          <Header />
          <Routes>
            <Route path='/*' element={<Login />} />
            <Route path='/registration/*' element={<Registration />} />
          </Routes>
        </main>
      </>
    </Provider>
  );
};

export default App;
