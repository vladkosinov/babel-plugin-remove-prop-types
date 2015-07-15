# Babel Plugin for removing propTypes property from ES2015 classes

Removes propTypes property from classes

## Example

**In**
```javascript
  Class Foo {
    propTypes: {
      foo: React.PropTypes.string
    }
  }
```

**Out**
```javascript
  Class Foo {
  }
```

## Installation

```sh
$ npm install --save-dev babel-plugin-remove-prop-types
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "env": {
    "production": {
      "plugins": ["remove-prop-types"]
    }
  }
}
```

### Via CLI

```sh
$ babel --plugins remove-prop-types script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["remove-prop-types"]
});
```
