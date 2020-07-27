const renderData = (data) => {
  document.getElementById('results').classList.remove('hide');
  document.getElementById('agreement').innerHTML = data.agreement;
  document.getElementById('subjectivity').innerHTML = data.subjectivity;
  document.getElementById('confidence').innerHTML = data.confidence;
  document.getElementById('irony').innerHTML = data.irony;
}

export { renderData }