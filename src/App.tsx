import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Loading } from './components';
import './scss/App.scss';
import store from './store';
import { router } from './utils';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<Loading isOpen={true} />} />
      </QueryClientProvider>
    </Provider>

  );
}

export default App;
