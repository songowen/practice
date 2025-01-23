import React from 'react';
import img from '../../assets/package_sample.png';
const DashBoard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-8">
      {/* 여행 이미지 */}
      <img
        src={img}
        alt="Travel"
        className="w-full md:w-1/3 object-cover rounded-lg shadow-md"
      />

      {/* 여행 패키지 정보 */}
      <div className="md:w-1/3 p-4">
        <h2 className="text-2xl font-bold mb-4">여행 패키지 정보</h2>
        <p className="text-gray-700">
          여행 기간, 가격, 포함 사항 등을 이곳에 적어주세요.
        </p>
      </div>

      {/* 방장의 제안 */}
      <div className="md:w-1/3 text-center bg-yellow-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-yellow-800">
          방장의 제안하기를 기다리는 중입니다.
        </h3>
      </div>
    </div>
  );
};

export default DashBoard;