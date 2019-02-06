# Hashtagit

Easy way to create hashtags or @mentions from any given text. Best use is from copy and pasted text that can be easily turned into the given hashtag or @mention configurations.

## Installing

```
npm install hashtagit --save
```

## Usage

The default takes a string as the first parameter and returns a Pascal cased hashtag.

```
const hashtagit = require('hashtagit');

console.log(hashtagit('...this/is some random text from a..., random passage...')());
// #ThisIsSomeRandomTextFromARandomPassage
```

Hashtagit takes in a total of 4 parameters, with the string being the only required:

```
hashtagit(string, multipleHashtags)(format, tagType);
```

### Use cases for parameters:

Each word in the string as formatted hashtag marking multipleHashtags as true.

```
const string = '...this/is some random text from a..., random passage...';

hashtagit(string, true)();
// #This#Is#Some#Random#Text#From#A#Random#Passage
```

Make it all caps or lowercase by changing the format parameter to 'low' or 'caps'.

```
const string = '...this/is some random text from a..., random passage...';

hashtagit(string)('low');
// #thisissomerandomtextfromarandompassage

hashtagit(string)('caps');
// #THISISSOMERANDOMTEXTFROMARANDOMPASSAGE
```

Create @mentions the same way by changing the tagType parameter to '@'.
Be sure to make the format parameter null if using the default casing.

```
const string = '...this/is some random text from a..., random passage...';

hashtagit(string)(null, '@');
// @ThisIsSomeRandomTextFromARandomPassage

hashtagit(string, true)(null, '@');
// @This@Is@Some@Random@Text@From@A@Random@Passage
```

<!-- ## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). -->

## License

This project is licensed under the MIT License
