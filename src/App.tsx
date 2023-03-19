import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { store } from './store/store';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App = () => {
  const isLogginIn = useSelector((state: RootState) => !!state.slice.accessToken);
  return (
    <Provider store={store}>
      <>
        <main>
          <Header />
          <Routes>
            <Route
              path='/*'
              element={
                isLogginIn ? (
                  <div className='w-full h-auto text-lg justify-center'>
                    Пользователь зашел в аккаунт
                  </div>
                ) : (
                  <Login />
                )
              }
            />
            <Route path='/registration/*' element={<Registration />} />
          </Routes>
        </main>
      </>
    </Provider>
  );
};

export default App;
