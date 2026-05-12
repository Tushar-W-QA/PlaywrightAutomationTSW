const {test, expect} = require('@playwright/test')

test('Verify the blink/hyperlink is working', async ({browser})=> {


    const context = await browser.newContext();
    const page = await context.newPage();
    
    const interviewBlinkLink = page.locator("a[href*='documents-request']");
    const techSmartBlinklink = page.locator("a[href*='smarthire']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")


    const [inteviewPage] = await Promise.all([
        context.waitForEvent('page'),
        interviewBlinkLink.click()
    ]);

    const redText = await inteviewPage.locator("p.red").textContent();
    console.log(redText);

    const arraylistText = redText.split("@");
    const domain = arraylistText[1].split(" ")[0];
    console.log(domain)

    await page.locator("#username").fill(domain);
    await page.pause();

})