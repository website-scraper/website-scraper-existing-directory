import path from 'path';
import fs from 'fs/promises';

async function outputFile (file, data, encoding) {
	const dir = path.dirname(file);
	await fs.mkdir(dir, { recursive: true });

	return fs.writeFile(file, data, { encoding });
}

class SaveResourceToExistingDirectoryPlugin {
	apply (registerAction) {
		let absoluteDirectoryPath, loadedResources = [];

		registerAction('beforeStart', ({options}) => {
			if (!options.directory || typeof options.directory !== 'string') {
				throw new Error(`Incorrect directory ${options.directory}`);
			}

			absoluteDirectoryPath = path.resolve(process.cwd(), options.directory);
		});

		registerAction('saveResource', async ({resource}) => {
			const filename = path.join(absoluteDirectoryPath, resource.getFilename());
			const text = resource.getText();
			await outputFile(filename, text, resource.getEncoding());
			loadedResources.push(resource);
		});
	}
}

export default SaveResourceToExistingDirectoryPlugin;
