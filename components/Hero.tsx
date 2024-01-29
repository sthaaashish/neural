// 'use client'
import type { StaticImageData } from 'next/image'
import Image from 'next/legacy/image'
import { useRouter } from 'next/navigation'

interface HeroProps{
  imageData:StaticImageData,
  imageAlt:string,
  title:string
}

const Hero = (props:HeroProps) => {
  // const router=useRouter();
  return (
   <div className='relative h-screen'>
    <div className='absolute'>
    <Image src={props.imageData} alt={props.imageAlt} style={{objectFit:'cover'}} />
    </div>
    <div>
      <h1>{props.title}</h1>

    </div>
   </div>
  )
}

export default Hero
{/* <div className='relative'>
<Image
  src="/robot.jpg"
  width={1400}
  height={800}
  alt="image"
  className='object-cover'
/>
<div className='absolute top-1/4 right-8  text-white'>
  <h1 className='text-7xl'>Neural evo</h1> 
  <button className='bg-blue-700 px-4 py-2 rounded-md' onClick={()=>router.push("/product")}>Shop Now</button>
  </div>

</div> */}