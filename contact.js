
const sendBtn = document.querySelector('#send-btn');
const resetBtn = document.querySelector('#reset-btn');

sendBtn.addEventListener('click', () =>{
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;

  localStorage.setItem("Name", name);
  localStorage.setItem("Email", email);
  localStorage.setItem("Message", message);
});

resetBtn.addEventListener('click', () =>{
  localStorage.clear();
});
