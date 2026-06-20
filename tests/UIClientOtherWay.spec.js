const{test, expect} = require('@playwright/test');


test('Verify the client website', async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const productTitle = "iphone 13 pro";


// Email
const emailInputBox = page.getByPlaceholder("email@example.com");
await emailInputBox.fill("tusharwarad2929@gmail.com");

const passwordInputBox = page.getByPlaceholder("enter your passsword");
await passwordInputBox.fill("Test@123")

// LoginButton
const loginButton = page.getByRole("button", {name:'Login'});
await loginButton.click();


// Wait the networks api to fully loaded
// await page.waitForLoadState('networkidle');


// all product displayed
const cartTitle = page.locator("//div[@class='card-body']/h5/b");
await page.waitForLoadState('networkidle');
await cartTitle.nth(0).waitFor() // wait for page loading


await page.locator(".card-body").filter({hasText: 'iphone 13 pro'}).getByRole("button",{name:' Add To Cart'}).click();

await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click();

await page.locator("div li").nth(0).waitFor();
await expect(page.getByText("iphone 13 pro")).toBeVisible();

await page.getByRole("button", {name:'Checkout'}).click();

// await page.locator("//input[@type='text' and @class='input txt text-validated']").fill("1234 5678 9123 4567");
// await page.locator(".ddl").nth(0).selectOption("07");
// await page.locator(".ddl").nth(1).selectOption("14");
// await page.locator("//input[@type='text' and @class='input txt']").nth(0).fill("04/28");
// await page.locator("//input[@type='text' and @class='input txt']").nth(1).fill("Tushar Suryakant Warad");
// await page.locator("input[name='coupon']").fill("rahulshettyacademy");
// await page.locator("button.mt-1").click();

// const couponMsg = page.locator("p.ng-star-inserted");
// await expect(couponMsg).toHaveText("* Coupon Applied");

// await expect(page.locator("input[type='text']").nth(4)).toHaveValue("tusharwarad2929@gmail.com");

await page.getByPlaceholder("Select Country").pressSequentially("au",{delay:50});

await page.getByRole("button",{name:' Austria'}).click();
await page.getByText("PLACE ORDER").click();


await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();

const orderId = await page.locator("label.ng-star-inserted").textContent();
console.log(orderId);
const id = orderId.split("|")[1].trim();

await page.getByRole("button",{name:'  ORDERS'}).click();

// tbody tr
// 6a360ef817ee3e78baef1dcd
await page.locator("tbody tr").nth(0).waitFor();
await page.locator("tbody tr").filter({hasText:id.trim()}).getByRole("button",{name:'View'}).click();

const orderIdDetailPage = await page.locator("div.col-text").textContent();
await expect(orderId.includes(orderIdDetailPage)).toBeTruthy();


await page.pause();






})