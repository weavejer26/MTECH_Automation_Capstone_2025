import SearchSelectors from '../pageobjects/SearchBarSelectors.js'
describe('Automated SSE Capstone Test (Search Bar)', () => {

//Search Correct Product
    it('Should Search for "Batteries" Successfully', async () => {
        await SearchSelectors.open();
        await SearchSelectors.lookUp('Batteries');
    })

    it('Should Search for "Cables" Successfully', async () => {
        await SearchSelectors.open();
        await SearchSelectors.lookUp('Cables');
    })

//Search Typo    
    it('Should Search With a Typo', async () => {
        await SearchSelectors.open();
        await SearchSelectors.lookUp('Bttries');
    })

//Search Many Characters
    it('Should Search With Many Characters And "Did Not Yield Any Results" Should Appear', async () => {
        await SearchSelectors.open();
        await SearchSelectors.lookUp('akdjsfhkljasdhfkljasdfkljhasakdjsfhkljasdhfkljasdfkljhasakdjsfhkljasdhfkljasdfkljhas');
    })

//Search with no input

    it('Should Search With No Text Input', async () => {
        await SearchSelectors.open();
        await SearchSelectors.lookUp('');
    })

//Search One Character
     it('Should Search With One Character', async () => {
        await SearchSelectors.open();
        await SearchSelectors.lookUp('Z');
    })

    //Search Special Character
     it('Should Search With Special Character', async () => {
        await SearchSelectors.open();
        await SearchSelectors.lookUp('*');
    })
});
