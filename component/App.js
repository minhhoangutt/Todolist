import html from "../core.js";
import { connect } from '../store.js'
import Header from "../component/Header.js";
import List from "../component/List.js";
import Footer from "../component/Footer.js";

function App({todos}){
    return html`
    <section class="todoapp">
        ${Header()}
        ${todos.length > 0 && List()}
        ${todos.length > 0 && Footer()}
    </section>
    `
    
}
export default connect()(App)