const e=document.querySelector(".login-form");e.addEventListener("submit",(function(l){l.preventDefault();const t=l.currentTarget.elements,s=t.email.value,n=t.password.value;if(s&&""!==n){const l={email:s,password:n};console.log(l),e.reset()}else alert("All fields must be filled!")}));
//# sourceMappingURL=task-08.b7c940dd.js.map
