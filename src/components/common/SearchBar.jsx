import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import KoreaAirportSelector from '../../services/airport/KoreaAirportSelector';
import WorldAirportSelector from '../../services/airport/WorldAirportSelector';

const SearchBar = () => {
  const [startDate, setStartDate] = useState(null); // 출발일
  const [endDate, setEndDate] = useState(null); // 도착일
  const [departureAirport, setDepartureAirport] = useState(''); // 출발 공항
  const [arrivalAirport, setArrivalAirport] = useState(''); // 도착 공항
  const [koreaAirports, setKoreaAirports] = useState([]); // 대한민국 공항 목록
  const [worldAirports, setWorldAirports] = useState([]); // 전 세계 공항 목록
  const [searchType, setSearchType] = useState('findRoom'); // 방 찾기 / 방 만들기

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const apiKey = import.meta.env.VITE_APP_AIRPORT_API_KEY;
        const world_response = await fetch(
          `https://api.odcloud.kr/api/3051587/v1/uddi:007305db-cbc2-4554-8988-f9109b2dad10?page=1&perPage=100&serviceKey=${apiKey}`
        );
        
        const kr_response = await fetch(
          `https://api.odcloud.kr/api/3051587/v1/uddi:47338db4-719b-4162-9cc1-f7efd0bad374?page=1&perPage=100&serviceKey=${apiKey}`
        );

        const world_data = await world_response.json();
        const kr_data = await kr_response.json();

        const koreaAirports = kr_data.data
          .filter((airport) => airport['국가명_한글'] === '대한민국' && airport['한글명'].includes('국제'))
          .map((airport) => airport['한글명'])
          .sort();

        const worldAirports = world_data.data
          .map((airport) => airport['한글공항'])
          .sort();

        setKoreaAirports(koreaAirports);
        setWorldAirports(worldAirports);
      } catch (error) {
        console.log('API Key:', process.env.REACT_APP_AIRPORT_API_KEY);

        console.error('공항 데이터 가져오기 실패:', error);
      }
    };

    fetchAirports();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white bg-opacity-30 p-6 rounded-md shadow-lg w-full max-w-3xl backdrop-blur-md">
        <form className="space-y-6">
          <div className="relative flex justify-between items-center space-x-2">
            <div
              className={`flex-1 text-center py-2 rounded-md cursor-pointer ${
                searchType === 'findRoom' ? 'text-white' : 'text-gray-300'
              }`}
              onClick={() => setSearchType('findRoom')}
            >
              방 찾기
            </div>
            <div
              className={`flex-1 text-center py-2 rounded-md cursor-pointer ${
                searchType === 'createGroup' ? 'text-white' : 'text-gray-300'
              }`}
              onClick={() => setSearchType('createGroup')}
            >
              방 만들기
            </div>
            <div
              className={`absolute h-1 w-1/4 bg-dark-green transition-all duration-300 ${
                searchType === 'findRoom' ? 'left-[12.5%]' : 'left-[62.5%]'
              } bottom-0`}
            ></div>
          </div>

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

          <div className="flex space-x-4">
            <KoreaAirportSelector
              koreaAirports={koreaAirports}
              selectedAirport={departureAirport}
              onChange={(e) => setDepartureAirport(e.target.value)}
            />
          </div>

          <div className="flex space-x-4">
            <WorldAirportSelector
              worldAirports={worldAirports}
              selectedAirport={arrivalAirport}
              onChange={(e) => setArrivalAirport(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full font-bold bg-white text-dark-green px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300 hover:text-white"
            >
              {searchType === 'findRoom' ? '검색하기' : '방 만들기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
