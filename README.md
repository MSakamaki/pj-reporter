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
