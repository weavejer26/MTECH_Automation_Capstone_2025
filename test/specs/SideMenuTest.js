import SideSelectors from '../pageobjects/SideMenuSelectors.js'
describe('Automated SSE Capstone Test (Side Menus)', () => {

//Side Menus Test    
    it('Should Open Each Menu Item When Clicked On', async () => {
        await SideSelectors.open();
        await SideSelectors.allProducts();
        await SideSelectors.amazonLink();
        await SideSelectors.ebayLink();
        await SideSelectors.aboutUsLink();
        await SideSelectors.newsBlogLink();
        await SideSelectors.facebookLink();
        await SideSelectors.homeLink();
    })
});