import './scss/App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './store'

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<>aa</>} />
      </QueryClientProvider>
    </Provider>

  );
}

export default App;
