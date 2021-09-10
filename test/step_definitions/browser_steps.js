const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
setDefaultTimeout(50000);


When(/^I open "([^"]*)" url$/, function(url) {
    return browser.get(url)
});

Then(/^Page title should (not)?be "([^"]*)"$/, async function (notArg, title) {
    const pageTitle = await browser.getTitle();
    if (notArg){
        expect(pageTitle).to.not.be.equal(title);
    } else {
        expect(pageTitle).to.be.equal(title);
    }
});

When(/^I click "([^"]*)" in Navigation bar$/, async function(textToClick) {
    const collection = element.all(by.css("div.HeaderMenu .border-bottom"));

    const arrayOfElementTexts = await collection.getText();
    const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
    if (elementToClickIndex === -1) {
        throw new Error(`No element with [${textToClick}] text found`);
    }
    return collection.get(elementToClickIndex).click();
});
 

When('I wait "{int}" seconds', function(timeInSeconds) {
    return browser.sleep(timeInSeconds * 1000);    
});


