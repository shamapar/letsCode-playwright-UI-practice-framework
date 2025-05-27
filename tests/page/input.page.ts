import { Page } from '@playwright/test'

class TextBox {
    page: Page
    constructor(page: Page) {
        this.page = page

    }

    menuTitleInDashboard(name: string) {
        return this.page.locator(`//p[normalize-space(text())='${name}']`);
    }

    async navigateToMenu(menu: string) {
        await this.page.getByRole('link', { name: menu }).click()
    }

    get dashboardTitle() {
        return this.page.getByRole('heading', { level: 1 })
    }

    inputTextBoxByID(id: string) {
        return this.page.locator(id);
    }

    async appendingText(text: string) {
        const initialText = await this.checkInputValueById("#join");
        const finalText = initialText.concat(" ", text);
        await this.inputTextBoxByID("#join").fill(finalText);
    }

    async checkInputValueById(id: string) {
        return await this.inputTextBoxByID(id).inputValue()

    }




}
export default TextBox;