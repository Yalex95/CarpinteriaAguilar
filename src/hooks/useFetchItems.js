import {useEffect,useState} from 'react'
import { getItems } from '../helpers/getItems'

/**
 * 
 * @returns state
 */
export const useFetchItems=()=> {
    const [state, setState] = useState({
        data:[],
        loading: true
    });
    
   useEffect(()=>{
        getItems().then(items=>setState({
        data:items,
        loading:false
        }))
   },[])
   return state; 
}

