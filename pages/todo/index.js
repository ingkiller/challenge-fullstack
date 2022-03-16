import BaseTemplate from '../../src/components/baseTemplate'
import TodoList from '../../src/components/TodoList'

export default () => (<BaseTemplate>
    <section id="pricing" className="pricing">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="box">
                        <TodoList/>
                    </div>
                </div>
            </div>
        </div>
    </section>


</BaseTemplate>)
