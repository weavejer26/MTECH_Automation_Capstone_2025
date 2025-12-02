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

    get transistorsProduct () {
        return $('a[href="/collections/transistors"]')
    }

    async transistorsProductlink () {
        await this.transistorsProduct.waitForDisplayed();
        await this.transistorsProduct.click();
        await browser.back();
    }

    get cablesProduct () {
        return $('a[href="/collections/cable"]')
    }

    async cablesProductLink () {
        await this.cablesProduct.waitForDisplayed();
        await this.cablesProduct.click();
        await browser.back();
    }

    get heatshrinktubingProduct () {
        return $('a[href="/collections/heat-shrink-tubing-1"]')
    }

    async heatshrinktubingProductLink () {
        await this.heatshrinktubingProduct.waitForDisplayed();
        await this.heatshrinktubingProduct.click();
        await browser.back();
    }

    get diodesProduct () {
        return $('a[href="/collections/diodes-1"]')
    }

    async diodesProductLink () {
        await this.diodesProduct.waitForDisplayed();
        await this.diodesProduct.click();
        await browser.back();
    }

    get batteriesProduct () {
        return $('a[href="/collections/battery"]')
    }

    async batteriesProductLink () {
        await this.batteriesProduct.waitForDisplayed();
        await this.batteriesProduct.click();
        await browser.back();
    }

    get fusesProduct () {
        return $('a[href="/collections/fuses-1"]')
    }

    async fusesProductLink () {
        await this.fusesProduct.waitForDisplayed();
        await this.fusesProduct.click();
        await browser.back();
    }

    get toolsProduct () {
        return $('a[href="/collections/tools-2"]')
    }

    async toolsProductLink () {
        await this.toolsProduct.waitForDisplayed();
        await this.toolsProduct.click();
        await browser.back();
    }

    get capacitorsProduct () {
       return $('a[href="/collections/capacitor"]')
    }

    async capacitorsProductLink () {
        await this.capacitorsProduct.waitForDisplayed();
        await this.capacitorsProduct.click();
        await browser.back();
    }

    get bananaplugProduct () {
        return $('a[href="/collections/banana-plug"]')
    }

    async bananaplugProductLink() {
        await this.bananaplugProduct.waitForDisplayed();
        await this.bananaplugProduct.click();
        await browser.back();
    }

    get resistorsProduct () {
        return $('a[href="/collections/resistors-1"]')
    }

    async resistorsProductLink () {
        await this.resistorsProduct.waitForDisplayed();
        await this.resistorsProduct.click();
        await browser.back();
    }
};

export default new FeaturedSelectors();
