import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
import pic from "../Images/profile.jpg"

  
const Posts = () => {
    const posts = ["a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f']

    return(
        <div className='my-3'>
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-3 gap-8 w-[90%] max-[640px]:w-[90%] " role="group">
         {
          posts.map(posts =>(
            <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-4 px-2"
            >
              <Avatar
                size="lg"
                variant="circular"
                className="w-[50px] h-[50px] rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  {/* <div className="5 flex items-center gap-0">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div> */}
                </div>
                <Typography color="blue-gray">Frontend Lead @ Google</Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-3 ">
              <Typography>
                &quot;I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun! And its really
                affordable, very humble guys !!!&quot;
              </Typography>
            </CardBody>
          </Card>
          ))
         }
     </div>
      </div>
    )
}


export default Posts;