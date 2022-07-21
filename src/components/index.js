const getComponentPath = (component) => `./src/components/${component}/index.js`;

module.exports = {
  box: getComponentPath('box'),
  button: getComponentPath('button'),
  avatar: getComponentPath('avatar'),
};
