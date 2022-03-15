import BaseTemplate from '../../src/components/baseTemplate'
import {NextSeo} from 'next-seo';

const newConfig = {
    title:'New Title',
    description:'New Description'
}
export default () => {
    return <BaseTemplate>
        <NextSeo {...newConfig} />
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="box">

                           About
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </BaseTemplate>
}
