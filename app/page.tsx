import Hero from "@/components/Hero";
import robot from "@/public/robot.jpg"
import aa from "@/public/aa.jpg"



const page = async() => {

  return (
    <div>
      <Hero imageData={aa} imageAlt="robot" title="Home page"/>
    </div>
  );
};

export default page;
