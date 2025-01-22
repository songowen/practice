import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 달력 스타일 import

const SearchBar = () => {
  const [startDate, setStartDate] = useState(null); // 출발일
  const [endDate, setEndDate] = useState(null); // 도착일
  const [departureCity, setDepartureCity] = useState(""); // 출발 도시
  const [arrivalCity, setArrivalCity] = useState(""); // 도착 도시
  const [searchType, setSearchType] = useState("findRoom"); // 방 찾기 / 방 만들기

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white bg-opacity-30 p-6 rounded-md shadow-lg w-full max-w-3xl backdrop-blur-md">
        <form className="space-y-6">
          {/* 스위치 및 인디케이터 바 */}
          <div className="relative flex justify-between items-center space-x-6">
            <div
              className={`flex-1 text-center py-2 rounded-md cursor-pointer ${
                searchType === "findRoom" ? "bg-blue-500 text-white" : "text-blue-500"
              }`}
              onClick={() => setSearchType("findRoom")}
            >
              방 찾기
            </div>
            <div
              className={`flex-1 text-center py-2 rounded-md cursor-pointer ${
                searchType === "createGroup" ? "bg-blue-500 text-white" : "text-blue-500"
              }`}
              onClick={() => setSearchType("createGroup")}
            >
              방 만들기
            </div>

            {/* 인디케이터 바 */}
            <div
              className={`absolute h-1 w-1/2 bg-blue-500 transition-all duration-300 ${
                searchType === "findRoom" ? "left-0" : "left-1/2"
              } bottom-0`}
            ></div>
          </div>

          {/* 출발일, 도착일 */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">출발일</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                className="w-full px-4 py-2 border bg-transparent placeholder-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholderText="언제 떠나고 싶으신가요?"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">도착일</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="yyyy/MM/dd"
                className="w-full px-4 py-2 border bg-transparent placeholder-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholderText="도착일을 선택하세요"
              />
            </div>
          </div>

          {/* 출발 도시, 도착 도시 */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">출발 도시</label>
              <input
                type="text"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border placeholder-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="출발 도시를 입력하세요"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">도착 도시</label>
              <input
                type="text"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border placeholder-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="도착 도시를 입력하세요"
              />
            </div>
          </div>

          {/* 검색 버튼 */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-white text-black text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              검색하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;