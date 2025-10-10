import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    <div className="max-w-[72rem] w-[100%] min-h-[100dvh] mx-[auto] border-r border-l border-solid border-[#eee]">
      <Header />
      <main className="">
        <MainCate />
        <MainSlide bgColors={bgColors} />
        <List bgColors={bgColors} />
      </main>
      <Footer />
    </div>
  );
}
