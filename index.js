import path from 'path';
import fs from 'fs-extra';

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
			await fs.outputFile(filename, text, { encoding: 'binary' });
			loadedResources.push(resource);
		});
	}
}

export default SaveResourceToExistingDirectoryPlugin;
