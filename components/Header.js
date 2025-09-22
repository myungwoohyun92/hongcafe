import Link from "next/link";
import HeaderEvent from "./HeaderEvent";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
    const headerData = [
        {title: '전화상담', link: ''},
        {title: '채팅상담', link: ''},
        {title: '클래스', link: ''},
        {title: '콘텐츠', link: ''},
        {title: '홍카페 홍대점', link: ''},
        {title: '대면상담', link: ''},
        {title: '서비스상품', link: ''},
    ];
    return (
        <header className="border-b border-solid border-[#e9e9e9]">
            <HeaderEvent />
            <HeaderSearch />
            <nav>
                <ul className="flex items-center h-[6rem] font-[500] text-[1.8rem] px-[1.6rem]">
                    {headerData && 
                    headerData.map(({title, link}, idx) => (
                        <li key={idx} className="flex h-[100%]">
                            <Link href={link} className="flex items-center h-[100%] px-[1.5rem]">{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;