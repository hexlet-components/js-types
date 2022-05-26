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

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-types)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-types).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).
