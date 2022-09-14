import * as msal from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "3d115e87-de25-47ee-ba96-9408b3b2ea9d",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

export default new msal.PublicClientApplication(msalConfig);
