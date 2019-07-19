# is-helper[![npm version](https://badge.fury.io/js/is-helper.svg)](https://badge.fury.io/js/is-helper)[![Build Status](https://travis-ci.com/qiurenbo/is-helper.svg?token=YfiBLf3wyKtUxRiBhQan&branch=master)](https://travis-ci.com/qiurenbo/is-helper)

is-helper help me to identify the type of unknown.

## Install

```
$ npm install is-helper
```

## Usage

```js
const is = require("is-helper");

is.isString("hello world"); // => true

is.isNumber(123); // => true

is.isBoolean(false); // => true

is.isObject({}); // => true

is.isObject(null); // => true

is.isUndefined(undefined); // => true

is.isArray([1, 2, 3, 4, 5]); // => true
```

## API

### isType(unknown)

#### unknown

Type: any

#### return

Type: boolean
