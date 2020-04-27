// A function to check whether input URL is valid or not
function checkURL(inputURL) {
    const expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    const regex = new RegExp(expression);
    let url = inputURL;

    if (url.match(regex)) {
        return url;
    } else {
        return false;
    }
}

export { checkURL }