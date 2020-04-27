function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('url').value
    
    if (!Client.checkURL(url)) {
        alert("Not valid URL")
    }
    fetch(`http://localhost:8081/test?url=${url}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = generateMessage(res);
    })
}

function generateMessage(res) {
    return `This is a ${res.data.polarity} blog post, its polarity confidence score is ${res.data.polarity_confidence}, it's ${res.data.subjectivity}, and its subjectivity confidence score is ${res.data.subjectivity_confidence}.`
}

export { handleSubmit, generateMessage }
