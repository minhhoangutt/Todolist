import html from "../core.js";
import Item from "../component/Item.js"
import {connect} from "../store.js"
const connector = connect()

function List({todos,filter,filters}){
   
    return html`
   
    <section class="main">
        <input
         id="toggle-all" 
         class="toggle-all" 
         type="checkbox"
         onchange="dispatch('toggleAll',this.checked)"
         ${todos.every(filters.completed)&& 'checked'}
         
         >
        <label for="toggle-all">Đánh dấu hoàn thành</label>
        <ul class="todo-list">
        ${todos
            .filter(filters[filter])
            .map((todo,index)=>Item({todo,index}))}
           
        </ul>
    </section>
    `
    
}
export default connector(List)