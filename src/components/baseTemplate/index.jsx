import Header from '../Header'
import Footer from '../Footer'

export default ({children,displayNewsletter = true,...rest}) => (<>
    <Header {...rest}/>
        {children}
    <Footer displayNewsletter ={displayNewsletter}/>
</>)
