# NOT MAINTAINED

# portfolio-ember

This README outlines the details of collaborating on this Ember application.
This is my portfolio written in Ember.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Docker](https://docs.docker.com/linux/)
* [Heroku Toolbelt](https://toolbelt.heroku.com/)

## Useful aliases

* `alias dc='docker-compose'`
* `alias dcr='dc run --rm'`

## Installation

* `git clone` this repository
* change into the new directory
* `dcr npm install`
* `dcr bower install`

## Running / Development

* `dc up -d server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `dcr ember help generate` for more details

* `dcr ember g ...`

### Running Tests

* `dcr ember test`
* `dcr -p 7357:7357 ember test --server`

### Building

* `dcr ember build` (development)
* `dcr ember build --environment production` (production)

### Deploying

This app is deployed to Heroku.  See [Ember CLI Heroku](http://ember-cli.com/user-guide/#heroku). Once configured:

* `git push heroku master`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
