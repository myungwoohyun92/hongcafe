import List from "./List";
import MainCate from "./MainCate";
import MainSlide from "./MainSlide";
export default function Home() {
  const bgColors = {
    fortune: 'bg-[#c21129]',
    saju: 'bg-[#d67a00]',
    tarot: 'bg-[#6335b4]',
  }
  return (
    <main>
      <MainCate />
      <MainSlide bgColors={bgColors} />
      <List bgColors={bgColors} />
    </main>
  );
}
