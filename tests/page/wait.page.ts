import { Page } from '@playwright/test'

class WaitPage {
    page: Page
    constructor(page: Page) {
        this.page = page

    }

    get simpleAlertButton() {
        return this.page.getByRole('button', { name: 'Simple Alert' });
    }


}
export default WaitPage;