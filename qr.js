const image = document.getElementById('image')
const text = document.getElementById('text');
let gotten = JSON.parse(localStorage.getItem('codes'));

gotten.forEach(item =>{
  image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${item.message}`
  text.textContent = `SCAN TO SEE WHAT ${item.name} SENT TO YOU`
})


function download() {
  const node = document.getElementById('real');
  node.style.display = 'block';
  node.style.opacity = '1';
  node.style.visibility = 'visible';

  setTimeout(() => {
    domtoimage.toBlob(node)
      .then(function (blob) {
        window.saveAs(blob, 'qr-code.png');
      })
      .catch(function (error) {
        console.error('Oops, something went wrong!', error);
      });
  }, 100);
}
