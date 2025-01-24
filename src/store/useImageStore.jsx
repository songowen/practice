// import create from 'zustand';

// const useImageStore = create((set) => ({
//   imageUrls: {}, // To store multiple country images
//   fetchImage: async (apiKey, country) => {
//     if (useImageStore.getState().imageUrls[country]) return; // If image is already fetched for this country

//     const response = await fetch(`https://api.unsplash.com/photos/random?query=${country}&client_id=${apiKey}`);
//     const data = await response.json();
//     set((state) => ({
//       imageUrls: { ...state.imageUrls, [country]: data?.[0]?.urls?.regular }
//     }));
//   }
// }));

// export default useImageStore;
