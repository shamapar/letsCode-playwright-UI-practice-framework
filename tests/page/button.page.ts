import { Page } from '@playwright/test'

class ButtonPage {
    page: Page
    constructor(page: Page) {
        this.page = page
    }

    private getButtonByName(buttonName: string) {
        return this.page.getByRole('button', { name: buttonName });
    }

    get homeButton() {
        return this.getButtonByName("Goto Home and come back here using driver commanda");
    }

    get disabledButton() {
        return this.getButtonByName("Disabled")
    }
    get holdButton() {
        return this.getButtonByName("Button Hold!")
    }
}
export default ButtonPage;