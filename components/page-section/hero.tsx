import StarBorder from "@/components/StarBorder";
import GradientText from "@/components/GradientText";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-12">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-center"
        >
          <h1 className="text-7xl font-black uppercase">Akita one japan</h1>
          <h3 className="text-7xl font-black">Your Discovery Partner</h3>
        </GradientText>
      </div>

      <div>
        <StarBorder
          as="button"
          className="custom-class font-bold tracking-wider uppercase"
          color="cyan"
          speed="5s"
        ></StarBorder>
      </div>
    </div>
  );
};

export default Hero;
