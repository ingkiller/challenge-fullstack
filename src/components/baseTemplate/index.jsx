import Header from '../Header'
import Footer from '../Footer'

export default ({children,displayNewsletter = true}) => (<>
    <Header/>
        {children}
    <Footer displayNewsletter ={displayNewsletter}/>
</>)
