import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { statisticEndpoints } from "../apis"

const {
    STATISTICS_API
} = statisticEndpoints


export const getStatistics= async (month) => {
    let result = null;
    try {
        const response = await apiConnector("POST", STATISTICS_API, { month })
        console.log("get statistics response", response);
        if (!response?.data?.success) {
            throw new Error("Could Not GET statistics")
        }
        result = response.data;

    } catch (error) {
        console.log("get statistics ERROR............", error)
        toast.error(error.message)
    }
    return result;
}