import { test, expect } from '@playwright/test'
import TextBox from '../page/input.page';
import DropdownPage from '../page/dropdown.page';

test.beforeEach('login to application', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const textBox = new TextBox(page);
    await expect(textBox.menuTitleInDashboard('Select')).toHaveText('Select');
    await textBox.navigateToMenu("  Drop-Down  ");
    await expect(textBox.dashboardTitle).toHaveText("Dropdown");

})

test('select apple from dropdown', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    const dropdownLocator = dropdownPage.selectFruitDropdown;
    await dropdownLocator.selectOption({ value: "0" })
    await expect(dropdownPage.successNotification).toHaveText("You have selected".concat(" ", "Apple"))

})

test('select superheroes from dropdown', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    const dropdownLocator = dropdownPage.selectSuperHeroDropdown;
    // await dropdownLocator.selectOption(["Aquaman", "Batman", "Batwoman"])
    const lastSuperHero = await dropdownPage.lastSuperhero();

    await dropdownLocator.selectOption({ label: lastSuperHero })
    await expect(dropdownLocator).toHaveValue("e=\"xm\"X-Men");
    await dropdownPage.allSuperheroList()

})
test('get all superhero data', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    const dropdownLocator = dropdownPage.selectSuperHeroDropdown;
    const allSuperheroes = await page.locator('#superheros option').all()
    await expect(allSuperheroes.length).toBe(29)
    await dropdownLocator.selectOption(["Aquaman", "Batman", "Batwoman"])
    const name = await page.locator('#superheros').innerText();
    console.log(name)
})

