
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return(
    <div className="main relative">
      <Header />

      <div className="px-10">
          {children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout