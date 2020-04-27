const { generateMessage } = require("../client/js/formHandler")

describe("generateMessage", () => {
    test("result message should contain polarity and subjectivity", () => {
        const inputData = {
            data: {
                polarity: "positive", polarity_confidence: 0.526, subjectivity: "objective", subjectivity_confidence: 1
            }
        }
        const result = generateMessage(inputData);
        expect(result).toMatch(/.*positive.*objective.*/)
    });
});