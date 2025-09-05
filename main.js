function submit() {
  event.preventDefault()
  const name = document.getElementById('name')
  const message = document.getElementById('message')
  if(name.value === "" && message.value === ""){
    alert("🥵 cannot get QR code of null")
  }else if(name.value === "" || message.value === ""){
    alert("Please 🙏 enter a name or message")
  }else{
          let codes = JSON.parse(localStorage.getItem('codes')) || [];
  
 codes.push({
   name: name.value,
   message :message.value,
 });
 
 localStorage.setItem('codes', JSON.stringify(codes));
 
 window.location.href = 'qr.html';
  }
  name.value = "";
  message.value = ""
}
