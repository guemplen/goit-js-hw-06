const t=document.querySelectorAll("button[data-action]"),e=document.getElementById("value");let n=0;t.forEach((t=>{t.addEventListener("click",(()=>{const c=t.dataset.action;"increment"===c?n+=1:"decrement"===c&&(n-=1),e.textContent=n}))}));
//# sourceMappingURL=task-04.818498c6.js.map
