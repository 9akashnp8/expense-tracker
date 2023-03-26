import axios from "axios";

export async function fetchTransactions() {
    try {
        const transactions = await axios.get("http://127.0.0.1:8000/transactions", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        return transactions.data.data
    } catch(error) {
        console.log(error)   
    }
}