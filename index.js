module.exports = function hashtagit(str) {
  const whitespace = str.split(' ').filter(s => s !== '');
  const tagged =
    '#' +
    whitespace
      .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join('');
  return tagged.length > 140
    ? 'String needs to by less than 140 characters'
    : tagged;
};
