export const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const deleteInLocalStorage = (key) => {
    localStorage.removeItem(key)
}

export const getFromLocalStorage = (key) => {
    localStorage.getItem(key)
}