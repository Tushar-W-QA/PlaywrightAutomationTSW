const {test, expect} = require('@playwright/test');


test('Verify the title of youtube', async ({page}) => {

    await page.goto("https://www.youtube.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("YouTube");
})