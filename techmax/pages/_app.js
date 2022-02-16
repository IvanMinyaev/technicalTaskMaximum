import '../styles/globals.css';
import Layout from '../components/Layout/Layout.jsx';
import { GlobalProvider } from '../components/GlobalContext/GlobalContext';

const MyApp = ({ Component, pageProps }) => (
  <GlobalProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </GlobalProvider>
);

export default MyApp;
