import { MdAttachEmail } from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { MdLock } from "react-icons/md";
import { MdLockPerson } from "react-icons/md";
import { TbUser } from "react-icons/tb";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("회원가입 데이터:", data);
    alert("회원가입 성공!");
  };

  const password = watch("password"); // 비밀번호 값 참조

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
      <FaArrowLeft
        onClick={() => navigate("/")}
        className="absolute text-4xl text-white duration-300 cursor-pointer left-8 top-8"
      />
      {/* 왼쪽 섹션 */}
      <div className="flex flex-col items-start w-1/2 px-8">
        <h1 className="ml-32 font-normal text-white text-9xl font-petemoss">
          CamChelin
        </h1>
        <div className="mt-8 ml-12 space-y-12">
          {/* 캠슐랭 소개 섹션 */}
          <div>
            <div className="flex space-x-3">
              <PiFlowerLotus className="text-white text-7xl " />
              <p className="mt-4 ml-3 text-5xl font-bold text-white font-yeonsung">
                캠슐랭 1스타
              </p>
            </div>
            <p className="mt-3 ml-16 text-4xl text-white font-yeonsung">
              가성비와 맛을 모두 잡은 실속 맛집
            </p>
          </div>

          <div>
            <div className="flex space-x-3">
              <PiFlowerLotus className="text-white text-7xl " />
              <PiFlowerLotus className="text-white text-7xl " />
              <p className="mt-4 text-5xl font-bold text-white ml-7 font-yeonsung">
                캠슐랭 2스타
              </p>
            </div>
            <p className="mt-3 text-4xl text-white ml-14 font-yeonsung">
              맛뿐만 아니라 분위기까지 특별한 곳
            </p>
          </div>

          <div>
            <div className="flex space-x-3">
              <PiFlowerLotus className="text-white text-7xl " />
              <PiFlowerLotus className="text-white text-7xl " />
              <PiFlowerLotus className="text-white text-7xl " />
              <p className="mt-4 text-5xl font-bold text-white ml-7 font-yeonsung">
                캠슐랭 3스타
              </p>
            </div>
            <p className="mt-3 text-4xl text-white ml-14 font-yeonsung">
              여기를 가기 위해선 먼 길도 마다하지 않을
            </p>
            <p className="mt-3 text-4xl text-white ml-14 font-yeonsung">
              가치 있는 레전드 맛집!
            </p>
          </div>
        </div>
      </div>

      {/* 오른쪽 섹션 */}
      <div className="w-[550px] h-[650px] px-12 py-8 mr-32 bg-white rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold text-center font-yeonsung">
          회원가입
        </h2>
        <form
          className="mt-5 space-y-6"
          onSubmit={handleSubmit(onSubmit)} // 유효성 검증 및 데이터 제출
        >
          {/* 이메일 입력 */}
          <div>
            <p className="block mb-2 text-lg font-bold text-gray-700 font-yeonsung">
              아이디(이메일 주소)
            </p>
            <div className="relative">
              <MdAttachEmail className="absolute text-2xl text-gray-500 bottom-3 left-3" />
              <input
                type="email"
                id="email"
                placeholder="이메일 주소를 입력해주세요."
                className="w-full px-12 py-3 border border-black rounded-lg font-yeonsung"
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
              <p className="mt-2 text-sm font-bold text-red-500 font-yeonsung">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div className="relative">
            <p className="block mb-2 text-lg font-bold text-gray-700 font-yeonsung">
              비밀번호
            </p>
            <MdLock className="absolute text-2xl text-gray-500 left-3 bottom-3" />
            <input
              type="password"
              id="password"
              placeholder="숫자 및 특수문자를 포함하여 8자 이상 작성해주세요."
              className="w-full px-12 py-3 border border-black rounded-lg font-yeonsung"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자 이상이어야 합니다.",
                },
                validate: {
                  hasNumber: (value) =>
                    /\d/.test(value) || "비밀번호에 숫자가 포함되어야 합니다.",
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                    "특수문자를 포함해야 합니다.",
                },
              })}
            />
            {errors.password && (
              <p className="mt-2 text-sm font-bold text-red-500 font-yeonsung">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div className="relative">
            <p className="block mb-2 text-lg font-bold text-gray-700 font-yeonsung">
              비밀번호 확인
            </p>
            <MdLockPerson className="absolute text-2xl text-gray-500 left-3 bottom-3" />
            <input
              type="password"
              id="passwordConfirm"
              placeholder="입력한 비밀번호를 다시 한 번 입력해주세요."
              className="w-full px-12 py-3 border border-black rounded-lg font-yeonsung"
              {...register("passwordConfirm", {
                required: "비밀번호 확인은 필수입니다.",
                validate: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다.",
              })}
            />
            {errors.passwordConfirm && (
              <p className="mt-2 text-sm font-bold text-red-500 font-yeonsung">
                {errors.passwordConfirm.message}
              </p>
            )}
          </div>

          {/* 닉네임 입력 */}
          <div className="relative">
            <p className="block mb-2 text-lg font-bold text-gray-700 font-yeonsung">
              닉네임
            </p>
            <TbUser className="absolute text-2xl text-gray-500 left-3 bottom-3" />
            <input
              type="text"
              id="nickname"
              placeholder="커뮤니티에서 활동할 닉네임을 적어주세요."
              className="w-full px-12 py-3 border border-black rounded-lg font-yeonsung"
              {...register("nickname", {
                required: "닉네임은 필수 입력입니다.",
                minLength: {
                  value: 2,
                  message: "닉네임은 최소 2자 이상이어야 합니다.",
                },
              })}
            />
            {errors.nickname && (
              <p className="mt-2 text-sm font-bold text-red-500 font-yeonsung">
                {errors.nickname.message}
              </p>
            )}
          </div>

          {/* 가입 버튼 */}
          <div className="relative">
            <MdOutlineRestaurant className="absolute text-3xl text-white top-7 left-24" />
            <button
              type="submit"
              className="w-full py-3 pl-4 mt-4 text-xl font-bold text-white bg-red-700 rounded-lg font-yeonsung hover:bg-red-600"
            >
              가입하여 나만의 맛집 찾기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
