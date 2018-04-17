# protractor + puppeteer + jasmine pdf reporter

[![Build Status](https://travis-ci.org/MSakamaki/pj-reporter.svg?branch=master)](https://travis-ci.org/MSakamaki/pj-reporter)

e2e spec pdf reporter for [angular/cli](https://github.com/angular/angular-cli) or [nrwl/nx](https://github.com/nrwl/nx) using puppeteer

## Install

```sh
npm install pj-reporter
```

## Usage

see [example](https://github.com/MSakamaki/pj-reporter/tree/master/example)

### use blank page report

```typescript

describe('Nested Case', function () {
  afterAll(async () => {
    await makeSpecPdf(this, {
      url: 'about:blank',
      valid: [],
    });
  });

  it('spec it...', () => expect(1).toEqual(1) );
});
```

## License

MIT
