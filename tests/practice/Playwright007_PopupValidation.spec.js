const {test} = require('@playwright/test');

// Playwright event methods:

// on() → Listen continuously.
// once() → Listen only once.
// off() → Remove a specific listener.
// waitForEvent() → Wait for an event and continue execution.
// removeAllListeners() → Remove all listeners for an event.

test("Alert/PopUp Validation with ON Method", async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  page.on('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.accept()
    });
  await page.locator("#confirmbtn").click(); 

})


test("Alert/PopUp Validation with ONCE Method", async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  page.once('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.accept()
    });
  await page.locator("#confirmbtn").click(); 

});

test.only("Alert/PopUp Validation with OFF Method", async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  page.off('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.accept()
    });
  await page.locator("#confirmbtn").click(); 

});


