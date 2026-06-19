const {test, expect} = require('@playwright/test')

test('Verify the blink/hyperlink is working', async ({page})=> {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const interviewnBlinkLink = page.locator("a[href*='documents-request']");
    const techSmartBlinklink = page.locator("a[href*='smarthire']");

    await expect(interviewnBlinkLink).toHaveAttribute("class", "blinkingText");
    await expect(techSmartBlinklink).toHaveAttribute("class", "blinkingText");

})