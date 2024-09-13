const token = () => localStorage.getItem('tokenCommerce');

const setToken = (token) => localStorage.setItem('tokenCommerce', token);

const deleteToken = () => localStorage.removeItem('tokenCommerce');

export { token, setToken, deleteToken };
