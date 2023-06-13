import '@component/styles/globals.css'
import '../styles/Home.module.css'
import '../styles/item-page.css'
import '../styles/image-slice.css'
import '../styles/new-and-technique.css'
import '../styles/admin-page.css'
import '../styles/product.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
