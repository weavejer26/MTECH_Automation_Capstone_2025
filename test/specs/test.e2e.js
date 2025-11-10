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

//Burger Menu
    it('Should open the burger menu from inventory page', async () => {
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
    it('Should verify the About link is clickable and correct URL', async () => {
        await SecurePage.verifyAbout();
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
    it('Should add an item using the parameter, go to cart, go to checkout then cancel, remove item, and continue shopping', async () => {
       const allNames = [
        'sauce-labs-backpack',
        'sauce-labs-bike-light',
        'sauce-labs-bolt-t-shirt',
        'sauce-labs-fleece-jacket',
        'sauce-labs-onesie',
        'test-allthethings()-t-shirt-(red)'
       ]
       const randomIndex = Math.floor(Math.random() * allNames.length);
       const itemName = allNames[randomIndex];

       await SecurePage.addSpecificItem(itemName);
       await SecurePage.viewCart();
       await SecurePage.goCheckout();
       await SecurePage.cancelCheck();
       await SecurePage.allRemoveItemButtons();
       await SecurePage.continueShop();
    });
});