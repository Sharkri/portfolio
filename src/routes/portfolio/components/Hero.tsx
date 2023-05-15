function Hero() {
  return (
    <div className="flex-col-center max-w-[960px] mx-auto w-full min-h-[95vh]">
      <div className="text-[min(10.5vw,128px)] w-full max-w-[74vw] max-xlg:max-w-[78vw] child:leading-[1.05] uppercase">
        <h1 className="overflow-hidden">
          <p className="animate-text-slide-up">Sharkri</p>
        </h1>

        <h1 className="font-bold pl-[14%]">
          <div className="overflow-hidden">
            <p className="animate-text-slide-up">web</p>
          </div>

          <div className="overflow-hidden pl-[6%]">
            <p className="animate-text-slide-up">developer</p>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
