// flag icons
import armenianFlag from '../../../assets/armenian-flag.png';
import usaFlag from '../../../assets/united-states-flag.png';

// constants
import { LANGS } from '../../../constants';

// getting image type from one of images
type imgSrcType = typeof armenianFlag;

// ts interface
interface ILanguagesData {
    src: imgSrcType,
    imgAlt: string,
    lang: string
}

// data
export const languagesData: ILanguagesData[] = [
    {
        src: armenianFlag,
        imgAlt: "armenian flag",
        lang: LANGS.am
    },
    {
        src: usaFlag,
        imgAlt: "usa flag",
        lang: LANGS.en
    }
];