import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { combinedEndpoints } from "../apis"

const {
    COMBINED_API
} = combinedEndpoints


export const getCombinedData = async (search, page = 1, perPage = 10, month) => {
    const toastId = toast.loading("Fetching Data....")
    let result = null;
    try {
        const response = await apiConnector("POST", COMBINED_API, { search, page, perPage, month})
        console.log("get combined data response", response);

        if (!response?.data?.success) {
            throw new Error("Could Not GET combined data")
        }
        result = response.data.data;

    } catch (error) {
        console.log("get combined data ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result;
}