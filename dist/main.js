(()=>{"use strict";class t{static getProjects(){let t=[{title:"Default",todos:[]}];return localStorage.getItem("todoApp")||localStorage.setItem("todoApp",JSON.stringify(t)),t=JSON.parse(localStorage.getItem("todoApp")),t}static saveProject(t){const e=JSON.parse(localStorage.getItem("todoApp"));e.push(t),localStorage.setItem("todoApp",JSON.stringify(e))}static removeProject(t){const e=JSON.parse(localStorage.getItem("todoApp")),i=document.querySelector(".todos-container"),o=e.findIndex((e=>e.title==t));e.splice(o,1),localStorage.setItem("todoApp",JSON.stringify(e)),i.innerHTML="Project deleted, please choose other project"}static getTodos(t){return this.getProjects()[t].todos}static saveTodo(t,e){const i=this.getProjects();i[e].todos.push(t),localStorage.setItem("todoApp",JSON.stringify(i))}static removeTodo(t,e){const i=this.getProjects();i[t].todos.splice(e,1),localStorage.setItem("todoApp",JSON.stringify(i))}static modifyTodo(t,e,...i){const o=this.getProjects(),n=[...i];o[t].todos[e]={title:`${n[0]}`,priority:`${n[1]}`,due:`${n[2]}`,done:n[3]},localStorage.setItem("todoApp",JSON.stringify(o))}}const e=document.querySelector(".todos-container"),i=(i=0)=>{let o=t.getTodos(i);if(e.innerHTML="",n(i),o.length>0)o.forEach(((t,i)=>{let o=new s(t.title,t.due,t.priority,i,t.done);e.appendChild(o.div)}));else{const t=document.createElement("div");t.textContent="Empty Todo List",e.appendChild(t)}},o=()=>{document.querySelectorAll(".project-title").forEach((t=>{t.addEventListener("click",(()=>{const e=t.parentElement.getAttribute("data-index");-1!=e&&(n(e),i(e))}))}))},n=t=>{const e=document.querySelectorAll(".project-container");e.forEach((t=>t.classList.remove("current"))),e[t].classList.add("current")};class d{constructor(t,e,i){this.title=t,this.due=e,this.priority=i,this.done=!1}}class s{constructor(t,e,i,o,n){this.title=t,this.due=e,this.priority=i,this.index=o,this.done=n,this.div=document.createElement("div"),this.priorityDiv=document.createElement("div"),this.titleDiv=document.createElement("div"),this.dueDiv=document.createElement("div"),this.checkButton=document.createElement("button"),this.modifyButton=document.createElement("button"),this.deleteButton=document.createElement("button"),this.div.classList.add("todo-container"),this.priorityDiv.classList.add("priority-display"),this.titleDiv.classList.add("title-display"),this.dueDiv.classList.add("due-display"),this.checkButton.classList.add("btn","finish-btn"),this.modifyButton.classList.add("btn","modify-btn"),this.deleteButton.classList.add("btn","delet-btn"),this.done?this.div.classList.add("done"):this.div.classList.remove("done"),this.priorityDiv.textContent=i,this.titleDiv.textContent=t,this.dueDiv.textContent=e,this.checkButton.textContent="Check",this.modifyButton.textContent="Modify",this.deleteButton.textContent="Delete",this.div.setAttribute("data-index",o),this.checkButton.onclick=this.onClcikCheck.bind(this),this.modifyButton.onclick=this.onClickModify.bind(this),this.deleteButton.onclick=this.onClickDelete.bind(this),this.div.appendChild(this.priorityDiv),this.div.appendChild(this.titleDiv),this.div.appendChild(this.dueDiv),this.div.appendChild(this.checkButton),this.div.appendChild(this.modifyButton),this.div.appendChild(this.deleteButton)}onClcikCheck(){const e=document.querySelector(".todos-container");let i;document.querySelectorAll(".project-container").forEach((t=>{t.classList.contains("current")&&(i=t.getAttribute("data-index"))}));let o=t.getTodos(i)[this.index];t.modifyTodo(i,this.index,o.title,o.priority,o.due,!o.done),o.done?e.querySelector(`[data-index='${this.index}']`).classList.remove("done"):e.querySelector(`[data-index='${this.index}']`).classList.add("done")}onClickModify(){const e=document.querySelectorAll(".project-container"),o=document.querySelector(".popup-display-container");let n;if(e.forEach((t=>{t.classList.contains("current")&&(n=t.getAttribute("data-index"))})),c(),a(),!r)return;const d=document.querySelector(".input-form"),s=document.getElementById("title"),l=document.getElementById("date"),u=document.getElementById("priority");let p=t.getTodos(n)[this.index];s.value=p.title,l.value=p.due,u.value=p.priority,d.addEventListener("submit",(e=>{e.preventDefault(),t.modifyTodo(n,this.index,s.value,u.value,l.value,p.done),i(n),o.innerHTML=""}))}onClickDelete(){const e=document.querySelector(".todo-display-container");let i;document.querySelectorAll(".project-container").forEach((t=>{t.classList.contains("current")&&(i=t.getAttribute("data-index"))})),t.removeTodo(i,this.index),e.querySelector(`[data-index='${this.index}']`).remove()}}const c=()=>{document.querySelector(".popup-display-container").innerHTML='\n        <div class="add-container">\n            <h2>New Todo</h2>\n            <div class="close-btn">X</div>\n            <form class="input-form">\n                <div class="input-container">\n                    <label for="title" class="input-label">Todo:</label>\n                    <input type="text" name="title" class="input" id="title">\n                </div>\n\n                <div class="input-container">\n                    <label for="date" class="input-label">Due:</label>\n                    <input type="date" name="date" id="date" class="input">\n                </div>\n                <div class="input-container">\n                    <label for="priority" class="input-label">Priority:</label>\n                    <select class="input" name="priority" id="priority">\n                        <option class="input" value="high">High</option>\n                        <option class="input" value="medium">Medium</option>\n                        <option class="input" value="low">Low</option>\n                    </select>\n                </div>\n\n                <button class="add-btn" id="add-todo" role="add-todo">Add New</button>\n            </form>\n        </div>\n    ',l()},l=()=>{let t=new Date,e=t.getDate(),i=t.getMonth()+1,o=t.getFullYear();e<10&&(e="0"+e),i<10&&(i="0"+i),t=o+"-"+i+"-"+e,document.getElementById("date").setAttribute("min",t)},r=()=>!!document.getElementById("title").value.trim(),a=()=>{const t=document.querySelector(".close-btn"),e=document.querySelector(".popup-display-container");t.addEventListener("click",(()=>{e.innerHTML=""}))};class u{constructor(t,e){this.title=t,this.index=e,this.div=document.createElement("div"),this.h3=document.createElement("h3"),this.deletButton=document.createElement("button"),this.div.classList.add("project-container"),this.h3.classList.add("project-title"),this.deletButton.classList.add("btn","project-delet-btn"),this.div.setAttribute("data-index",e),this.h3.textContent=t,this.deletButton.textContent="Delet",this.deletButton.onclick=this.onClickDelete.bind(this),this.div.appendChild(this.h3),this.div.appendChild(this.deletButton)}onClickDelete(){const e=document.querySelector(".project-display-container");t.removeProject(this.title),e.querySelector(`[data-index='${this.index}']`).remove()}}const p=document.getElementById("project-add-form");t.getProjects(),document.querySelector(".add-todo-btn").addEventListener("click",(()=>{c(),(()=>{const e=document.querySelector(".input-form"),o=document.getElementById("title"),n=document.getElementById("date"),s=document.getElementById("priority"),c=document.querySelectorAll(".project-container"),l=document.querySelector(".popup-display-container");let a;e.addEventListener("submit",(e=>{if(e.preventDefault(),c.forEach((t=>{t.classList.contains("current")&&(a=t.getAttribute("data-index"))})),r()){const e=new d(o.value.trim(),n.value,s.value);t.saveTodo(e,a),i(a),l.innerHTML=""}}))})(),a()})),p.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=document.querySelector(".project-display-container"),i=document.getElementById("project-add").value.trim();if(-1===(e=>{const i=t.getProjects();if(e)return i.findIndex((t=>t.title===e))})(i)){const n=t.getProjects().length,d=new ClassProject(i),s=new u(i,n);t.saveProject(d),e.appendChild(s.div),o(),document.getElementById("project-add").value=""}else console.log("Duplicate Project")})()})),(()=>{const e=document.querySelector(".project-display-container");t.getProjects().foreach((t=>{let i=new u(t.title);e.appendChild(i.div)}))})(),i(),o()})();