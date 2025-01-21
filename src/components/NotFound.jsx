import { FcCancel } from "react-icons/fc";

const NotFound = () => {
  return (
    <>
      <div className="space-y-5">
        <div className="flex justify-center mt-64 text-center ">
          <h1 className="text-red-600 text-8xl font-nanum"> 4 </h1>
          <FcCancel className="text-red-500 font-nanum text-8xl" />
          <h1 className="text-red-600 text-8xl font-nanum"> 4 </h1>
        </div>

        <h3 className="mt-6 text-4xl text-center font-nanum">
          찾을 수 없는 페이지입니다.
        </h3>
        <h3 className="mt-4 text-3xl text-center font-nanum">
          요청하신 경로가 사라졌거나, 잘못된 경로를 이용하셨어요!
        </h3>
      </div>
    </>
  );
};
export default NotFound;
