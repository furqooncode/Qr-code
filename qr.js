const image = document.getElementById('image')

let gotten = JSON.parse(localStorage.getItem('codes'));

gotten.forEach(item =>{
  image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${item.message}`
})




function download() {
  const node = document.getElementById('real');

  domtoimage.toPng(node)
    .then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = dataUrl;
      link.click();
      console.log('successful')
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
}
