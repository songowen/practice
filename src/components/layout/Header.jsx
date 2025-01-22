import React from "react";
import logo from "../../assets/logo.png"; // 상대 경로로 로고 불러오기

const Header = () => {
  return (
<header className="h-20 flex justify-between items-center px-6 bg-white">      {/* 왼쪽 로고 */}
      <div >
      <img
  src={logo}
  alt="Logo"
  className="w-32 h-32 ml-10 object-contain"
/>
      </div>

      {/* 오른쪽 메뉴 */}
      <nav className="flex space-x-6 mr-10 ">
        <a href="/about" className="text-gray-600 hover:text-blue-500 transition duration-300">
          서비스 소개
        </a>
        <a href="/signup" className="text-gray-600 hover:text-blue-500 transition duration-300">
          회원가입
        </a>
        <a href="/login" className="text-gray-600 hover:text-blue-500 transition duration-300">
          로그인
        </a>
      </nav>
    </header>
  );
};

export default Header;