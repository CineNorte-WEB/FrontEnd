import { MdOutlinePermIdentity } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { PiFlowerLotusLight } from "react-icons/pi";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const [password, setPassword] = useState(false);
  // useForm 훅 초기화
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 폼 제출 시 실행될 함수
  const onSubmit = (data) => {
    console.log(data);
    alert("😎 로그인 성공!");
  };
  const showPassword = () => {
    setPassword((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-end min-h-screen bg-rose-800">
      <div className="mx-12">
        <p className="text-5xl text-white font-yeonsung">
          신촌과 회기역 주변 대학가의
        </p>
        <p className="text-5xl text-white font-yeonsung">
          숨겨진 맛집을 캠슐랭에서 발견하세요!
        </p>
        <div className="flex mt-12 space-x-4">
          <img src="/images/연대.png" alt="연세대학교" className="w-32 h-32" />
          <img
            src="/images/서강대.png"
            alt="서강대학교"
            className="w-32 h-32"
          />
          <img src="/images/홍대.png" alt="홍익대학교" className="w-32 h-32" />
          <img
            src="/images/이대.png"
            alt="이화여자대학교"
            className="w-32 h-32"
          />
        </div>
        <div className="flex ml-14 space-x-7">
          <img
            src="/images/시립대.png"
            alt="서울시립대학교"
            className="w-32 h-32"
          />
          <img
            src="/images/경희대.png"
            alt="경희대학교"
            className="w-32 h-32"
          />
          <img
            src="/images/외대.png"
            alt="한국외국어대학교"
            className="w-32 h-32"
          />
        </div>
        <div className="flex mt-12 ml-24 space-x-8">
          <PiFlowerLotusLight className="mt-3 text-white text-8xl" />
          <PiFlowerLotusLight className="mt-3 text-white text-8xl" />
          <PiFlowerLotusLight className="mt-3 text-white text-8xl" />
        </div>
        <h1 className="font-normal text-white ml-36 text-8xl font-petemoss">
          CamChelin
        </h1>
      </div>
      <div className="p-6 mr-48 bg-white rounded-lg shadow-lg h-[600px] w-[500px]">
        <h1 className="mt-3 mb-5 font-normal text-center text-8xl font-petemoss">
          CamChelin
        </h1>
        {/* 리액트 훅 폼을 이용하여 제출하는 폼 요소 시작 부분 */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* 아이디(이메일 주소)필드 */}
          <p className="ml-3 font-bold font-yeonsung">아이디</p>
          <div className="relative">
            <MdOutlinePermIdentity className="absolute mx-3 mt-3 text-2xl" />
            <input
              id="email"
              type="email"
              {...register("name", {
                required: "올바른 이메일 주소를 입력하세요.",
                pattern: {
                  value: /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    "올바르지 않은 이메일 주소입니다. 다시 입력해주세요!",
                },
              })}
              placeholder="아이디(이메일 주소)"
              className="block w-full px-10 py-3 mt-1 border border-black rounded-md shadow-md font-yeonsung mpt focus:border-indigo-500 focus:ring-indigo-500"
            />
            {/* 에러 메시지 출력 */}
            {errors.name && <p>{errors.email.message}</p>}
          </div>
          <div>
            <div className="relative mb-7">
              <p className="mb-3 ml-2 font-bold font-yeonsung">비밀번호</p>
              <IoIosLock className="absolute mt-3 ml-3 text-2xl" />
              {/* 리액트 훅 폼을 이용한 비밀번호 유효성 검증 부분 */}
              <input
                id="password"
                type={password ? "text" : "password"}
                {...register("password", {
                  required: "비밀번호를 입력해주세요!",
                  minLength: {
                    value: 8,
                    message: "비밀번호는 최소 8자리 이상이어야 합니다.",
                  },
                  validate: {
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "영어 대문자는 반드시 1개 이상의 문자로 포함되어야 합니다!",
                    hasNumber: (value) =>
                      /[0-9]/.test(value) ||
                      "숫자는 반드시 1개 이상 포함되어야 합니다!",
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*]/.test(value) ||
                      "특수기호는 반드시 1개 이상의 문자로 포함되어야 합니다!",
                  },
                })}
                placeholder="비밀번호"
                className="block w-full px-10 py-3 mt-1 border border-black rounded-md shadow-md m font-yeonsung focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.password && (
                <p className="mt-2 font-bold text-red-500 font-yeonsung">
                  {errors.password.message}
                </p>
              )}

              {password ? (
                <IoMdEyeOff
                  onClick={showPassword}
                  className="absolute text-2xl text-black transform cursor-pointer top-12 right-4"
                />
              ) : (
                <FaEye
                  onClick={showPassword}
                  className="absolute text-2xl text-black transform cursor-pointer top-12 right-4"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-2xl font-bold text-white border border-white rounded-md shadow-lg font-yeonsung bg-rose-500 hover:bg-pink-400 focus:outline focus:ring focus:ring-offset-2 focus:ring-pink-500"
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
          <p className="absolute block text-xl font-bold text-black left-12 font-yeonsung">
            아직 계정이 없으신가요?
          </p>
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
