export const LANGS = {
    en: "en",
    am: "am"
};

const modifyTranslation = (str: string, ...variables: string[]): string => {
    for (let i = 0; i < variables.length; i++) {   
        str = str.replace(`$${i + 1}`, variables[i]);
    }
    return (str);
};

export const TRANSLATIONS = {
    tries: {
        [LANGS.en]: (tries: number) => modifyTranslation("Remains: $1 tries", String(tries)),
        [LANGS.am]: (tries: number) => modifyTranslation("Մնաց: $1 փորձ", String(tries)),
    },
    btns: {
        cancel: {
            [LANGS.en]: 'Cancel',
            [LANGS.am]: 'Չեղարկել'
        },
        restart: {
            [LANGS.en]: 'Restart',
            [LANGS.am]: 'Վերսկսել'
        }
    },
    message: {
        youLose: {
            [LANGS.en]: 'Ohhh you lose ... !Game over!',
            [LANGS.am]: 'Օհհ Դուք պատրվեցիք ... !Խաղն ավարտվեց!'
        },
        youWin: {
            [LANGS.en]: 'Yes you win!!',
            [LANGS.am]: 'Այոո, Դուք հաղթեցիք!'
        }
    }
};