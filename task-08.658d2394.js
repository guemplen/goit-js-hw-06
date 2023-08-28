document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();const l=e.currentTarget.elements,t=l.email.value,s=l.password.value;if(t&&""!==s){const e={email:t,password:s};console.log(e)}else alert("All fields must be filled!")}));
//# sourceMappingURL=task-08.658d2394.js.map
