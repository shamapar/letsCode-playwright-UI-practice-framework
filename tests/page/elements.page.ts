import { Page } from '@playwright/test'

class ElementsPage {
    page: Page
    constructor(page: Page) {
        this.page = page

    }

    get countOfRepository() {
        return this.page.locator('//p[@class="heading" and text()="Public Repos"]/..//p[@class="title is-5"]');
    }

    get image() {
        return this.page.getByAltText("User avatar")
    }

    get enterInTextbox() {
        return this.page.getByPlaceholder("Enter your git user name eg., ortonikc");
    }

    async allRepository() {
        const repositoryList: string[] = [];
        const repos = this.page.locator('//div[@class="column is-12"]//p[@class="title is-5"]');
        await repos.first().waitFor({ state: "visible" });

        const repository = await repos.all();

        for (let i = 0; i < repository.length; i++) {
            console.log(await repository[i].innerText())
            repositoryList.push(await repository[i].innerText());
        }

        return repositoryList;
    }

    get searchButton() {
        return this.page.getByRole('button', { name: "Search" });
    }


}
export default ElementsPage;