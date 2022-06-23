import "../styles/globals.css";
import Navbar from "../Components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid wrapper">
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
