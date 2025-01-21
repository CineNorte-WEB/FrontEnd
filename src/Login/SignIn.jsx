import axios from "axios";
import { MdAttachEmail, MdLock, MdLockPerson } from "react-icons/md";
import { TbUser } from "react-icons/tb";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const [keyVisible, setKeyVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();

  // 비밀번호 보기 토글
  const toggleKeyVisibility = () => setKeyVisible((prev) => !prev);
  const toggleConfirmVisibility = () => setConfirmVisible((prev) => !prev);

  // 회원가입 요청 함수
  const onSubmit = async (data) => {
    const requestData = {
      email: data.email,
      password: data.password,
      nickname: data.nickname,
    };

    try {
      const response = await axios.post("/api/users/register", requestData);
      console.log("회원가입 성공:", response.data);
      alert("🎉 회원가입이 성공적으로 완료되었습니다!");
      navigate("/"); // 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert("❌ 회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden bg-rose-800">
      {/* 뒤로가기 버튼 */}
      <FaArrowLeft
        onClick={() => navigate("/")}
        className="absolute text-4xl text-white cursor-pointer left-8 top-7 hover:text-gray-300"
      />

      {/* 왼쪽 설명 섹션 */}
      <div className="flex flex-col items-start w-1/2 px-8">
        <p className="mt-2 ml-32 text-white text-9xl font-petemoss">
          CamChelin
        </p>
        <div className="ml-12 space-y-4 ">
          <div className="flex mt-6 space-x-4">
            <img
              src="/images/연대.png"
              alt="연세대학교"
              className="w-32 h-32"
            />
            <img
              src="/images/서강대.png"
              alt="서강대학교"
              className="w-32 h-32"
            />
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
          <div className="flex ml-16 space-x-6">
            <img
              src="/images/flower.png"
              alt="스타"
              className="w-[100px] h-[100px]"
            />
            <img
              src="/images/flower.png"
              alt="스타"
              className="w-[100px] h-[100px]"
            />
            <img
              src="/images/flower.png"
              alt="스타"
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="ml-4 space-y-3">
            <p className="text-4xl font-bold text-white font-yeonsung">
              신촌과 회기역 주변 대학가의
            </p>
            <p className="text-4xl font-bold text-white font-yeonsung">
              숨겨진 맛집을 캠슐랭에서 발견하세요!
            </p>
          </div>
        </div>
      </div>

      {/* 회원가입 폼 */}
      <div className="w-[550px] h-[650px] px-12 py-8 mr-32 bg-white rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold text-center font-nanum">회원가입</h2>
        <form className="mt-5 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* 이메일 입력 */}
          <div>
            <p className="mb-2 text-lg font-bold text-gray-700 font-nanum">
              아이디(이메일 주소)
            </p>
            <div className="relative">
              <MdAttachEmail className="absolute text-2xl text-gray-500 left-3 bottom-3" />
              <input
                type="email"
                placeholder="이메일 주소를 입력해주세요."
                className="w-full px-8 py-3 border border-black rounded-lg font-nanum"
                {...register("email", {
                  required: "이메일은 필수 입력입니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "올바른 이메일 형식을 입력해주세요.",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm font-bold text-red-500 font-nanum">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div className="relative">
            <p className="mb-2 text-lg font-bold text-gray-700 font-nanum">
              비밀번호
            </p>
            <MdLock className="absolute text-3xl text-gray-500 left-3 bottom-4" />
            <input
              type={keyVisible ? "text" : "password"}
              placeholder="숫자 및 특수문자를 포함하여 8자 이상 작성해주세요."
              className="w-full px-8 py-3 border border-black rounded-lg font-nanum"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자 이상이어야 합니다.",
                },
              })}
            />
            {keyVisible ? (
              <FaEyeSlash
                onClick={toggleKeyVisibility}
                className="absolute text-2xl text-black cursor-pointer bottom-3 right-3"
              />
            ) : (
              <FaEye
                onClick={toggleKeyVisibility}
                className="absolute text-2xl text-black cursor-pointer bottom-3 right-3"
              />
            )}
          </div>
          {errors.password && (
            <p className="text-sm font-bold text-red-500 font-nanum">
              {errors.password.message}
            </p>
          )}

          {/* 비밀번호 확인 */}
          <div className="relative">
            <p className="mb-2 text-lg font-bold text-gray-700 font-nanum">
              비밀번호 확인
            </p>
            <MdLockPerson className="absolute text-2xl text-gray-500 left-3 bottom-4" />
            <input
              type={confirmVisible ? "text" : "password"}
              placeholder="입력한 비밀번호를 다시 한 번 입력해주세요."
              className="w-full px-8 py-3 border border-black rounded-lg font-nanum"
              {...register("passwordConfirm", {
                required: "비밀번호 확인은 필수입니다.",
                validate: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다.",
              })}
            />
            {confirmVisible ? (
              <FaEyeSlash
                onClick={toggleConfirmVisibility}
                className="absolute text-2xl text-black cursor-pointer bottom-3 right-3"
              />
            ) : (
              <FaEye
                onClick={toggleConfirmVisibility}
                className="absolute text-2xl text-black cursor-pointer bottom-3 right-3"
              />
            )}
          </div>
          {errors.passwordConfirm && (
            <p className="text-sm font-bold text-red-500 font-nanum">
              {errors.passwordConfirm.message}
            </p>
          )}

          {/* 닉네임 입력 */}
          <div className="relative">
            <p className="mb-2 text-lg font-bold text-gray-700 font-nanum">
              닉네임
            </p>
            <TbUser className="absolute text-2xl text-gray-500 left-3 bottom-8" />
            <input
              type="text"
              placeholder="닉네임을 입력해주세요."
              className="w-full px-8 py-3 mb-4 border border-black rounded-lg font-nanum"
              {...register("nickname", {
                required: "닉네임은 필수 입력입니다.",
                minLength: {
                  value: 2,
                  message: "닉네임은 최소 2자 이상이어야 합니다.",
                },
              })}
            />
            {errors.nickname && (
              <p className="text-sm font-bold text-red-500 font-nanum">
                {errors.nickname.message}
              </p>
            )}
          </div>

          {/* 가입 버튼 */}
          <button
            type="submit"
            className="w-full py-3 text-xl font-bold text-white bg-red-700 rounded-lg font-nanum hover:bg-red-600"
          >
            🍴가입하여 나만의 맛집 찾기
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
