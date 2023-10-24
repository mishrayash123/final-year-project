import './Home.css'
import cf from "../Image/cf.png"
import top from "../Image/to.png"
import at from "../Image/ac.jpg"
import cs from "../Image/cs.png"
import ccf from "../Image/ccf.jpg"
import hac from "../Image/hac.jpg"
import haca from "../Image/haca.jpg"
import kik from "../Image/gs.jpeg"
import lc from "../Image/lc.png"
import { useNavigate } from "react-router-dom";


function Plateforms() {
        const nav = useNavigate();
  


    return (
        <div className='m-5 mb-5'>
            <h5 className='text-black font-bold text-3xl  text-center'>Top Coding Plateforms</h5>
<div className=' grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 mt-4  gap-16 mx-auto' role="group">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href='' onClick={()=>{
                 nav("/contest", { state:{
                        cat:"codeforces"
                      }});
        }}> <img class="rounded-t-lg p-2 " src={cf} alt="" /></a>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href=''   onClick={()=>{
                 nav("/contest", { state:{
                        cat:"top_coder"
                      }});
        }}> <img class="rounded-t-lg p-2 " src={top} alt="" /></a>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href=''   onClick={()=>{
                 nav("/contest", { state:{
                        cat:"at_coder"
                      }});
        }}> <img class="rounded-t-lg p-2 " src={at} alt="" /></a>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href=''   onClick={()=>{
                 nav("/contest", { state:{
                        cat:"cs_academy"
                      }});
        }}> <img class="rounded-t-lg p-2 " src={cs} alt="" /></a>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href=''   onClick={()=>{
                 nav("/contest", { state:{
                        cat:"code_chef"
                      }});
        }}> <img class="rounded-t-lg p-2 " src={ccf} alt="" /></a>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href=''   onClick={()=>{
                 nav("/contest", { state:{
                        cat:"hacker_rank"
                      }});
        }}> <img class="rounded-t-lg p-2 " src={hac} alt="" /></a>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href=''   onClick={()=>{
                 nav("/contest", { state:{
                        cat:"hacker_earth"
                      }});
        }}> <img class="rounded-t-lg p-2 " src={haca} alt="" /></a>
</div>
{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href=''   onClick={()=>{
                 nav("/contest", { state:{
                        cat:"kick_start"
                      }});
        }}> <img class="rounded-t-lg p-2 " src={kik} alt="" /></a>
</div> */}
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href=''   onClick={()=>{
                 nav("/contest", { state:{
                        cat:"leet_code"
                      }});
        }}> <img class="rounded-t-lg p-2 " src={lc} alt="" /></a>
</div>
              </div>
        </div>
    );
}

export default Plateforms;