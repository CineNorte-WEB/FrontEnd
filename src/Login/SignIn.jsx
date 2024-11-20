import { FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";

const PasswordRecovery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("전달된 데이터:", data);
    alert("😎 이메일 전송 완료!");
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-rose-800">
      <FaArrowLeft className="absolute text-4xl text-white left-8 top-8" />
      <div className="p-8 bg-white rounded-lg shadow-md h-[550px] w-[500px]">
        <h1 className="mt-6 mb-6 text-5xl font-bold text-center font-yeonsung">
          비밀번호 찾기
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mt-12 text-xl font-bold text-gray-700 font-yeonsung"
            >
              이메일
            </label>
            <div className="relative flex mt-4">
              <MdEmail className="absolute text-2xl left-3 top-3 " />
              <input
                type="email"
                id="email"
                placeholder="이메일 주소를 입력해주세요."
                className="w-full px-10 py-3 border border-black rounded-lg shadow-md font-yeonsung focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                {...register("Email", {
                  required: "이메일을 입력해주세요!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "유효한 이메일 주소를 입력해주세요.",
                  },
                })}
              />
              <p className="block mt-3 font-bold font-yeonsung">
                {errors.Email && errors.Email.message}
              </p>
            </div>
          </div>
          <div className="relative flex">
            <FaPaperPlane className="absolute text-2xl text-white left-28 top-7" />
            <button
              type="submit"
              className="w-full px-4 py-3 mt-4 text-xl font-bold text-white duration-300 rounded-lg shadow-md shawdow-lg bg-rose-700 font-yeonsung hover:bg-red-500"
            >
              로그인 링크 보내기
            </button>
          </div>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 font-bold text-gray-600 font-yeonsung">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <p className="text-2xl text-center text-black font-yeonsung">
          새로운 계정 만들기
        </p>
        <div className="relative flex">
          <ImExit className="absolute text-2xl font-bold text-white top-10 left-24" />
          <button
            type="button"
            className="w-full px-4 py-3.5 mt-6 text-xl font-bold text-white transition duration-300 rounded-lg shadow bg-rose-800 font-yeonsung hover:bg-rose-600"
          >
            로그인 화면으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
