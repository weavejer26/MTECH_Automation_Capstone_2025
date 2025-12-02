import LogoSelectors from '../pageobjects/LogoSelectors.js';
describe('Automated SSE Capstone Test (Logo Button)', () => {
//Logo Button
    it('Should Click Logo Button To Return To Main Page', async () => {
        await LogoSelectors.open();
        await LogoSelectors.logoLink();
    })
});