import Link from "next/link";
import Image from "next/image";

const TopCate = ({cateList}) => {
    return (
        <section>
            <ul className={`grid ${cateList.length === 8 ? `grid-cols-[1fr_1fr_1fr_1fr]` : `grid-cols-[1fr_1fr_1fr_1fr_1fr]`} gap-[1.2rem] p-[2rem] bg-[linear-gradient(90deg,_#eddbff,_#dfffe8)] border-t border-b border-[#0000000f]`}>
                {cateList.map(({title, img, link}, idx) => (
                    <li key={idx} className="relative flex rounded-[.6rem] bg-[#fff] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100%] after:h-[.8rem] after:bg-[#4b5984] after:opacity-[0.06] pb-[.8rem] shadow-[rgba(0,0,0,0.6)_0_0_0_1px]">
                        <Link href={link} className={`${cateList.length === 8 ? `h-[6rem]` : `flex-col h-[9.6rem]`} flex justify-center items-center gap-[1.6rem] w-[100%]`}>
                            <Image src={`/img/category/${img.src}`} alt={title} width={img.width} height={img.height} />
                            <p className="w-[6.5rem] font-bold text-center text-[1.8rem] leading-[1]">{title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default TopCate;