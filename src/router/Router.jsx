import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import SignUp from "../pages/signUp/SignUp"
import Posts from "../pages/posts/Posts"
import Comments from "../pages/comments/Comments"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="posts" element={<Posts />} />
                <Route path="comments" element={<Comments />} />
            </Routes>
        </BrowserRouter>
    )
}