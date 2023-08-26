import { LANGS } from "../../../constants";
import { am_words } from "./am_words";

// special english words lib
import { default as en_words } from 'an-array-of-english-words';

// ts type
type WordsList = {
    [key: string]: string[]
};

// list
const wordsList: WordsList = {
    [LANGS.am]: am_words,
    [LANGS.en]: en_words
};

export default wordsList;