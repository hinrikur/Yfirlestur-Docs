# Google Docs spelling and grammar add-on for Icelandic

This repo contains the source code for *Yfirlestur Docs*, a spelling and grammar correction add-on for Icelandic, for use with Google Docs.

<img src="media/docs-plugin-demo.PNG" 
  alt="Google Docs add-on UI" style="margin-top: 18px; margin-bottom: 6px">

## Installation

### Prerequisites 

- Make sure you're running at least [Node.js](https://nodejs.org/en/download/) v10 and `npm` v6.

- You'll need to enable the Google Apps Script API. You can do that by visiting [script.google.com/home/usersettings](https://script.google.com/home/usersettings).

- You'll have to open a blank Google Apps Script project in the form of a [container bound script](https://developers.google.com/apps-script/guides/bound) to install and run the plugin source code. 

- *Yfirlestur Docs* requires an external backend for performing the spelling and grammar correction. During development, the [Yfirlestur.is](https://yfirlestur.is/) public API was used. The API is owned and operated by [Miðeind ehf.](https://mideind.is/) 


### Getting started

**1.** Clone the repo and install the dependencies.

```bash
git clone https://github.com/hinrikur/Yfirlestur-Docs.git
cd Yfirlestur-Docs
npm install
```

**2.** Log in to [clasp](https://github.com/google/clasp), which lets you manage our Google Apps Script projects locally.

```bash
npm run login
```

**3.** Use an existing Google Docs and Google Apps Script file to install the plugin.

You will need to update the `.clasp.json` file in the root of this project with the following three key/value pairs (see .clasp.json.SAMPLE for reference):

```json
{
  "scriptId": "1PY037hPcy................................................",
  "parentId": ["1Df30......................................."],
  "rootDir": "./dist"
}
```

- `scriptId`: Your existing script project's `scriptId`. You can find it by opening your document, selecting **Tools > Script Editor** from the menubar, then **File > Project properties**, and it will be listed as "Script ID".

- `parentId`: An array with a single string, the ID of the parent file (spreadsheet, doc, etc.) that the script project is bound to. You can get this ID from the url, where the format is usually `https://docs.google.com/spreadsheets/d/{id}/edit`. This allows you to run `npm run open` and open your file directly from the command line.

- `rootDir`: This should always be `"./dist"`, i.e. the local build folder that is used to store project files.

Next, let's deploy the plugin so we can see it live in Google Docs.

## Deploy

Run the deploy command. You may be prompted to update your manifest file. Type 'yes'.

```bash
npm run deploy
```

The deploy command will build all necessary files using production settings, including all server code (Google Apps Script code), client code (React bundle), and config files. All bundled files will be outputted to the `dist/` folder, then pushed to the Google Apps Script project.

Now open Google Docs and navigate to your new Document (e.g. the file "My React Project"). You can also run `npm run open`. Make sure to refresh the page if you already had it open. You will now see a new menu item appear containing the Yfirlestur Plugin.

<br/>


## Acknowledgements

- University of Iceland

This project was funded (partly) by the Language Technology Programme for Icelandic 2019-2023. The programme, which is managed and coordinated by [Almannarómur](https://almannaromur.is/), is funded by the Icelandic Ministry of Education, Science and Culture.

This Google Docs add-on uses the [React Google Apps Script](https://github.com/enuchi/React-Google-Apps-Script) boilerplate to integrate [ReactJS](https://reactjs.org/) into native Google Apps Script functionality. 



## License

This software is licensed under the MIT License:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED - THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.