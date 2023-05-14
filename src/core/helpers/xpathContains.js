const xpathContains = (element, text) => `//${element}[contains(., '${text}')]`;

export default xpathContains;
