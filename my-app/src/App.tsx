import { useEffect, useState } from "react";










function App() {
    const [hasMounted, setHasMounted] = useState(false);
    const [sort,setSort] = useState('');
    let ships = [];
    let manufacturer = [];
  
        
    
    useEffect (()=>{
      if(!hasMounted && sort ===''){
        getShips(); 
      }
      setHasMounted(true)
    },[hasMounted,sort]) 

    const getShips = async ()=>{         
      for (var i=1; i < 5; i++) {          
    
      let res =  await fetch('https://swapi.dev/api/starships/?page='+i);
      let payload = await res.json();
        payload.results.forEach(element => {
            if(sort!=''){
            if(element.manufacturer==sort){
              ships.push(element);
            }
          }else{
            ships.push(element);    
          }              
        });
      }    
     
      

      const options = ships.map((elemet)=>{         
            <option onSelect={setSort}  value="{elemet.manufacturer}">elemet.manufacturer</option>         
      })
        console.log(options);
      }
   
        return(
            <select>
              <option value="">please select a ship</option>
              {options.map((option)=>{
                option
              })}
            </select>
            <table>
              <tr>
                {
                ships[0].map((ship)=>{
                  <th>Object.key(ship)</th>
                })
                }
              </tr>
              <tbody>                
                {
                ships.forEach(ship => {
                  <tr>
                  ship.map((el)=>{
                      <td>el</td>
                  })
                  </tr>
                });
                }
              </tbody>
            </table>
        )
    
    
    

    
    

    
}
export default App;
