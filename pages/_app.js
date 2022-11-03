import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {

  return (
    <div>
    <div className="grid wrapper">
      <Navbar/>
      <Component {...pageProps} />
    </div>
    <Footer/>

    </div>
  );
}

export default MyApp;
