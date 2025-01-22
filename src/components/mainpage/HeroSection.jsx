import React from "react";
import background from "../../assets/home_image.png"; // 배경 이미지 경로 설정
import SearchBar from "../common/SearchBar";

const HeroSection = () => {
  return (
    <div
    className="h-[70vh] bg-cover bg-center flex items-center px-20"
          style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* 왼쪽 텍스트 */}
      <div className="w-1/2">
        <h1 className="text-6xl font-bold text-white leading-tight">
          우리끼리<br /> 만드는<br />패키지 여행
        </h1>
      </div>

      {/* 오른쪽 검색바 */}

      <SearchBar/>
      {/* <div className="w-1/2 flex justify-end">
        <div className="bg-white p-4 rounded-md shadow-md w-full max-w-md">
          <form className="flex space-x-2">
            <input
              type="text"
              placeholder="목적지를 입력하세요"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              검색
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;