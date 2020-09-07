# images-to-website

A bespoke script to convert a series of images to a website. Once the script has run, you can upload it to your web server.

## Installation

Run these commands from your terminal to install this script:

```
git clone https://github.com/nebrius/images-to-website.git
cd images-to-website
npm install
```

## Usage

Once the script is installed, add images to the `content` folder, named with the format `0001.jpg`. The script will generate
a corresponding HTML file that links to previous and next images, if applicable. Once your images are in the folder, run this
command:

```
npm run generate
```

If you'd like to tweak the style, take a look at the `template.handlebars` file.

## License

Copyright (c) Bryan Hughes <bryan@nebri.us>

This file is part of Home Lights.

Home Lights is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Home Lights is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Home Lights.  If not, see <http://www.gnu.org/licenses/>.
