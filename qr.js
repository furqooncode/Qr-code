const image = document.getElementById('image')
const text = document.getElementById('text');
let gotten = JSON.parse(localStorage.getItem('codes'));

gotten.forEach(item =>{
  image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${item.message}`
  text.textContent = `SCAN TO SEE WHAT ${item.name} SENT TO YOU`
})


function download() {
  var node = document.getElementById('real');
  domtoimage.toBlob(node)
    .then(function(blob) {
      window.saveAs(blob, 'my-node.png');
    })
    .catch(function(error) {
      console.error('oops, something went wrong!', error);
    });
}

