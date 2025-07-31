import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";
import Header from "../include/Header";
import Footer from "../include/Footer";
import UploadPage from "../pages/post/UploadPage";

// 메인 페이지
const MainPage = lazy(() => import("../pages/MainPage"));

// 프로필 페이지
const Profile = lazy(() => import("../pages/ProfilePage"));

// 게시글 페이지
const DetailPage = lazy(() => import("../pages/post/DetailPage"));
const ListPage = lazy(() => import("../pages/post/ListPage"));

// 수정 페이지
const Modifypage = lazy(() => import("../pages/post/Modifypage"));

// 로그인 페이지
const LoginPage = lazy(() => import("../pages/LoginPage"));

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Header />
        <MainPage />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/detail/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <Header />
        <DetailPage />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/post/mylist/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <Header />
        <ListPage />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/post/list/:writer",
    element: (
      <Suspense fallback={<Loading />}>
        <Header />
        <ListPage />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<Loading />}>
        <Header />
        <Profile />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/upload",
    element: (
      <Suspense fallback={<Loading />}>
        <Header />
        <UploadPage />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/modify/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <Header />
        <Modifypage />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Header />
        <LoginPage />
        <Footer />
      </Suspense>
    ),
  },
]);
export default root;
