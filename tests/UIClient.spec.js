const{test, expect} = require('@playwright/test');


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
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").nth(0).waitFor();
const visibleCheck = page.locator("h3:has-text('iphone 13 pro')").isVisible();
await expect(visibleCheck).toBeTruthy();

await page.locator("button:has-text('Checkout')").click();
await page.locator("//input[@type='text' and @class='input txt text-validated']").fill("1234 5678 9123 4567");
await page.locator(".ddl").nth(0).selectOption("07");
await page.locator(".ddl").nth(1).selectOption("14");
await page.locator("//input[@type='text' and @class='input txt']").nth(0).fill("04/28");
await page.locator("//input[@type='text' and @class='input txt']").nth(1).fill("Tushar Suryakant Warad");
await page.locator("input[name='coupon']").fill("rahulshettyacademy");
await page.locator("button.mt-1").click();

const couponMsg = page.locator("p.ng-star-inserted");
await expect(couponMsg).toHaveText("* Coupon Applied");

await expect(page.locator("input[type='text']").nth(4)).toHaveValue("tusharwarad2929@gmail.com");

await page.locator("[placeholder*='Country']").pressSequentially("au",{delay:50});
const dropdown = page.locator(".ta-results")
await dropdown.waitFor()
const dropdownOptionList = await dropdown.locator("button").count();

for(let i=0; i<dropdownOptionList; ++i){

    const country = await dropdown.locator("button").nth(i).textContent();
    if(country.trim() === "Macau")
    {
        await dropdown.locator("button").nth(i).click();
        break;
    }
}
await page.locator("a.action__submit").click();
const orderMsg = await page.locator(".hero-primary");
await expect(orderMsg).toHaveText(" Thankyou for the order. ")

const orderId = await page.locator("label.ng-star-inserted").textContent();
console.log(orderId);

await page.locator("button[routerlink*='myorders']").click();

// tbody tr

await page.locator("tbody tr").nth(0).waitFor();
const allOrders = await page.locator("tbody tr");
const orderIdCount = await page.locator("tbody tr").count();
console.log(orderIdCount);

for (let i=0; i < orderIdCount; ++i)
{
    const text = await allOrders.nth(i).locator("th").textContent();
    if(orderId.includes(text))
    {
        await allOrders.nth(i).locator("button:has-text('View')").click();
        break;
    }
}

const orderIdDetailPage = await page.locator("div.col-text").textContent();
await expect(orderId.includes(orderIdDetailPage)).toBeTruthy();


await page.pause();






})