import { $ } from '@wdio/globals'
import Website from './website.js';

class SearchSelectors extends Website {
    get searchInputBar() {
        return $('#search-bar__input')
    }

    get searchIcon () {
        return $('#search-bar__submit')
    }

    get resultsHeading () {
        return $('h2.small--text-center')
    }

}

export default new SearchSelectors();