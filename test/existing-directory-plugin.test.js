import chai from 'chai';
import scrape from 'website-scraper';
import fs from 'fs-extra';
import ExistingDirectoryPlugin from '../index.js';

const { expect } = chai;

describe('Existing Directory Plugin', () => {
	const directory = './test/directory-for-test';
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
