import { createContext, useEffect, useState } from "react";

export const Appcontext=createContext();
const AppContextProvider=(props)=>{
     const [data, setData] = useState(null);
      const [val, setVal] = useState("");
      const [flag,setFlag]=useState(false);
      const [lat,setLat]=useState("28.5355");
      const [long,setLong]=useState("77.3910");
    const value={data,setData,val,setVal,flag,setFlag,lat,long,setLat,setLong};
 return(
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}
export default AppContextProvider