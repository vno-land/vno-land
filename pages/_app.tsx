import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import { useStore } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('my app:', pageProps);
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
