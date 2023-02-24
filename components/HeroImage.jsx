import lotus from "../public/images/lotus.jpg";

const HeroImage = () => {
  return (
    <div
      className={
        "bg-[url('../public/images/lotus.jpg')] bg-no-repeat bg-cover bg-center h-[32rem] absolute left-0 right-0 z-10 brightness-50"
      }
    ></div>
  );
};
export default HeroImage;
