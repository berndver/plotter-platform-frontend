import * as msal from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: '3d115e87-de25-47ee-ba96-9408b3b2ea9d'
    }
};

export default new msal.PublicClientApplication(msalConfig);
