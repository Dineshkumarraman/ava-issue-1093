# ava-issue-1139
code sample for https://github.com/avajs/ava/issues/1139

## Fail Test Case
1. run 
```shell
npm run test 
```
ava will fail to compile with simmilar Error

```
/Users/dlebedynskyi/Documents/Code/ava-issue-1093/src/demo.js:1
(function (exports, require, module, __filename, __dirname) { import func from './func';
                                                              ^^^^^^
SyntaxError: Unexpected token import
```

## Success Run
2. rename .working.babelrc to .babelrc and replace ava config with
```
"ava": {
  "files": [
    "test/**/*.spec.js"
  ],
  "source": [
    "src/**/*.{js,jsx}"
  ],
  "concurrency": 5,
  "require": [
    "babel-core/register",
    "babel-polyfill",
    "ignore-styles",
    "./test/setup.js"
  ],
  "babel": "inherit"
}
```

execute `npm run test`. Test runs successfully without error.
