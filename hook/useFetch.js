import { useState, useEffect } from "react"
import axios from "axios"
//TODO Use @env to use environment variables in react native
// import { RAPID_API_KEY } from "@env"

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    //TODO Test and see if @env is working
    // console.log("The api key")
    // console.log(RAPID_API_KEY)

    // const options = {
    //     method: "GET",
    //     url: `https://udemy-course-scrapper-api.p.rapidapi.com/${endpoint}`,
    //     headers: {
    //         //TODO Use this when @env is working
    //         // "X-RapidAPI-Key": `${RAPID_API_KEY}`,
    //         "X-RapidAPI-Key":
    //             "05544a984amsha9ecc4b524526ffp1c351fjsn7ec0881fa1c4",
    //         "X-RapidAPI-Host":
    //             "udemy-course-scrapper-api.p.rapidapi.com",
    //     },
    // }
    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            "X-RapidAPI-Key":
                "05544a984amsha9ecc4b524526ffp1c351fjsn7ec0881fa1c4",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
    }
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = axios.request(options)
            setData((await response).data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            console.log(error)
            alert("There is an error occuring...❌")
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default useFetch
