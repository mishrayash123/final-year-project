import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import {useNavigate} from 'react-router-dom'


const Plateforms = ()=>{
    const nav = useNavigate();

    return (
        <div>
         <div className='my-8'>
            <h2 className="text-black font-bold text-xl text-center my-3">All Coding Platforms</h2>
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-3 gap-8 w-[90%] max-[640px]:w-[90%] " role="group">
            {/* <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg cursor-pointer" onClick={
              (e) => {
                nav('/contests', { state: { id:"all"} });
              }
          }>
            <CardBody className="mb-1 p-2 ">
              <Typography className='text-blue-600 font-bold text-center p-5'>
                All
              </Typography>
            </CardBody>
          </Card> */}
          <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg cursor-pointer"  onClick={
              (e) => {
                nav('/contests', { state: { id:"atcoder"} });
              }
          }>
            <CardBody className="mb-1 p-2 ">
              <Typography className='text-blue-600 font-bold text-center p-5'>
                Atcoder
              </Typography>
            </CardBody>
          </Card>
          <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg cursor-pointer"  onClick={
              (e) => {
                nav('/contests', { state: { id:"codechef"} });
              }
          }>
            <CardBody className="mb-1 p-2 ">
              <Typography className='text-blue-600 font-bold text-center p-5'>
              Codechef
              </Typography>
            </CardBody>
          </Card>
          <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg cursor-pointer"  onClick={
              (e) => {
                nav('/contests', { state: { id:"codeforces"} });
              }
          }>
            <CardBody className="mb-1 p-2 ">
              <Typography className='text-blue-600 font-bold text-center p-5'>
               Codeforces
              </Typography>
            </CardBody>
          </Card>
          <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg cursor-pointer"  onClick={
              (e) => {
                nav('/contests', { state: { id:"hackerearth"} });
              }
          }>
            <CardBody className="mb-1 p-2 ">
              <Typography className='text-blue-600 font-bold text-center p-5'>
              Hackerearth
              </Typography>
            </CardBody>
          </Card>
          <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg cursor-pointer"  onClick={
              (e) => {
                nav('/contests', { state: { id:"hackerrank"} });
              }
          }>
            <CardBody className="mb-1 p-2 ">
              <Typography className='text-blue-600 font-bold text-center p-5'>
              Hackerrank
              </Typography>
            </CardBody>
          </Card>
          <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg cursor-pointer"  onClick={
              (e) => {
                nav('/contests', { state: { id:"leetcode"} });
              }
          }>
            <CardBody className="mb-1 p-2 ">
              <Typography className='text-blue-600 font-bold text-center p-5'>
              Leetcode
              </Typography>
            </CardBody>
          </Card>
          <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg cursor-pointer"  onClick={
              (e) => {
                nav('/contests', { state: { id:"toph"} });
              }
          }>
            <CardBody className="mb-1 p-2 ">
              <Typography className='text-blue-600 font-bold text-center p-5'>
              Toph
              </Typography>
            </CardBody>
          </Card>
          <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg cursor-pointer"  onClick={
              (e) => {
                nav('/contests', { state: { id:"codeforces-gym"} });
              }
          }>
            <CardBody className="mb-1 p-2 ">
              <Typography className='text-blue-600 font-bold text-center p-5'>
               Codeforces-gym
              </Typography>
            </CardBody>
          </Card>
     </div>
      </div>
        </div>
    )
}


export default Plateforms;