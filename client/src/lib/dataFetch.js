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

export async function fetchCategories() {
    try {
        const categories = await axios.get("http://127.0.0.1:8000/categories", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        return categories.data.data
    } catch(error) {
        console.log(error)
    }
}

export async function fetchAccounts() {
    try {
        const accounts = await axios.get("http://127.0.0.1:8000/accounts", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        return accounts.data.data
    } catch(error) {
        console.log(error)
    }
}