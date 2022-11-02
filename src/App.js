import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routers/routers';

function App() {
  return (
    <div className='max max-w-screen-lg mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
