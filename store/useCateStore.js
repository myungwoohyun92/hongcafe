import { create } from 'zustand';

const useCateStore = create((set) => ({
  cate: 'purple',
  setCate: (newCate) => set({ cate: newCate }),
}));

// const { cate, setCate } = useCateStore();
// const cate = useCateStore((state) => state.cate);

export default useCateStore;