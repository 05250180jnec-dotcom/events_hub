   console.log("main.js is running");
   function greetHome() {
  const msg = document.getElementById("welcomeMsg");
  if (msg) {
    msg.innerHTML = "Welcome to <strong>JNEC Events Hub</strong>!";
  }
}
greetHome();
// document.write("<p>This can wipe the page after load</p>"); // demo only
// window.alert("Registration opens Monday!"); // demo only
console.log("Debug: main.js finished display demos");
