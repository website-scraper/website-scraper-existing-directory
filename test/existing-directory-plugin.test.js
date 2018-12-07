const { expect } = require('chai');
const scrape = require('website-scraper');
const fs = require('fs-extra');
const ExistingDirectoryPlugin = require('../index');

describe('Existing Directory Plugin', () => {
	const directory = __dirname + '/directory-for-test';
	const filename = directory + '/index.html';

	after('remove saved index.html from test directory', () => fs.removeSync(filename));

	it('should save file to existing directory', async () => {
		const result = await scrape({
			urls: ['http://example.com'],
			directory: directory,
			plugins: [ new ExistingDirectoryPlugin() ]
		});

		expect(fs.existsSync(filename)).to.eql(true);
	});
});