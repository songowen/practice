/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#4d6f7a', // 메인페이지 인디케이터 색상
      },
      fontFamily: {
        'noto-sans': ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
