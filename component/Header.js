import html from "../core.js";


function Header(){
    return html`
        <header class="header">
            <h1>Todo List</h1>
            <input class="new-todo" placeholder="Công việc cần làm ?" autofocus onkeyup="event.keyCode === 13 && dispatch('add',this.value.trim())">
        </header>   
    `
    
}
export default Header