import Link from "next/link";
import Image from "next/image";

const MainCate = () => {
    const cateList = [
        {title: '전체', img: {width: 36, height: 30, src: 'category-all.svg'}, link: ''},
        {title: '타로', img: {width: 35, height: 32, src: 'category-tarot.svg'}, link: ''},
        {title: '사주', img: {width: 34, height: 34, src: 'category-iching.svg'}, link: ''},
        {title: '신점', img: {width: 30, height: 30, src: 'category-oracle.svg'}, link: ''},
        {title: '인기', img: {width: 29, height: 31, src: 'category-popularity.svg'}, link: ''},
        {title: '성공사례', img: {width: 34, height: 30, src: 'category-success.svg'}, link: ''},
        {title: '이벤트', img: {width: 29, height: 32, src: 'category-event.svg'}, link: ''},
        {title: '후기', img: {width: 32, height: 33, src: 'category-review.svg'}, link: ''},
    ]
    return (
        <section>
            <ul className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[1.2rem] p-[2rem] bg-[linear-gradient(90deg,_#eddbff,_#dfffe8)] border-t border-b border-[#0000000f]">
                {cateList.map(({title, img, link}, idx) => (
                    <li key={idx} className="relative flex rounded-[.6rem] bg-[#fff] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100%] after:h-[.8rem] after:bg-[#4b5984] after:opacity-[0.06] pb-[.8rem] shadow-[rgba(0,0,0,0.6)_0_0_0_1px]">
                        <Link href={link} className="flex justify-center items-center gap-[1.6rem] w-[100%] h-[6rem]">
                            <Image src={`/img/category/${img.src}`} alt={title} width={img.width} height={img.height} />
                            <p className="w-[6.5rem] font-bold text-center text-[1.8rem] leading-[1]">{title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default MainCate;