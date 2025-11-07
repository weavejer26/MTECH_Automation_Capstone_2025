import { $ } from '@wdio/globals'
import Page from './page.js';
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get productsContainer() {
        return $('#inventory_container');
   };

   //BurgerMenu
    get allItems() {
        return $('.bm-item-list a');
    }
    get aboutLink() {
        return $('#about_sidebar_link');
    }
    get logoutLink() {
        return $('#logout_sidebar_link');
    }
    get menuSidebar() {
        return $('.bm-menu');
    }
    get resetAppState() {
        return $('#reset_sidebar_link');
    }
    get btnBurger() {
    return $('#react-burger-menu-btn');
    }

    //ClickBurgerMenu

    async openBurgerMenu() {
    await this.btnBurger.waitForDisplayed({ timeout: 5000 });

    const menuOpen = await this.menuSidebar.isDisplayed();

    if (menuOpen) {
        console.log('Burger Menu already open, skip click');
        return;
    }

    await this.btnBurger.click();

    await this.menuSidebar.waitForDisplayed({ timeout: 5000 });
    }
    

    //open up Burger Menu
    async burgerMenuVisible() {
        await this.openBurgerMenu();
        await expect(this.aboutLink).toBeDisplayed();
    
    return this;
    }

    //All Items
    async allItemsLink() {
        await this.openBurgerMenu();
        await this.allItems.click();
        await expect(this.productsContainer).toBeDisplayed();
    }

    //About link
    async aboutLinkHref() {
        await expect(this.aboutLink).toHaveAttr('href', 'https://saucelabs.com/');
    }

    //Logout
    async logout() {
        await this.openBurgerMenu();
        await this.logoutLink.click();
    }

    //Reset App State
    async resetAppStateLink() {
        await this.openBurgerMenu();
        await this.resetAppState.click();
    }

    //Shopping Cart
    get cartIcon() {
        return $('a.shopping_cart_link');
    }
    get cartBadge() {
        return $('.shopping_cart_badge');
    }
    get allAddButtons() {
        return $$('button[data-test^="add-to-cart-"]');
    }
    get allRemoveButtons() {
        return $$('button[data-test^="remove-"]');
    }
    //Add the items
    async addRandomItemsandNames() {
        const buttons = await this.allAddButtons;
        const maxItem = buttons.length;

        const itemCount = Math.floor(Math.random() * (maxItem - 1)) + 2;

        const addNames = [];

        for (let i = 0; i < itemCount; i++) {
            const button = buttons[i];

            const dataTestAttr = await button.getAttribute('data-test');

            const name = dataTestAttr.replace('add-to-cart-', '');

            await button.click();
            addNames.push(name);
        }

        await expect(this.cartBadge).toHaveText(addNames.length.toString());
        return addNames;
    }
    //View Cart
    async viewCart () {
        await this.cartIcon.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    }

    //Remove Items
    async allRemoveItemButtons() {
        let removeButtons = await this.allRemoveButtons;

        while (removeButtons.length > 0) {
            await removeButtons[0].click();
            removeButtons = await this.allRemoveButtons;
        }

        await expect(this.cartBadge).not.toBeDisplayed();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    }
 
};

export default new SecurePage();
