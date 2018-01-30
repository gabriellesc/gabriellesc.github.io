fetch('https://php-rclogo.herokuapp.com')
    .then(resp => resp.text())
    .then(html => document.getElementById('php-container').innerHTML = html);
