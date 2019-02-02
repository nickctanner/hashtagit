const hashtagit = require('./');

test('should output default Pascal case format and as the default single hash tagType', () => {
  const testString = hashtagit('Are_ we having - fun/ ...Yet?...')();
  const hashtag = '#AreWeHavingFunYet?';
  expect(testString).toBe(hashtag);
});

test('should output default Pascal case format and the @mention tagType', () => {
  const testString = hashtagit('Are_ we having - fun/ ...Yet?...')(null, '@');
  const hashtag = '@AreWeHavingFunYet?';
  expect(testString).toBe(hashtag);
});

test('should output default Pascal case format and separated as multiple hash tagType', () => {
  const testString = hashtagit('Are_ we having - fun/ ...Yet?...', true)();
  const hashtag = '#Are#We#Having#Fun#Yet?';
  expect(testString).toBe(hashtag);
});

test('should output default Pascal case format and separated as multiple @mention tagType', () => {
  const testString = hashtagit('Are_ we having - fun/ ...Yet?...', true)(
    null,
    '@'
  );
  const hashtag = '@Are@We@Having@Fun@Yet?';
  expect(testString).toBe(hashtag);
});

test('should output in all caps', () => {
  const testString = hashtagit('Are_ we having - fun/ ...Yet?...')('caps');
  const hashtag = '#AREWEHAVINGFUNYET?';
  expect(testString).toBe(hashtag);
});

test('should output in all lowercase', () => {
  const testString = hashtagit('Are_ we having - fun/ ...Yet?...')('low');
  const hashtag = '#arewehavingfunyet?';
  expect(testString).toBe(hashtag);
});

test('should throw an error for too many characters', () => {
  expect(() => hashtagit('N' + 'i'.repeat(143) + 'ce!')()).toThrowError(
    'Must be 140 characters or less'
  );
});

test('should throw an error for empty string', () => {
  expect(() => {
    hashtagit('')();
  }).toThrowError('Must be a non-empty string');
});

test('should throw an error for non-string entry', () => {
  expect(() => hashtagit(4739834)()).toThrowError('Must be a non-empty string');
});
