const { expect } = require('chai');
const scrape = require('website-scraper');
const fs = require('fs-extra');
const ExistingDirectoryPlugin = require('../index');

describe('Existing Directory Plugin', () => {
	after('remove saved index.html from test directory', () => fs.removeSync('directory-to-test/index.html'));

	it('should save file to existing directory', async () => {
		const result = await scrape({
			urls: ['http://example.com'],
			directory: 'directory-to-test',
			plugins: [ new ExistingDirectoryPlugin() ]
		});

		expect(fs.existsSync('directory-to-test/index.html')).to.eql(true);
	});
});