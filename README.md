# ember-inline-svg

Displays SVG images inline. Fork of [ember-inline-svg](https://github.com/minutebase/ember-inline-svg).

## Installation

```
$ ember install zf-inline-svg
```

## Usage

```handlebars
{{inline-svg "path/to/file" class="icon" height="20px"}}
```

**All props you pass to the helper** will be set as **attributes** on the `<svg>` element.

## Configuration

#### SVG Paths
 
By default the addon expects to find your SVG images at `/public/`, but you can change this
by setting the `svg.paths` option in your application's ember-cli-build.js like so:

```javascript
var app = new EmberApp({
  svg: {
    paths: [
      'public/images',
      'app/svgs'
    ]
  }
});
```

#### Optimization

SVGs are optimized by [svgo](https://github.com/svg/svgo) by default. The default list of plugins applied can be found in `svgo-options.js`.

```javascript
// Disable specific svgo plugins
var app = new EmberApp({
  svg: {
    optimize: {
      plugins: [
        { removeDoctype: false },
        { removeTitle: true },
        { removeDesc: true }
      ]
    }
  }
});
```
 
```javascript
// To disable optimization completely
var app = new EmberApp({
  svg: {
    optimize: false
  }
});
```


#### Custom Plugins

SVGO [now supports](https://github.com/svg/svgo/commit/1ec50c4a13ecea4c50619cdb3bab4926f6aa53e1) custom plugins. See [SVGO's plugins](https://github.com/svg/svgo/tree/master/plugins) for examples on what you can do.

## Running Tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

## Running the dummy application

* `yarn install`
* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

## Contributing


## License

This project is licensed under the [MIT License](LICENSE.md).
