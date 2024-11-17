import { MdOutlinePermIdentity } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

function SignUp() {
  return (
    <div className="flex items-center justify-end min-h-screen bg-rose-800">
      <div className="p-6 mr-48 bg-white rounded-lg shadow-lg h-[600px] w-[500px]">
        <h1 className="mt-6 mb-6 text-3xl font-bold text-center">CamChelin</h1>
        <form className="mt-24 space-y-6 ">
          <div className="relative">
            <MdOutlinePermIdentity className="absolute mt-3 ml-3" />
            <input
              id="email"
              type="email"
              required
              placeholder="아이디(이메일 주소)"
              className="block w-full px-8 py-2 mt-1 border border-black rounded-md shadow-md mpt focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <div className="relative">
              <IoIosLock className="absolute mt-3 left-3" />
              <input
                id="password"
                type="password"
                required
                placeholder="비밀번호"
                className="block w-full px-8 py-2 mt-1 border border-black rounded-md shadow-md focus:border-indigo-500 focus:ring-indigo-500"
              />
              <FaEye className="absolute cursor-pointer right-4" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white border border-white rounded-md shadow-lg bg-rose-500 bg-buttonPink hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            로그인
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm font-bold text-gray-600">OR</p>
          <a
            href="/register"
            className="text-sm text-indigo-500 hover:underline"
          >
            아직 계정이 없으신가요? 가입해보세요!
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
