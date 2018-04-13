# protractor + puppeteer + jasmine pdf reporter

[angular/cli](https://github.com/angular/angular-cli) or [nrwl/nx](https://github.com/nrwl/nx) e2e spec pdf reporter

## Install

```sh
# comming soon

```

## Usage

see [example](./example/sample.spec.ts)

### use blank page report

```typescript

afterAll(async () => {
  await GeneratePDF(this, {
    url: 'about:blank',
    valid: [],
  });
});

```

## License

MIT
