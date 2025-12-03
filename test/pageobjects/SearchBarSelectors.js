import { $, expect } from '@wdio/globals'
import Website from './website.js';

class SearchSelectors extends Website {
    get searchInputBar() {
        return $('input[type="search"]')
    }

    get searchQuery () {
        return $('input[name="q"]')
    }

    async lookUp(searchProduct) {
        await this.searchQuery.waitForDisplayed();
        await this.searchInputBar.click();
        await this.searchQuery.setValue(searchProduct)
        await this.searchIcon.click();
        await expect(browser).toHaveUrl(`https://standardsupply.myshopify.com/search?q=${searchProduct}`)
    }

    get searchIcon () {
        return $('button[type="submit"]')
    }

}

export default new SearchSelectors();