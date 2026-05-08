const {test, expect} = require('@playwright/test');


// If we want explicitly add special to inject in any browser then we will use browser fixture which is global variable.
test('UI Basic Test', async ({browser}) =>
{
   //  chrome - plugin or cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const titlePage = await page.title();
    console.log(titlePage)

});

test('Page Fixture UI Basic Test', async({page})=>
    {
        await page.goto("https://youtube.com");
        console.log(await page.title());

        await expect(page).toHaveTitle("YouTube");

    });