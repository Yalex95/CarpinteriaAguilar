/**
 * 
 * retorna una promesa 
 */
export const getItems=async()=>{
    //endpoint de firebase real time database
    const url=`https://web-page-1842d-default-rtdb.firebaseio.com/muebles.json`

    const resp= await fetch(url)
  
    const data = await resp.json();
    const arrayOfObjects=Object.entries(data);
//   console.log(dato
    
     const items= arrayOfObjects.map(e=>{
        
         return(
            
          e[1]
         )
     })
     return items;
}