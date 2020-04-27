const { checkURL } = require("../client/js/urlChecker")


describe("checkURL", () => {
    test("it should return false if url is not valid", () => {
        const result = checkURL("invaludurl");
        expect(result).toEqual(false);
    });

    test("it should return the url if the url is valid", () => {
        const validURL = "https://thegingeredwhisk.com/sourdough-gozleme/"
        const result = checkURL(validURL);
        expect(result).toEqual(validURL);
    });
});