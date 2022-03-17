class URL {
  static getParameters = (...args) => {
    const urlQueryString = window.location.search;
    const urlParameters = urlQueryString ? new URLSearchParams(urlQueryString) : null;

    const parameters = {};
    args.forEach(arg => {
      parameters[arg] = urlParameters.get(arg) || null;
    });

    return parameters;
  }
}

export default URL;
