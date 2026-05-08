const {test} = require('@playwright/test');


test('Browser fixture the youtube website', async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto("https://youtube.com");
});


test('Browser fixture the youtube website1', async ({page})=> {

   //  const context = await browser.newContext();
   //  const page = await context.newPage()

    await page.goto("https://youtube.com");
});