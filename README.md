[![Version](https://img.shields.io/npm/v/website-scraper-existing-directory.svg?style=flat)](https://www.npmjs.org/package/website-scraper-existing-directory)
[![Downloads](https://img.shields.io/npm/dm/website-scraper-existing-directory.svg?style=flat)](https://www.npmjs.org/package/website-scraper-existing-directory)
[![Build Status](https://travis-ci.org/website-scraper/website-scraper-existing-directory.svg?branch=master)](https://travis-ci.org/website-scraper/website-scraper-existing-directory)

# website-scraper-existing-directory
Plugin for [website-scraper](https://github.com/s0ph1e/node-website-scraper) which allows to save resources to existing directory.

Please keep in mind that saving to existing directory may overwrite your files. Be careful with it!

## Requirements
* nodejs version >= 8
* website-scraper version >= 4

## Installation
```sh
npm install website-scraper website-scraper-existing-directory
```

## Usage
```javascript
const scrape = require('website-scraper');
const SaveToExistingDirectoryPlugin = require('website-scraper-existing-directory');

scrape({
    urls: ['http://example.com'],
    directory: '/path/to/save',
    plugins: [ new SaveToExistingDirectoryPlugin() ]
});
```
