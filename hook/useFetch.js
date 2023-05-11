import { useState, useEffect } from "react"
import axios from "axios"

const RAPID_API_KEY = process.env.RAPID_API_KEY

const useFetch = (endpoint) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    console.log(RAPID_API_KEY)

    const options = {
        method: "GET",
        url: `https://udemy-course-scrapper-api.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": `${RAPID_API_KEY}`,
            "X-RapidAPI-Host":
                "udemy-course-scrapper-api.p.rapidapi.com",
        },
    }
}

const fetchData = async () => {
    setIsLoading(true)
    try {
        const response = axios.request(options)
        setData((await response).data.data)
        setIsLoading(false)
    } catch (error) {
        setError(error)
        alert("There is an error occuring...❌")
    } finally {
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch  }
}
