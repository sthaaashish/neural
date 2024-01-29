import Hero from "@/components/Hero"
import Image from "next/image"
import robot from "@/public/robot.jpg"

const page = () => {
  return (
    <>
   <div className="relative">
    <Hero title="about" imageAlt="about" imageData={robot}/>
   </div>
    <div className=" absolute min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700">
        Welcome to our About Us page. We are a passionate team dedicated to providing quality
        products/services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
        efficitur velit. Sed ullamcorper, lectus id ullamcorper dapibus, elit felis cursus purus,
        vel vulputate nunc nisi ut enim.
      </p>
    </div>
    <div>
      <Image src="https://plus.unsplash.com/premium_photo-1676009619407-18a5121f9687?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="image" width={600} height={700} className="rounded"/>
    </div>
  </div>
  </>
  )
}

export default page
