
import BaseTemplate from "../../src/components/baseTemplate";
import Gallery from "../../src/components/Albums/Gallery";

const PageGallery = () => {
    return <BaseTemplate>
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="box"  style={{boxShadow:"none"}}>
                        <Gallery/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </BaseTemplate>
}
export default PageGallery
