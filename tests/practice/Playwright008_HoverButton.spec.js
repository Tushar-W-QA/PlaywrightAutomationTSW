const {test} = require('@playwright/test');

// Method	Real Use Case
// hover()	    ---> Open dropdown menus, tooltips
// click()	    ---> Click buttons, links
// dblclick()	---> Double-click editable fields
// right-click()---> (click({ button: 'right' }))	Context menu testing
// dragTo()	    ---> Drag and drop files/cards
// mouse.move()	---> Custom canvas or slider testing
// mouse.down()	---> Press and hold mouse button
// mouse.up()	---> Release mouse button
// mouse.wheel()---> Scroll page or element


test("Validation hover functionality over buttons/tabs", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#mousehover").hover();
    await page.locator("#mousehover").hover().nth(1).click();
});


test("Validation Double-Click functionality on editfield", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#autocomplete").dblclick();
});

test("Mouse Scroll Functionality", async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.mouse.wheel(0,5000);
});

test("Right click Functionality", async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#mousehover").click({button:'right'});
});


