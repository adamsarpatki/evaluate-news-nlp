function checkURL(inputURL) {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    let url = inputURL;

    if (url.match(regex)) {
        return url;
    } else {
        alert("Not valid URL.");
    }
}

export { checkURL }