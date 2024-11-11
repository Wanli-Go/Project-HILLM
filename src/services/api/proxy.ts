import { AxiosProxyConfig } from "axios";

const proxyConfig: AxiosProxyConfig = {
    host: process.env.REACT_APP_PROXY_HOST as string,
    port: parseInt(process.env.REACT_APP_PROXY_PORT as string, 10), // your proxy port
};

export default proxyConfig;
