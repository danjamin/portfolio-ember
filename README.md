# portfolio-ember

This README outlines the details of collaborating on this Ember application.
This is my portfolio written in Ember with fast boot.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)

## Installation

* `git clone` this repository
* change into the new directory
* `docker-compose run --rm npm install`
* `docker-compose run --rm bower install`

## Running / Development

* `docker-compose up -d server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

Note: you may want to create an alias like the following:

* `alias dc="docker-compose"`
* `alias dcr="dc run --rm"`

Then you can simply do: `dcr npm install` etc.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

* `docker-compose run --rm ember g ...`

### Running Tests

* `docker-compose run --rm ember test`
* `docker-compose run --rm -p 7357:7357 ember test --server`

### Building

* `docker-compose run --rm ember build` (development)
* `docker-compose run --rm ember build --environment production` (production)

### Deploying

This app is deployed to Heroku.  See [Ember CLI Heroku](http://ember-cli.com/user-guide/#heroku)
Once configured:

* `git push heroku master`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
