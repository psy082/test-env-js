module.exports = async () => ({
    collectCoverage: true,
    moduleFileExtensions: [
        "js",
        "mjs"
    ],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.mjs$": "babel-jest"
    },
    testRegex: "((\\.|/*.)(test))\\.js?$",
})