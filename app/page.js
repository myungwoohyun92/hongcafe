import MainList from "./_components/MainList";
import TopCate from "@/_components/TopCate";
import MainSlide from "./_components/MainSlide";

export default function Home() {
  const bgColors = {
    fortune: 'bg-[#c21129]',
    saju: 'bg-[#d67a00]',
    tarot: 'bg-[#6335b4]',
  }
  const cateList = [
    {title: '전체', img: {width: 36, height: 30, src: 'category-all.svg'}, link: ''},
    {title: '타로', img: {width: 35, height: 32, src: 'category-tarot.svg'}, link: ''},
    {title: '사주', img: {width: 34, height: 34, src: 'category-iching.svg'}, link: ''},
    {title: '신점', img: {width: 30, height: 30, src: 'category-oracle.svg'}, link: ''},
    {title: '인기', img: {width: 29, height: 31, src: 'category-popularity.svg'}, link: ''},
    {title: '성공사례', img: {width: 34, height: 30, src: 'category-success.svg'}, link: ''},
    {title: '이벤트', img: {width: 29, height: 32, src: 'category-event.svg'}, link: ''},
    {title: '후기', img: {width: 32, height: 33, src: 'category-review.svg'}, link: ''},
  ];
  return (
    <main>
      <TopCate cateList={cateList} />
      <MainSlide bgColors={bgColors} />
      <MainList bgColors={bgColors} />
    </main>
  );
}
