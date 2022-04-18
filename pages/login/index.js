import BaseTemplate from '../../src/components/baseTemplate'
import Login from "../../src/components/Login/Login";
const PageLogin = () => {
    return <BaseTemplate displayNewsletter={false}>
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="box">
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </BaseTemplate>
}
export default PageLogin
