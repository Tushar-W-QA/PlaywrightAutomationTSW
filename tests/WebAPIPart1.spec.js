const {test, expect, request} = require('@playwright/test');

const baseURL = "https://rahulshettyacademy.com/api/ecom/auth/login"
const loginPayLoad = {userEmail: "tusharwarad2929@gmail.com", userPassword: "Test@123"}
const orderURL = "https://rahulshettyacademy.com/api/ecom/order/create-order"
const orderPayLoad = {orders:[{country:"Belgium",productOrderedId:"6960eae1c941646b7a8b3ed3"}]}
let loginResponseToken;
let orderId;
test.beforeAll( async ()=> {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post(baseURL, {data:loginPayLoad});

    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    loginResponseToken = loginResponseJson.token;
    console.log(loginResponseToken)


    const orderResponse = await apiContext.post(orderURL, 
        {
            data: orderPayLoad,
            headers: {
            'Authorization' : loginResponseToken,
            'Content-Type' : 'application/json'
        }
    })

    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0];

})





test('Verify the client website', async ({page})=>{


await page.addInitScript( value => {
    window.localStorage.setItem('token', value)
}, loginResponseToken);

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

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
await page.pause();
await expect(orderId.includes(orderIdDetailPage)).toBeTruthy();





})