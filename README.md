# Angular-Seed using Grunt
This Angular seed provides the basics for quickly bootstrapping your angular project.

### Getting started

```bash
git clone https://github.com/amumei/angular-seed.git
```
**Start**
```bash
npm start
````
This fires the default grunt task and starts the node server.

**Run tests**
```bash
npm test
```
Test coverage is generated when running this command and is available in the generated `/coverage` directory.

#### Uses:

|Frameworks   |Development   |Testing   |
|-------------|-------------|-------------|
|[AngularJS](https://angularjs.org/) (duh)|[grunt](http://gruntjs.com/)|[karma](https://karma-runner.github.io/0.13/index.html)|
|[ui-router](https://github.com/angular-ui/ui-router)|[express.js](expressjs.com)|[karma-coverage](https://github.com/karma-runner/karma-coverage)|
||[node.js](nodejs.org) & [npm](https://www.npmjs.com/)|[karma-jasmine](https://github.com/karma-runner/karma-jasmine)|
||[bower](http://bower.io/)||

### Grunt
The default grunt task:

1. Removes all `.min.js` & `.map` files
2. Minifies all `.js` files into 2 files:
  * `module-init.min.js` (from `*.module.js`)
  * `prod.min.js` (from `*.js` excluding `*.module.js`)
3. Compiles all `.scss` files to `main.css`
4. Watches for changes in all `.css` & `.js` files
