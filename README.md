# js-types

[![github action status](https://github.com/hexlet-components/js-types/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-types/actions)

## Install

```sh
npm install @hexlet/tagged-types
```

## Usage example

```javascript
import { attach, typeTag, contents } from '@hexlet/tagged-types';

const data = 'text, pair, list or others';
const tag = attach('typeOfTag', data);
// ('typeOfTag', 'text, pair, list or others')

typeTag(tag); // 'typeOfTag'
contents(tag); // 'text, pair, list or others'
```

For more information, see the [Full Documentation](https://github.com/hexlet-components/js-types/tree/master/docs)
