// if (typeof str !== 'string' || str === '') {
//   throw new Error('Must be a non-empty string');
// } else if (str.length <= 140) {
//   const removeDashesandSpaces = str
//     .replace(/[-_\/]/g, ' ')
//     .split(' ')
//     .filter(key => key !== '');
//   const addHash =
//     '#' +
//     removeDashesandSpaces
//       .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
//       .join('');
//   return addHash;
// } else {
//   throw new Error('Must be 140 characters or less');
// }
module.exports = function(str) {
  if (typeof str !== 'string' || str === '') {
    throw new Error('Must be a non-empty string');
  } else if (str.length <= 140) {
    return (
      '#' +
      str
        .replace(/[-_\/.]/g, ' ')
        .replace(
          /\w\S*/g,
          word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .replace(/\s/g, '')
    );
  } else {
    throw new Error('Must be 140 characters or less');
  }
};
