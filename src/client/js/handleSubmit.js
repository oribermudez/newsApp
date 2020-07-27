const handleSubmit = (event) => {
  event.preventDefault();
  document.getElementById('feedback').innerHTML = '';
  // check what text was put into the form field
  let url = document.getElementById('url').value;

  if (Client.checkUrl(url)) {
    fetch('//localhost:8081/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    })
    .then(res => res.json())
    .then(data => {
      Client.renderData(data);
      document.getElementById("newsForm").reset();
    })
    .catch(error => (console.log('Error: ', error)))
  }
  return;
}

export { handleSubmit }