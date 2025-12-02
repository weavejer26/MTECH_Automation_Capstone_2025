import { $ } from '@wdio/globals'
import Website from './website.js';
import { expect } from '@wdio/globals'

class SideSelectors extends Website {
//Side Menus
    get allProductsMenu () {
        return $('a[href="/collections"]');
    }

    async allProducts () {
        await this.allProductsMenu.waitForDisplayed();
        await this.allProductsMenu.click();
        }


    get amazonPage () {
        return $('a[href="https://www.amazon.com/s?me=A1RPS3WYZXI5NQ&linkCode=sl2&linkId=e81b429e9ec74085a815d197016fd489&marketplaceID=ATVPDKIKX0DER&redirect=true&tag=wowsur-20&ref=as_li_ss_tl"]')
    }

    async amazonLink () {
        await this.amazonPage.waitForDisplayed();
        await this.amazonPage.click();
        await expect(browser).toHaveUrl('https://www.amazon.com/s?me=A1RPS3WYZXI5NQ&linkCode=sl2&linkId=e81b429e9ec74085a815d197016fd489&marketplaceID=ATVPDKIKX0DER&redirect=true&tag=wowsur-20&ref=as_li_ss_tl')
        await browser.back();
        }
    
    get ebayPage () {
        return $('a[href="https://www.ebay.com/str/standardsupplyelectronics"]')
        }

    get ebayLogo () {
        return $('a[href="https://www.ebay.com"]')
    }
    
    async ebayLink () {
        await this.ebayPage.waitForDisplayed();
        await this.ebayPage.click();
        await this.ebayLogo.waitForDisplayed();
        await browser.back();
    }

    get aboutUsPage () {
        return $('a[href="/pages/about-us-1"]')
    }
    async aboutUsLink () {
        await this.aboutUsPage.waitForDisplayed();
        await this.aboutUsPage.click();
    }

    get newsBlogPage () {
        return $('a[href="/blogs/news"]')
    }

    async newsBlogLink () {
        await this.newsBlogPage.waitForDisplayed();
        await this.newsBlogPage.click();
    }

    get facebookPage () {
        return $('a[href="https://www.facebook.com/StandardSupplyElectronics/"]')
    }

    async facebookLink () {
        await this.facebookPage.waitForDisplayed();
        await this.facebookPage.click();
        await expect(browser).toHaveUrl('https://www.facebook.com/StandardSupplyElectronics/');
        await browser.back();
    }

    get homePage () {
        return $('a[href="/"]')
    }

    async homeLink () {
        await this.homePage.waitForDisplayed();
        await this.homePage.click();
    }
};

export default new SideSelectors();
