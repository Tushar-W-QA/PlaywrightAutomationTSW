
const {test} = require('@playwright/test');


test('Verify the Anuglur Website with Special locators provided Playwright', async ({page}) =>{


    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    // NameInputBox
    const nameInputBox = page.locator("input[name='name']:nth-child(2)");
    await nameInputBox.fill("Tushar");

    // EmailInputBox
    const emailInputBox = page.locator("input[name='email']");
    await emailInputBox.fill("tusharwarad2929@gmail.com");

    // PasswordInputBox
    const passwordInputBox = page.getByPlaceholder("password");
    await passwordInputBox.fill("Admin@123");

    // CheckBox
    const checkBox = page.getByLabel("Check me out if you Love IceCreams!");
    await checkBox.click();

    // Dropdown Option
    const genderDropDown = page.getByLabel("Gender");
    await genderDropDown.selectOption("Male");

    // Radio Employee Status
    const radioEmployeeStatus = page.getByLabel("Employed");
    await radioEmployeeStatus.click();

    // submit Button
    const submitButton = page.getByRole("button", {name:'Submit'});
    await submitButton.click();

    // Verify the message

    const successMessage = page.getByText("Success! The Form has been submitted successfully!.");
    await successMessage.isVisible()

    // Open The Shop page by clicking the Shop button

    const shopButton = page.getByRole("link",{name:'Shop'});
    await shopButton.click();

    const producrCart = page.locator("app-card");
    await producrCart.filter({hasText:'Samsung Note 8'}).getByRole("button",{name:'Add '}).click()



})
