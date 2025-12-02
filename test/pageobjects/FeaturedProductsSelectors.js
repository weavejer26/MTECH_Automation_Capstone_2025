import { $ } from '@wdio/globals'
import Website from './website.js';

class FeaturedSelectors extends Website {

//Featured Products
    get solderingProduct () {
        return $('a[href="/collections/soldering-irons"]');
    }

    async solderingProductLink () {
        await this.solderingProduct.waitForDisplayed();
        await this.solderingProduct.click();
        await browser.back();
    }

    get connectorsProduct () {
        return $('a[href="/collections/connectors-1"]')
    }

    async connectorsProductLink () {
        await this.connectorsProduct.waitForDisplayed();
        await this.connectorsProduct.click();
        await browser.back();
    }
};

export default new FeaturedSelectors();
