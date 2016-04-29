# Editor

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Demo

The demo can be found at [http://editor.womenandtech.com/editor](http://editor.womenandtech.com/editor).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/WomenAndTech/editor.git`
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment=production` (production)

### Deploying

Our deployment setup employs a git repo on production server that will execute a post-receive hook ([see example gist](https://gist.github.com/raykao/2b2653cfaa147ecf9170304e3cd7cb50)) to deploy the code to the working directory.

run...

```
git push production
```

to push code to production.  This means you should have setup a git repo on your remote production server, in addtion to using one on GitHub or other service to distribute amongst your team.

The code will then run the ```post-receive``` git hook which will update the files, run ```npm install``` and ```bower install``` to get all the required dependencies, then run ```ember build --environment=production``` to get our production build up and running.  Production files will be deployed to ```/dist``` folder of the directory - which is where your webserver should be serving the static site files from.  See [this](https://gist.github.com/raykao/d245d10cfd3ca2a3e1650aa63d4f87e7) for an example nginx config file.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

