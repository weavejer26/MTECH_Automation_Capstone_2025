import Selectors from '../pageobjects/Selectors.js'
describe('Automated SSE Capstone Test (Logo Button, Side Menus, Featured Products, Search Bar)', () => {
//Logo Button
    it('Should Click Logo Button To Return To Main Page', async () => {
        await Selectors.open();
        await Selectors.logoLink();
    })
//Side Menus Test    
    it('Should Open Each Menu Item When Clicked On', async () => {
        await Selectors.allProducts();
        await Selectors.amazonLink();
        await Selectors.ebayLink();
        await Selectors.aboutUsLink();
        await Selectors.newsBlogLink();
        await Selectors.facebookLink();
        await Selectors.homeLink();
    })

    it('Should Open Each Featured Product Page and return to Home when Clicked On', async () => {
        await Selectors.solderingProductLink();
        
    })
});