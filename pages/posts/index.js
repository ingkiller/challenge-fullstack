import BaseTemplate from '../../src/components/baseTemplate'
import Posts from '../../src/components/Posts'
export default () => {
    return <BaseTemplate>
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="box">
                            <Posts/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </BaseTemplate>
}
