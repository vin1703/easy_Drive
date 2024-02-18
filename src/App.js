import React,{useEffect,Suspense} from "react";
import { Routes, Route} from "react-router-dom";
import { useAppContext } from "./Context/Context";

// import Login from "./pages/Authentication/Login";
// import Home from "./pages/Home/Home";
// import Profile from "./pages/Profile/Profile";
// import Test from "./pages/Test/Test";
// import Score from "./pages/Score/Score";
// import Signup from "./pages/Authentication/Signup";
// import Upload from "./pages/Upload/Upload"
// import TestDetails from "./pages/Test/TestDetails";

const Login = React.lazy(() => import("./pages/Authentication/Login"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Test = React.lazy(() => import("./pages/Test/Test"));
const Score = React.lazy(() => import("./pages/Score/Score"));
const Signup = React.lazy(() => import("./pages/Authentication/Signup"));
const Upload = React.lazy(() => import("./pages/Upload/Upload"));
const TestDetails = React.lazy(() => import("./pages/Test/TestDetails"));

function App() {
  const {handleSignUp,handleToken,token,isSign} = useAppContext();
  useEffect(()=>{
    const storeData = JSON.parse(localStorage.getItem('userData'));
    if(storeData && storeData.token){
      handleToken(storeData.token);
      handleSignUp(storeData.user);
      console.log('enter');
    }
  },[])
  if(isSign){
    return (
      <Suspense fallback={ <div>loading</div>}>
      <Routes>
        <Route path="/upload/:id" element={<Upload/>} />
        <Route path="/testinstructions" element={<TestDetails/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/result" element={<Score/>} />
        <Route path="/profile/:uid" element={<Profile/>} />
        {/* <Route
          path="*"
          element={<Navigate to="/profile/:uid" replace />}
        /> */}
      </Routes>
      </Suspense>
      
    )
  }
  else{
    return (
      <Suspense fallback={ <div>loading</div>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/testinstructions" element={<TestDetails/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </Suspense>
    );
  }
  
}

export default App;
