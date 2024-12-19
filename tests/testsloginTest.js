const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function testLogin() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Step 1: Open the application URL
        await driver.get('https://lynne.infinityfreeapp.com'); // Use the correct URL for your app

        // Step 1.1: Enter email
        await driver.findElement(By.id('email')).sendKeys('testuser@example.com');
        console.log("Step 1.1: Email entered");

        // Step 1.2: Enter password
        await driver.findElement(By.id('password')).sendKeys('testpassword');
        console.log("Step 1.2: Password entered");

        // Step 1.3: Click the Sign In button
        await driver.findElement(By.id('signInButton')).click();
        console.log("Step 1.3: Sign In button clicked");

        // Step 1.4: Wait for the page to load and verify login success
        await driver.wait(until.urlContains('dashboard'), 5000); // Wait for dashboard page or any post-login URL
        let welcomeMessage = await driver.findElement(By.id('welcomeMessage')).getText(); // Ensure 'welcomeMessage' exists in your dashboard page
        assert.strictEqual(welcomeMessage, 'Welcome, User!');
        console.log("Assertion passed: User is successfully logged in.");
        
    } finally {
        await driver.quit();
    }
})();
