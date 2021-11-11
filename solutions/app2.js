const cookieHandler = {
  getAll() {
    const cookies = document.cookie.split('; ');
    const cookiesObj = cookies.reduce((pv, cv) => {
      const [name, value] = cv.split('=');
      return { ...pv, [name]: value };
    }, {});
    return cookiesObj;
  },
  toSessionStorage() {
    const cookiesArr = Object.entries(this.getAll());
    cookiesArr.forEach((cookie) => {
      sessionStorage.setItem(cookie[0], cookie[1]);
    });
  },
  flush() {
    const cookieNames = Object.keys(this.getAll());
    cookieNames.forEach((cookieName) => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
  },
};
// export { cookieHandler };
export { cookieHandler };
