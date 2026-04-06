import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";


export default function PublicSiteLayout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  );
}
