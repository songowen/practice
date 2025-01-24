import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import CardList from '../components/search-rooms/CardList';
import Sidebar from '../components/search-rooms/SideBar';

const SearchRooms = () => {
  const cards = [
    {
      status: "진행중",
      title: "유럽 여행 동행 모집",
      people: 5,
      date: "2025-02-15",
      theme: "관광+휴양,식도락",
      country:'유럽',
    },
    {
      status: "예약중",
      title: "제주도 힐링 여행",
      people: 3,
      date: "2025-03-10",
      theme: "현지문화체험,기차여행",
      country:'대한민국',

    },
    {
      status: "여행확정",
      title: "일본 벚꽃 투어",
      people: 10,
      date: "2025-04-01",
      theme: "골프,SNS핫플",
      country:'일본',

    },
    {
      status: "제안중",
      title: "동남아 배낭 여행",
      people: 7,
      date: "2025-05-20",
      theme: "럭셔리",
      country:'동남아',

    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-100 p-4">
          <Sidebar />
        </aside>
        
        {/* Card List */}
        <main className="w-3/4 bg-white p-4">
          <CardList cards={cards} />
        </main>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchRooms;
