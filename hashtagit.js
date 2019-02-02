module.exports = function hashtagit(str, multipleHashtags = false) {
  return (format, tagType = '#') => {
    if (typeof str !== 'string' || str === '') {
      throw new Error('Must be a non-empty string');
    } else if (str.length <= 140) {
      const base = str
        .replace(/[-_\/.,#@]/g, ' ')
        .replace(
          /\w\S*/g,
          word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );

      const addHash = base.trim().replace(/\s+/g, space => {
        if (multipleHashtags) {
          space = tagType;
        } else {
          space = '';
        }
        return space;
      });

      let addFormat;
      if (format === 'low') {
        addFormat = addHash.toLowerCase();
      } else if (format === 'caps') {
        addFormat = addHash.toUpperCase();
      } else {
        addFormat = addHash;
      }

      return addFormat.charAt(0) === tagType ? addFormat : tagType + addFormat;
    } else {
      throw new Error('Must be 140 characters or less');
    }
  };
};
