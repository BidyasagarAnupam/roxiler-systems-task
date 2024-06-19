import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { transactionEndpoints } from "../apis"

const {
    TRANSACTIONS_API
} = transactionEndpoints


export const getTransaction = async (search, page = 1, perPage = 10, month) => { 
    let result = null;
    try {
        const response = await apiConnector("POST", TRANSACTIONS_API, {search, page, perPage, month})
        console.log("getTransaction response", response)
        if (!response?.data?.success) {
            throw new Error("Could Not GET Transactions")
        }
        result = response.data;
        
    } catch (error) {
        console.log("getTransaction ERROR............", error)
        toast.error(error.message)
    }
    return result;
}