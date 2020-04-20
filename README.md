# bugsnag-plugin-custom-error

## Installation

```
yarn add https://github.com/SonicGarden/bugsnag-plugin-custom-error.git
```

## Usage

```javascript
import Bugsnag from '@bugsnag/js'
import { BugsnagPluginCustomError } from 'bugsnag-plugin-custom-error'

const customErrorPlugin = new BugsnagPluginCustomError({
  MemoryError: [
    'メモリが不足しています。',
    'この操作を完了するための十分な記憶域がありません。',
    'メモリ リソースが不足しているため、この操作を完了できません。',
  ],
  HogeError: [(error) => error.stacktrace[0].method === 'hoge'],
})

Bugsnag.start({
  apiKey: 'xxx',
  plugins: [customErrorPlugin],
})
```
