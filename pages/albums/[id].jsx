
import BaseTemplate from "../../src/components/baseTemplate";
import Gallery from "../../src/components/Albums/Gallery";
export default () => {

    return <BaseTemplate>
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="box"  style={{boxShadow:"none"}}>
                        <Gallery></Gallery>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </BaseTemplate>
}
