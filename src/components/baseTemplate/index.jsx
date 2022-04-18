import Header from '../Header'
import Footer from '../Footer'

const BaseTemplate = ({children,displayNewsletter = true,...rest}) => (<>
    <Header {...rest}/>
        {children}
    <Footer displayNewsletter ={displayNewsletter}/>
</>)

export default BaseTemplate
