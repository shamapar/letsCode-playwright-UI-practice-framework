import { Page } from "playwright";
class DropdownPage {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }
    get selectFruitDropdown() {
        return this.page.locator("#fruits");
    }
    get successNotification() {
        return this.page.locator('//p[@class="subtitle"]');
    }

    get selectSuperHeroDropdown() {
        return this.page.locator("#superheros");
    }

    get allSuperheroes() {

        return this.page.locator('select[id="superheros"]>option');
    }

    async allSuperheroList() {

        const SuperHeroes = await this.allSuperheroes.all();

        const superHero: string[] = [];

        for (let hero = 0; hero < SuperHeroes.length; hero++) {
            superHero.push(await SuperHeroes[hero].innerText());

        }
        return superHero;

    }

    async lastSuperhero() {
        const list = await this.allSuperheroList();
        const lastNumber = await this.allSuperheroes.count()

        return (list[lastNumber - 1]);
    }

}
export default DropdownPage;