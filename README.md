Chrome DevTools Theme: Flatland 
===========================

Flatland is a dark theme with blue highlights. It's intended for anyone who prefers a dark theme for editors and IDE's and can be used with **Chrome Canary** and **Chrome Stable v33+**.

## Usage

Visit The Chrome Web Store page for [Flatland](https://chrome.google.com/webstore/detail/devtools-theme-flatland/ghngaepikegoilihhbhdipfbfifhkeeo) and click the "+Free" button to install the extension.

Next, visit **about:flags** in Chrome and find and enable Enable **DevTools Experiments**. 

The last step is to open Chrome DevTools, open Settings, Click on Experiments and toggle "Allow UI themes" checkbox.

You will most likely have to close and reopen your DevTools. When it's finished you should see your new theme taking over!

## Development & Contributions

If you're interested in contributing to the project, feel free to fork it and submit pull requests. Currently, I'm maintaining this project alone but would love any contributions that enhance the experience or the UI.

### Development Extension

You can setup the extension locally for rapid development by visiting **chrome://extensions/** within Chrome, enabling "Developer Mode" and then click on "Load Unpacked Extension".

From here, you can select the cloned repository from your local disk and then enable **Flatland**. 

I recommend setting up a separate Chrome profile for doing this so you don't create possible regressions or issues with Stable.

### Workflow

Once you've cloned the repo to your local development, it's suggested to use **NodeJS** and **gulp** for rapid development using `watch` through the default gulp task.

Assuming you've already installed NodeJS and updated npm (`npm update -g npm`), install gulp globally and the project dependencies (node modules). From the root of the project run:

	npm install gulp -g && npm install
	
Once you've got gulp installed, the default task can be run by using `gulp` in the command line. Gulp will watch all `scss/*.scss` files and run the compilation on the `flatland.scss` on any save on sass files within the directory.

There's no need to run `gulp bump` or `gulp major` except if you're interested to see what happens, but please note: **No version bumps will be pulled.**



