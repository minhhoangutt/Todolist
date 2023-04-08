import html from "../core.js";
import {connect} from "../store.js"
const connector = connect()

function Footer({todos,filter,filters}){
    return html`
    <footer class="footer">
    <span class="todo-count">Còn
    <strong>${todos.filter(filters.active).length}</strong> 
    công việc
    </span>
    <ul class="filters">
    ${Object.keys(filters).map(type => html`
    <li>
        <a class="${filter === type && 'selected' }" href="#/" onclick="dispatch('switchFilter','${type}')">
        ${type[0].toUpperCase()+type.slice(1)}
        </a>
    </li>
    
    `)}   
    </ul>
    ${todos.filter(filters.completed).length > 0 && html`
    <button class="clear-completed" onclick="dispatch('clear')">Xóa việc hoàn thành</button>
    `}
    
</footer>  
    `
    
}
export default connector(Footer)