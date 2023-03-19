
import Header from './Header';

const Layout = ({children}) => {
  return(
    <div className="main relative">
      <Header />

      <div className="px-10">
          {children}
      </div>
    </div>
  )
}

export default Layout