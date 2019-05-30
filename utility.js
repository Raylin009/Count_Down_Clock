const dateParser = time => Math.floor(time / (1000 * 60 * 60 * 24));
const hourParser = time => Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minParser = time => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secParser = time => Math.floor((time % (1000 * 60)) / 1000);
const msParser = time => Math.floor((time % 1000));

module.exports.dateParser = dateParser;
module.exports.hourParser = hourParser;
module.exports.minParser = minParser;
module.exports.secParser = secParser;
module.exports.msParser = msParser;