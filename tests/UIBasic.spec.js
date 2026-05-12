const {test, expect} = require('@playwright/test');


// If we want explicitly add special to inject in any browser then we will use browser fixture which is global variable.
test.only('UI Basic Test', async ({browser}) =>
{
   //  chrome - plugin or cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const titlePage = await page.title();
    console.log(titlePage);

    const usernameInputBox = page.locator("#username");
    const passwordInputBox = page.locator("[name='password']");
    const signInButton =  page.locator("#signInBtn");


    // Enter wrong username
    await page.locator("#username").fill("hdgydsd2");

    // Enter wrong password
    await page.locator("[name='password']").fill("arning@830$3mK2");

    // click on signIn button
    await page.locator("#signInBtn").click();

    // grab/extract the error message
    const errorMsgInvalidLogin = await page.locator("[style*='block']").textContent();
    console.log(errorMsgInvalidLogin);

    // Assertion to check the error message is expected or not
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");


    await usernameInputBox.fill(""); // This will clear existing data
    await usernameInputBox.fill("rahulshettyacademy"); // This will add new record/data
    await passwordInputBox.fill(""); // This will clear existing data
    await passwordInputBox.fill("Learning@830$3mK2"); // This will add new record/data

    await page.locator("//span[@class='checkmark']").nth(1).click();
    await page.locator("//button[@id='okayBtn']").click();
    await page.locator("select.form-control").selectOption("teach");

    await page.pause();

    await signInButton.click() // it will click on sign in button

    //console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
    const fetchAllProducts =  await page.locator(".card-body a");
    const listOfProduct = await fetchAllProducts.allTextContents()
    console.log(listOfProduct);

    /*const fetchAllProducts =  page.locator(".card-body a");
    const listOfProduct = await fetchAllProducts.allTextContents()
    console.log(listOfProduct);*/







});

test('Page Fixture UI Basic Test', async({page})=>
    {
        await page.goto("https://youtube.com");
        console.log(await page.title());

        await expect(page).toHaveTitle("YouTube");

    });