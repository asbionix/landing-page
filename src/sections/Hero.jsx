import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Home Automation
            </div>
            <h1 className="mb-6 h3 text-white uppercase max-lg:mb-7 max-md:mb-4 max-md:text-3xl max-md:leading-12">
              Simple. Secure. Smart.
            </h1>
            <p className="max-w-440 mb-14 text-white body-2 max-md:mb-10">
              Your light switches are stuck in the Stone Age! Let’s launch them into orbit!
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">What we do</Button>
            </LinkScroll>
          </div>
        </div>
      </Element>
      <div className="absolute top-0 sm:-top-32 left-[calc(50%-340px)] sm:left-0 sm:w-screen w-[1230px] pointer-events-none">
        <img
          src="/images/hero1.jpg"
          className="size-1230 sm:w-full sm:h-auto max-lg:h-auto opacity-50"
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
