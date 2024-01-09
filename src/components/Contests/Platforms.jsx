import { useEffect,useState } from "react"


const Platforms = ()=>{
const [platforms,setplatforms] = useState([]);

const getcontest = async()=>{
    // try {
    //     const response = await fetch(
    //       "https://contestsapi.onrender.com/cached/2",
    //       {
    //         mode: 'no-cors',
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     if (response.ok) {
    //       const data = await response.json();
    //     } else {
    //       alert("Something went wrong please login again");
    //     }
    //   } catch (error) {
    //     console.error("Error during login:", error);
    //   }
}

    useEffect(()=>{
       getcontest()
    },[]);


    return(
        <div>

        </div>
    )
}


export default Platforms;