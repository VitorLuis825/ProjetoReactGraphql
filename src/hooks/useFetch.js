import {useEffect,useState} from 'react'


export default function useFetch(url){
    let [data,setData] = useState(null)
    let [loading, setLoading] = useState(null)
    let [error,setError] = useState(null)

    useEffect(()=>{

        const fetchData = async()=>{

            setLoading(true)

            try {
                const res = await fetch(url)
                const json = res.json()

                setData(json)
            }catch(e){
                setError(e)
            }

            setLoading(false)
        } 

    },[url])

    return {loading, error, data}

}