import BaseTemplate from '../../src/components/baseTemplate'
import AlbumsList from "../../src/components/Albums/AlbumsList";
export default () => (<BaseTemplate>
    <section id="pricing" className="pricing">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="box">
                        <AlbumsList/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</BaseTemplate>)
