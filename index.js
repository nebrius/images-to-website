const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { join, basename, extname } = require('path');
const { compile } = require('handlebars');

const imageTypes = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif'
];

const images = readdirSync(join(__dirname, 'content'))
  .filter((filename) => imageTypes.includes(extname(filename)))
  .sort();

function htmlFromImage(name) {
  return `${basename(name, extname(name))}.html`;
}

const template = compile(readFileSync(join(__dirname, 'template.handlebars')).toString());
for (let i = 0; i < images.length; i++) {
  const inputFile = join('content', images[i]);
  const outputFile = join('content', htmlFromImage(images[i]));
  console.log(`Generating web file ${outputFile} for ${inputFile}`);
  const templateData = {
    image: images[i],
    previous: i > 0,
    previousUrl: i > 0 ? htmlFromImage(images[i - 1]) : undefined,
    next: i < images.length - 1,
    nextUrl: i < images.length - 1 ? htmlFromImage(images[i + 1]) : undefined
  };
  const content = template(templateData);
  writeFileSync(outputFile, content);
}
