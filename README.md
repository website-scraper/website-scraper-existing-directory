[![Version](https://img.shields.io/npm/v/website-scraper-existing-directory.svg?style=flat)](https://www.npmjs.org/package/website-scraper-existing-directory)
[![Downloads](https://img.shields.io/npm/dm/website-scraper-existing-directory.svg?style=flat)](https://www.npmjs.org/package/website-scraper-existing-directory)
[![Node.js CI](https://github.com/website-scraper/website-scraper-existing-directory/actions/workflows/node.js.yml/badge.svg)](https://github.com/website-scraper/website-scraper-existing-directory)
[![Coverage Status](https://coveralls.io/repos/github/website-scraper/website-scraper-existing-directory/badge.svg?branch=master)](https://coveralls.io/github/website-scraper/website-scraper-existing-directory?branch=master)
[![Code Coverage](https://qlty.sh/gh/website-scraper/projects/website-scraper-existing-directory/coverage.svg)](https://qlty.sh/gh/website-scraper/projects/website-scraper-existing-directory)
[![Maintainability](https://qlty.sh/gh/website-scraper/projects/website-scraper-existing-directory/maintainability.svg)](https://qlty.sh/gh/website-scraper/projects/website-scraper-existing-directory)
# website-scraper-existing-directory
Plugin for [website-scraper](https://github.com/website-scraper/node-website-scraper) which allows to save resources to existing directory.

Please keep in mind that saving to existing directory may overwrite your files. Be careful with it!

## Sponsors
Maintenance of this project is made possible by all the [contributors](https://github.com/website-scraper/website-scraper-existing-directory/graphs/contributors) and [sponsors](https://github.com/sponsors/s0ph1e).
If you'd like to sponsor this project and have your avatar or company logo appear below [click here](https://github.com/sponsors/s0ph1e). 💖

<!-- sponsors --><a href="https://github.com/aivus"><img src="https:&#x2F;&#x2F;github.com&#x2F;aivus.png" width="60px" alt="User avatar: Illia Antypenko" /></a><a href="https://github.com/swissspidy"><img src="https:&#x2F;&#x2F;github.com&#x2F;swissspidy.png" width="60px" alt="User avatar: Pascal Birchler" /></a><a href="https://github.com/itscarlosrufo"><img src="https:&#x2F;&#x2F;github.com&#x2F;itscarlosrufo.png" width="60px" alt="User avatar: Carlos Rufo" /></a><a href="https://github.com/francescamarano"><img src="https:&#x2F;&#x2F;github.com&#x2F;francescamarano.png" width="60px" alt="User avatar: Francesca Marano" /></a><a href="https://github.com/github"><img src="https:&#x2F;&#x2F;github.com&#x2F;github.png" width="60px" alt="User avatar: GitHub" /></a><a href="https://github.com/Belrestro"><img src="https:&#x2F;&#x2F;github.com&#x2F;Belrestro.png" width="60px" alt="User avatar: Andrew Vorobiov" /></a><a href="https://github.com/Effiezhu"><img src="https:&#x2F;&#x2F;github.com&#x2F;Effiezhu.png" width="60px" alt="User avatar: " /></a><a href="https://github.com/slicemedia"><img src="https:&#x2F;&#x2F;github.com&#x2F;slicemedia.png" width="60px" alt="User avatar: " /></a><!-- sponsors -->

## Requirements
* nodejs version >= 18.17
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
