import PassWord from "./Login/PassWord";
import SignUp from "./Login/SignUp";
import SignIn from "./Login/SignIn";
import NotFound from "./components/NotFound";
import Common from "./components/Common";
import { Routes, Route } from "react-router-dom";
import Brand from "./components/Brand";
const App = () => {
  return (
    <>
      <Brand />
      <Common />
      {/* <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/password" element={<PassWord />} />
        {/* 위 3개의 페이지가 아닐 시에 *로 표시된 페이지가 렌더링됨 */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
    </>
  );
};
export default App;
