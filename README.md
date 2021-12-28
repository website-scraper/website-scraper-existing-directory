[![Version](https://img.shields.io/npm/v/website-scraper-existing-directory.svg?style=flat)](https://www.npmjs.org/package/website-scraper-existing-directory)
[![Downloads](https://img.shields.io/npm/dm/website-scraper-existing-directory.svg?style=flat)](https://www.npmjs.org/package/website-scraper-existing-directory)
[![Node.js CI](https://github.com/website-scraper/website-scraper-existing-directory/actions/workflows/node.js.yml/badge.svg)](https://github.com/website-scraper/website-scraper-existing-directory)
[![Coverage Status](https://coveralls.io/repos/github/website-scraper/website-scraper-existing-directory/badge.svg?branch=master)](https://coveralls.io/github/website-scraper/website-scraper-existing-directory?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b1425979c8abd4c3bd2a/test_coverage)](https://codeclimate.com/github/website-scraper/website-scraper-existing-directory/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/b1425979c8abd4c3bd2a/maintainability)](https://codeclimate.com/github/website-scraper/website-scraper-existing-directory/maintainability)
# website-scraper-existing-directory
Plugin for [website-scraper](https://github.com/website-scraper/node-website-scraper) which allows to save resources to existing directory.

Please keep in mind that saving to existing directory may overwrite your files. Be careful with it!

## Requirements
* nodejs version >= 14.14
* website-scraper version >= 5

## Installation
```sh
npm install website-scraper website-scraper-existing-directory
```

## Usage
```javascript
import scrape from 'website-scraper';
import SaveToExistingDirectoryPlugin from 'website-scraper-existing-directory';

await scrape({
    urls: ['http://example.com'],
    directory: '/path/to/save',
    plugins: [ new SaveToExistingDirectoryPlugin() ]
});
```
