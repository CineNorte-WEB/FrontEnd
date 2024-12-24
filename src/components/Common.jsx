import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Common = () => {
  const [click, setClick] = useState(null);
  const navigate = useNavigate();

  const onHandleClick = (data) => {
    setClick(data);

    // 버튼에 따라 라우팅 처리
    if (data === 0) {
      navigate("/");
    }
    if (data === 1) {
      navigate("/community");
    } 
    if (data === 2) {
      navigate("/mypage");
    }   
  };

  return (
    <>
      <nav
        className="fixed flex flex-col items-center justify-center text-center border rounded-lg right-2 border-slate-500 w-30 z-50"
        style={{ top: "35%", transform: "translateY(-100%)" }}
      >
        <label
          onClick={() => onHandleClick(0)}
          className={`block my-2 hover:text-slate-500 hover:cursor-pointer ${
            click === 0
              ? "text-black font-bold"
              : click === null
              ? "text-gray-500 "
              : "text-gray-500 opacity-50"
          }`}
        >
          <img
            src="/images/지도.png"
            alt="지도"
            className="w-[30px] h-[30px]"
          />
          <p className="font-yeonsung">지도</p>
        </label>
        <hr className="w-full border border-slate-400" />
        <label
          onClick={() => onHandleClick(1)}
          className={`block my-2 hover:text-slate-500 hover:cursor-pointer ${
            click === 1
              ? "text-black font-bold"
              : click === null
              ? "text-black "
              : "text-gray-500 opacity-50"
          }`}
        >
          <img
            src="/images/커뮤니티.png"
            alt="커뮤니티"
            className="w-[30px] h-[30px] ml-1"
          />
          <p className="font-yeonsung">커뮤니티</p>
        </label>
        <hr className="w-full border border-slate-400" />
        <label
          onClick={() => onHandleClick(2)}
          className={`block my-2 hover:text-slate-500 hover:cursor-pointer ${
            click === 2
              ? "text-black font-bold"
              : click === null
              ? "text-black "
              : "text-gray-500 opacity-50"
          }`}
        >
          <img
            src="/images/사람.png"
            alt="사람"
            className="w-[30px] h-[30px] ml-3"
          />
          <p className="font-yeonsung">마이페이지</p>
        </label>
      </nav>
    </>
  );
};

export default Common;
