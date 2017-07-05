var assert    = require('chai').assert;
var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var test      = require('selenium-webdriver/testing');

test.describe('testing my simple blog', function() {
  var driver;
  var host = "http://localhost:8080"
  this.timeout(10000);

  test.beforeEach(function() {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  })

  test.afterEach(function() {
    driver.quit();
  })

  test.it("lists all the entries on load", function() {
    driver.get(`${host}`)
    driver.wait(until.elementLocated({css: "#entries .entry"}))
    driver.findElements({css: "#entries .entry"})
    .then(function (entries) {
      assert.lengthOf(entries, 3);
    })
  })
});
