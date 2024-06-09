# Initial folder structure for frontend development

```json

story4k/frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── ...
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── banner.jpg
│   │   ├── icons/
│   │   │   ├── add-icon.svg
│   │   │   └── delete-icon.svg
│   │   ├── videos/
│   │   │   └── ...
│   │   └── fonts/
│   │       └── ...
│   │
│   ├── components/
│   │   ├── common/
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── components/
│   │   │   │   └── ...
│   │   │   ├── _style.scss
│   │   │   ├── homePage.jsx
│   │   │   └── Home.test.jsx
│   │   ├── Login/
│   │   ├── Editor/
│   │   ├── Dashboard/
│   │   └── Profile/
│   │
│   ├── stylesheets/
│   │   ├── css/
│   │   │   ├── global-style.css
│   │   │   └── global-style.css.map
│   │   ├── min/
│   │   │   ├── global-style.min.css
│   │   │   └── global-style.min.css.map
│   │   └── scss/
│   │       ├── imports/
│   │       │   └── ...
│   │       └── global-style.scss
│   ├── utils/
│   │   └── ...
│   ├── App.jsx
│   ├── index.js
│   └── reportWebVitals.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── ...

```

# Live Sass Compiler

This extension helps you compile and transpile your SASS/SCSS files to CSS in real-time.

## Features

- Live SASS & SCSS compile.
- Customizable file location of exported CSS.
- Customizable exported CSS style (`expanded`, `compressed`).
- Customizable extension name (`css` or `.min.css`).
- Quick status bar control.
- Exclude specific folders by settings.
- Autoprefix support (See settings section)
- Reference a node module with a leading tilde e.g `~/nodePackage/theSass.scss`

## Usage/Shortcuts

- Click to `Watch Sass` from the status bar to turn on the live compilation and then click to `Stop Watching Sass` from the status bar to turn off live compilation.
- Press `F1` or `ctrl+shift+P` and enter `Live Sass: Watch Sass` to start watching and `Live Sass: Stop Watching Sass` to stop watching.
- Press `F1` or `ctrl+shift+P` and enter `Live Sass: Compile Sass - Without Watch Mode` to compile one time compile the current file.

### Under the hood details

This extension is actually quite simple in it's implementation. Partial files compile all files in your project and non-partials compile just themselves. By default partial files are those that start with an underscore " `_`" however, you can specify a location/glob pattern by changing the `liveSassCompile.settings.partialsList` setting (which defaults to `["/**/_*.s[ac]ss"]`)

## Installation

1. Open VSCode Editor and Press `ctrl+P`, type `ext install glenn2223.live-sass`.

## Our Open Source Commitment

The open source community is struggling Open source maintainers spends countless unpaid hours supporting those using their project, they need some support back This is why we have an Open Source Commitment.

Any monthly donations that we get - specifically referencing this project - will be shared with our dependencies (specified below). We support the packages that need it most, so we may not donate to all dependencies (often those developed/maintained by big enterprises). We can also only support the ones have a means of receiving donations.

### Credits

This extension was created by [Glenn Marks](https://github.com/glenn2223).

### License

This extension is licensed under the [MIT License](LICENSE).

### Extension Link

https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass

### GitHub Pages

https://glenn2223.github.io/vscode-live-sass-compiler/

### Stack Overflow

https://stackoverflow.com/questions/tagged/live-sass-compiler?tab=Active

### Changelog

https://glenn2223.github.io/vscode-live-sass-compiler/CHANGELOG.html

### FAQs

https://glenn2223.github.io/vscode-live-sass-compiler/FAQs

### Documentation

https://glenn2223.github.io/vscode-live-sass-compiler/Docs

### YouTube Quick Guide

https://www.youtube.com/watch?v=...

> **Note**: Before making any frontend modifications, make sure to install the Live Sass Compiler extension in VS Code and apply the following settings to your VS code `settings.json` file:

```json
{
  "liveSassCompile.settings.generateMap": true,
  "liveSassCompile.settings.watchOnLaunch": true,
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "~/../css",
      "savePathReplacementPairs": null
    },
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "~/../min",
      "savePathReplacementPairs": null
    }
  ]
}
```
