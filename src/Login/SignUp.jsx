import { MdOutlinePermIdentity } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { PiFlowerLotusLight } from "react-icons/pi";

function SignUp() {
  return (
    <div className="flex items-center justify-end min-h-screen bg-rose-800">
      <div className="mx-12">
        <p className="text-5xl text-white font-yeonsung">
          신촌과 회기역 주변 대학가의
        </p>
        <p className="text-5xl text-white font-yeonsung">
          숨겨진 맛집을 캠슐랭에서 발견하세요!
        </p>
        <img src="./images/연세대.jpg" alt="연세대학교" />
        <div className="flex ml-4 space-x-8">
          <PiFlowerLotusLight className="mt-3 text-white text-8xl" />
          <PiFlowerLotusLight className="mt-3 text-white text-8xl" />
          <PiFlowerLotusLight className="mt-3 text-white text-8xl" />
        </div>
        <h1 className="mt-3 mb-5 font-normal text-center text-white text-8xl font-petemoss">
          CamChelin
        </h1>
      </div>
      <div className="p-6 mr-48 bg-white rounded-lg shadow-lg h-[600px] w-[500px]">
        <h1 className="mt-3 mb-5 font-normal text-center text-8xl font-petemoss">
          CamChelin
        </h1>
        <form className="mt-6 space-y-4 ">
          <p className="ml-3 font-bold font-yeonsung">아이디</p>
          <div className="relative">
            <MdOutlinePermIdentity className="absolute mx-3 mt-3 text-2xl" />
            <input
              id="email"
              type="email"
              required
              placeholder="아이디(이메일 주소)"
              className="block w-full px-10 py-3 mt-1 border border-black rounded-md shadow-md font-yeonsung mpt focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <div className="relative mb-7">
              <p className="mb-3 ml-2 font-bold font-yeonsung">비밀번호</p>
              <IoIosLock className="absolute mt-3 ml-3 text-2xl" />
              <input
                id="password"
                type="password"
                required
                placeholder="비밀번호"
                className="block w-full px-10 py-3 mt-1 border border-black rounded-md shadow-md m font-yeonsung focus:border-indigo-500 focus:ring-indigo-500"
              />
              <FaEye className="absolute text-2xl text-black transform cursor-pointer top-12 right-4" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-2xl font-bold text-white border border-white rounded-md shadow-lg font-yeonsung bg-rose-500 bg-buttonPink hover:bg-pink-400 focus:outline focus:ring focus:ring-offset-2 focus:ring-pink-500"
          >
            로그인
          </button>
        </form>
        <div className="flex mt-4 text-center">
          <p className="mr-12 font-bold whitespace-nowrap">
            -------------------------
          </p>
          <p className="text-xl font-bold text-gray-600 font-yeonsung">OR</p>
          <p className="ml-12 font-bold whitespace-nowrap">
            -------------------------
          </p>
        </div>
        <a
          href="/register"
          className="block mt-3 font-bold text-center cursor-pointer font-yeonsung hover:underline"
        >
          비밀번호를 잊으셨나요?
        </a>
        <div className="relative flex mt-5">
          <FaUserGraduate className="ml-3 text-2xl" />
          <a
            href="/register"
            className="absolute block text-xl font-bold text-black left-12 font-yeonsung"
          >
            아직 계정이 없으신가요?
          </a>
          <a
            href="/register"
            className="absolute font-bold right-8 text-rose-400 hover:underline hover:text-rose-600 font-yeonsung"
          >
            지금, 바로 가입해보세요!
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
