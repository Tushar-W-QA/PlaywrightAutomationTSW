const{test} = require('@playwright/test');


test('Verify the client website', async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");


// Email
const emailInputBox = page.locator("input[id='userEmail']");
await emailInputBox.fill("tusharwarad2929@gmail.com");

const passwordInputBox = page.locator("input[id='userPassword']");
await passwordInputBox.fill("Test@123")

// LoginButton
const loginButton = page.locator("input[id*='login']");
await loginButton.click();


// Wait the networks api to fully loaded
// await page.waitForLoadState('networkidle');


// all product displayed
const cartTitle = page.locator("//div[@class='card-body']/h5/b");
await page.waitForLoadState('networkidle');
await cartTitle.nth(0).waitFor() // wait for page loading
const nameAllCart = await cartTitle.allTextContents()
console.log(nameAllCart)


const product = page.locator(".card-body");
const productTitle = "iphone 13 pro";

const productCount = await product.count();
console.log(productCount);

for (let i=0; i < productCount; ++i)
{
    if (await product.nth(i).locator("b").textContent() === productTitle)
    {
        await product.nth(i).locator("text=Add To Cart").click();
        break;
    }
}

await page.pause();






})