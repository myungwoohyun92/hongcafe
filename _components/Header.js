'use client';
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import HeaderEvent from "./HeaderEvent";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
    const [activeNav, setActiveNav] = useState(0);
    const tabRefs = useRef([]);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const activeNavArr = ['after:left-[2rem]', 'after:left-[calc(1rem+25%)]', 'after:left-[50%]', 'after:left-[calc(75%-1rem)]'];

    useEffect(() => {
        if (tabRefs.current[activeNav]) {
            const activeTab = tabRefs.current[activeNav];
            const { offsetLeft, offsetWidth } = activeTab;
            
            setIndicatorStyle({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`
            });
        }
    }, [activeNav]);
    
    const headerData = [
        {title: '전화상담', link: '/'},
        {title: '채팅상담', link: ''},
        {title: '클래스', link: ''},
        {title: '콘텐츠', link: ''},
        {title: '홍카페 홍대점', link: ''},
        {title: '대면상담', link: ''},
        {title: '서비스상품', link: '/service'},
    ];
    return (
        <header className="border-b border-solid border-[#e9e9e9]">
            <HeaderEvent />
            <HeaderSearch />
            <nav>
                <ul className={`relative flex items-center h-[6rem] font-[500] text-[1.8rem] px-[1.6rem] after:content-[""] after:absolute after:bottom-0 after:h-[.3rem] after:translate-y-[50%] after:bg-[#6335b4] after:rounded-[0.15rem] after:transition-all after:duration-300 after:ease-in-out`} style={{indicatorStyle}}>
                    {headerData && 
                    headerData.map(({title, link}, idx) => (
                        <li key={idx} className="flex h-[100%]">
                            <Link href={link} ref={e => tabRefs.current[idx] = e} className={`${activeNav === idx ? `font-bold text-[#6335b4]` : `font-[500]`} flex items-center h-[100%] px-[1.5rem]`} onClick={() => setActiveNav(idx)}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;