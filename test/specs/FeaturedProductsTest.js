import FeaturedProductsSelectors from '../pageobjects/FeaturedProductsSelectors.js';
describe('Automated SSE Capstone Test (Featured Products)', () => {

//Featured Products
    it('Should Open Each Featured Product Page When Clicked On And Return To Home Page Afterwards', async () => {
        await FeaturedProductsSelectors.open();
        await FeaturedProductsSelectors.solderingProductLink();
        await FeaturedProductsSelectors.connectorsProductLink();
        await FeaturedProductsSelectors.transistorsProductlink();
        await FeaturedProductsSelectors.cablesProductLink();
        await FeaturedProductsSelectors.heatshrinktubingProductLink();
        await FeaturedProductsSelectors.diodesProductLink();
        await FeaturedProductsSelectors.batteriesProductLink();
        await FeaturedProductsSelectors.fusesProductLink();
        await FeaturedProductsSelectors.toolsProductLink();
        await FeaturedProductsSelectors.capacitorsProductLink();
        await FeaturedProductsSelectors.bananaplugProductLink();
        await FeaturedProductsSelectors.resistorsProductLink();

    })
});