import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

//Login and Burger Menu Test
//standard_user
describe('Login and Burger Menu Test', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await browser.url('https://www.saucedemo.com/inventory.html')
    });
    
    it('should login with valid credentials', async () => {
    await expect(SecurePage.productsContainer).toBeDisplayed();
    });

//Burger Menu
    it('Should open the burger menu from inventory page', async () => {
        await expect(SecurePage.productsContainer).toBeDisplayed();
        //Open Menu
        await SecurePage.openBurgerMenu();
    });

//All Items
    it('Should head back to inventory page using the "All Items" link', async () => {
        //Should test from the Cart Page
        await SecurePage.viewCart();
        await SecurePage.allItemsLink();
    });

//About URL
    it('Should check that the "About" URL works without navigating to it', async () => {
        await SecurePage.burgerMenuVisible();
        await SecurePage.aboutLinkHref();
    }); 

//Logout
    it('Should successfully logout from burger menu', async () => {
        await SecurePage.logout();
    });

//Reset App State
     it('Should reset app state', async () => {
        await SecurePage.openBurgerMenu();
        await SecurePage.resetAppStateLink();
    });
    
});

//Shopping Cart Test
describe('Shopping Cart Test', () => {
    it('Should select random amount of items, add them to, cart, and then remove all', async () => {
        const itemsArray = await SecurePage.addRandomItemsandNames();

        await SecurePage.viewCart();
        await SecurePage.allRemoveItemButtons();
    });
});