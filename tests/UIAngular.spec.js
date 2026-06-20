const {test} = require('@playwright/test')

test('Verify the ANgularPractice', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    

    //await page.get.fill("tusharwarad2929@gmail.com");
    await page.getByPlaceholder("Password").fill("Test@123");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByRole("button", {name : "Submit"}).click();

    await page.getByRole("link", {name:"Shop"}).click();
    await page.locator("app-card").filter({hasText : "Blackberry"}).getByRole("button", {name: "Add "}).click();
    //await page.getByRole("button", {name:"Checkout"}).click();

});