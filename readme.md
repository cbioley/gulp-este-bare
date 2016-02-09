# gulp-este-bare

Gulp task to turn your Este.js project into a clean state (without the demo related files).

This package exists because we didn't want to "pollute" Este's codebase with all
files that need to be modified/deleted to get bare state.

## Install

```bash

npm install gulp-este-bare
```

## Config

In `gulpfile.babel.js`:

```js

import bare from 'gulp-este-bare';

```

## Usage

```bash

gulp bare

```

## Licence

MIT © Cyril Bioley
