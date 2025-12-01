import { create } from 'zustand';

const useJoinBannerStore = create((set) => ({
  bannerHide: false,
  setBannerHide: (newBanner) => set({ bannerHide: newBanner }),
}));

export default useJoinBannerStore;