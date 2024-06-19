import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { priceRangeEndpoints } from "../apis"

const {
    PRICE_RANGE_API
} = priceRangeEndpoints


export const getPriceRange = async (month) => {
    let result = null;
    try {
        const response = await apiConnector("POST", PRICE_RANGE_API, { month })
        console.log("get priceRange response", response);

        if (!response?.data?.success) {
            throw new Error("Could Not GET priceRange")
        }
        result = response.data;

    } catch (error) {
        console.log("getTransaction ERROR............", error)
        toast.error(error.message)
    }
    return result;
}