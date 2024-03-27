import { lazy, ReactNode, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/mainLayout';
import './global.css';

const Dashboard = lazy(() => import('./pages/dashboard'));

function App() {
  function suspenseWarper(element: ReactNode) {
    return (
      <Suspense
        fallback={
          <div className='suspense-loading'>
            <h1>در حال بارگذاری ...</h1>
          </div>
        }
      >
        {element}
      </Suspense>
    );
  }

  return (
    <Routes>
      {/* LOGGED IN PAGES 👇 */}
      <Route
        path='/'
        element={<MainLayout />}
      >
        <Route
          index
          element={suspenseWarper(<Dashboard />)}
        />
      </Route>
    </Routes>
  );
}

export default App;
