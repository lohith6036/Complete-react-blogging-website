import {useEffect, useState} from 'react';


const useFetch = (url) => {

const [data,setData] = useState(null); 
const [isPending, setIsPending] = useState(true);
const [error,setError] = useState(null);

useEffect(()=>{
    const abortController = new AbortController();
    console.log('use effect called');
    setTimeout(()=>{
        fetch(url,{signal:abortController.signal})
    .then(res =>{
        if(!res.ok){
            throw Error('could not fetch data for the resource')
        }
        return res.json();
    }).then((data)=>{
        setData(data);
        setIsPending(false);
        setError(null);
    })
    .catch(err=>{
        if(err.name ==='AbortError')
        {
            console.log('fetch Aborted');
        }
        else{
        setError(err.message);
        setIsPending(false);
        }
    })
    },1000);

return ()=> abortController.abort();

},[]);

return {data, isPending, error}
}
export default useFetch;
