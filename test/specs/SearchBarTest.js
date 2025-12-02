import SearchSelectors from '../pageobjects/SearchBarSelectors.js'
describe('Automated SSE Capstone Test (Search Bar)', () => {

//Search Bar
    it('Should Click Search Icon And Head To Search Page', async () => {
        await SearchSelectors.open();
        await SearchSelectors.searchIconButton();
    })
});
