const checkUrl = (inputText) => {
    let url = document.getElementById('url');
    if((/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/).test(inputText)) {
        return true;
    }
    document.getElementById('feedback').innerHTML = 'The text you provided is not a valid URL';
    url.classList.add('wrong-input');
    setTimeout(() => {
        document.getElementById('feedback').innerHTML = '';
        url.classList.remove('wrong-input');
    }, 3000)
    return false;
}

export { checkUrl }