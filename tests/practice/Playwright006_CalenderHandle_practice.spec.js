
const {test, expect} = require('@playwright/test');


test("Verify the calender validation", async ({page}) =>{

    
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const month = "6";
    const date = "15";
    const year = "2029";
    const dateList = [month, date, year]

    await page.locator(".react-date-picker__inputGroup ").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months button").nth(Number(month)-1).click();
    await page.locator("//abbr[text()="+date+"]").click();

    const inputs = page.locator(".react-date-picker__inputGroup__input");
    for(let i=0; i<dateList.length; i++)
    {
        const values = await inputs.nth(i).inputValue();
        expect(values).toEqual(dateList[i]);
    }

    

});