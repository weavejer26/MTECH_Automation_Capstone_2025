import { $ } from '@wdio/globals'
import Website from './website.js';

class LogoSelectors extends Website {
//SSE Logo Button
    get logoButton () {
        return $('#HeaderLogoWrapper');
    }

    async logoLink () {
        await this.logoButton.isDisplayed();
        await this.logoButton.click();
    }
};

export default new LogoSelectors();
