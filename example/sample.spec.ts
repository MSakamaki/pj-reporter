
import { browser, element, by } from 'protractor';

import { GeneratePDF } from '../dist';

describe('Protractor Tutorial Page', function () {
  afterAll(async () => {
    await GeneratePDF(this, {
      url: await browser.getCurrentUrl(),
      valid: [
        '#gobutton',
      ],
    });
  })

  const firstNumber = element(by.model('first'));
  const secondNumber = element(by.model('second'));
  const goButton = element(by.id('gobutton'));
  const latestResult = element(by.binding('latest'));

  
  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect<any>(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect<any>(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    expect<any>(latestResult.getText()).toEqual('0');
  });

  it('should read the value from an input', function() {
    firstNumber.sendKeys(1);
    expect<any>(firstNumber.getAttribute('value')).toEqual('1');
  });
});
