// Need to add test suite
const hashtagit = require('./');

test('testString should match hashtag', () => {
  const testString = hashtagit('Are_ we having - fun/ ...Yet?');
  const hashtag = '#AreWeHavingFunYet?';
  expect(testString).toBe(hashtag);
});

test('should throw an error for too many characters', () => {
  expect(() => hashtagit('N' + 'i'.repeat(143) + 'ce!')).toThrowError(
    'Must be 140 characters or less'
  );
});

test('should throw an error for empty string', () => {
  expect(() => {
    hashtagit('');
  }).toThrowError('Must be a non-empty string');
});

test('should throw an error for non-string entry', () => {
  expect(() => hashtagit(4739834)).toThrowError('Must be a non-empty string');
});
