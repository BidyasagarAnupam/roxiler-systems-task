import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {

    console.log("Method", method, "\n url ", url, "\n bodyData ", bodyData, "\n header", headers, params);
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: { // Send data as query parameters
            ...params, // Merge with any existing params
            month: bodyData?.month // Extract month from bodyData if provided
        },
    });
} 