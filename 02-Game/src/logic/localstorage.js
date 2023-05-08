export const lsSet = (key, objeto) => {
    return window.localStorage.setItem(key, JSON.stringify(objeto));
}

export const lsGet = (key) => {
    let value = window.localStorage.getItem(key);
    if (value) value = JSON.parse(value);
    return value;
}

