
var WordExtractor = require("word-extractor");
const extractor = new WordExtractor();

const {
    toSystemPath
} = require('../../../lib/core/path');

exports.WordExtractor = async function (options) {
    // parsing whole options once so no need to do again for each params

    options = this.parse(options);
    let filepath = toSystemPath(this.parseRequired(this.parse(options.path), 'string', 'fs.exists: path is required.'));


    extracted = extractor.extract(filepath);
    //extracted.then(body(doc) { console.log(doc.getBody()); });

    return extracted;
}
