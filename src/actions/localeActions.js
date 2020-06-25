export function setLocale(locale) {
    return {
        type: 'SET_LOCALE',
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(locale);
            }, 2000);
        })
    };
}