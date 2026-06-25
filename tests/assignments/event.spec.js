const{test,expect} = require('@playwright/test');


test("Test event page", async ({page})=>{

    const BASE_URL = "https://eventhub.rahulshettyacademy.com";
    const email = 'tusharwarad2929@gmail.com';

    async function login(page) {

    await page.getByPlaceholder("you@email.com").fill("tusharwarad2929@gmail.com");
    await page.locator("//input[@id='password']").fill("Rfpipeline@123");
    await page.locator("//button[@id='login-btn']").click();
    await page.getByText("Browse Events →").isVisible();
    await expect(page.locator("#user-email-display")).toHaveText(email);

    }

    
    
    
    


    //click on event
    await page.locator("//a[@id='nav-events']").click();
    await page.locator("button.inline-flex").click();

    //
    const eventTitle = `Test Event ${Date.now()}` // for unique event title
    
    await page.locator("#event-title-input").fill(eventTitle);
    await page.locator("#admin-event-form textarea").fill("This is descrition about the create new event");
    await page.getByLabel("City").fill("Mumbai");
    await page.getByLabel("Venue").fill("Dadar");
    await page.getByLabel("Event Date & Time").fill(futureDateValue());
    await page.getByLabel("Price ($)").fill("100");
    await page.getByLabel("Total Seats").fill("50");
    await page.locator("#add-event-btn").click();
    await expect (page.getByText("Event created!")).toBeVisible();

    // Event Created!

    // navigate to event page
    await page.locator("//a[@id='nav-events']").click();
    const allCarts = page.locator("[data-testid='event-card']");
    const firstCart = await allCarts.nth(0).textContent();
    console.log(firstCart);

    await expect(allCarts).toContainText(eventTitle);



});