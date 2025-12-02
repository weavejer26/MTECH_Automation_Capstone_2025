import FeaturedProductsSelectors from '../pageobjects/FeaturedProductsSelectors.js';
describe('Automated SSE Capstone Test (Featured Products)', () => {

//Featured Products
    it('Should Open Each Featured Product Page and return to Home when Clicked On', async () => {
        await FeaturedProductsSelectors.open();
        await FeaturedProductsSelectors.solderingProductLink();
        await FeaturedProductsSelectors.connectorsProductLink();
    })
});