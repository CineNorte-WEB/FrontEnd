const Brand = () => {
  return (
    <>
      <nav className="flex flex-col pt-8 pl-12 bg-black">
        <div className="flex space-x-4">
          <img
            src="/images/flower.png"
            alt="아이콘"
            className="w-[75px] h-[75px]"
          />
          <img
            src="/images/flower.png"
            alt="아이콘"
            className="w-[75px] h-[75px]"
          />{" "}
          <img
            src="/images/flower.png"
            alt="아이콘"
            className="w-[75px] h-[75px]"
          />
        </div>
        <div className="">
          <h1 className="font-normal text-white text-8xl font-petemoss">
            CamChelin
          </h1>
        </div>
      </nav>
    </>
  );
};
export default Brand;
