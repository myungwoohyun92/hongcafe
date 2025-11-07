'use client';
import useCateStore from "@/store/useCateStore";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const HeaderSearch = () => {
    const {cate, setCate} = useCateStore();
    const cateData = [
        {title: '퍼플', attr: 'purple'},
        {title: '그린', attr: 'green'},
    ];
    const cateClickhandler = e => {
        setCate(e);
    }
    return (
        <div className="relative flex items-center justify-between h-[6.4rem] px-[2rem] bg-[#f5f5f5]">
            <Link href="/">
                <Image src="/img/header/logo-full.svg" width={146} height={36} alt="홍카페 로고" />
            </Link>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[.4rem] bg-[#fff] rounded-[20px] border-1 border-[#d9d5e2]">
                <ul className={`relative flex items-center before:content-[''] before:absolute before:w-[6rem] before:h-[3.2rem] before:top-0 ${cate === 'purple' ? 'before:left-0 before:bg-[var(--primary-1)]' : 'before:left-[50%] green-1 before:bg-[var(--green-1)]'} before:rounded-[2.4rem] before:transition-all before:duration-300 before:ease-[cubic-bezier(.17,.67,.85,.69)]`}>
                    {cateData.map(({title, attr}, idx) => (
                        <li className="relative" key={idx}>
                            <button className={`flex items-center justify-center w-[6rem] h-[3.2rem] font-bold transition-all duration-300 ease-[cubic-bezier(.17,.67,.85,.69)] cursor-pointer ${cate === attr ? 'text-[#fff]' : ''}`} onClick={() => cateClickhandler(attr)}>{title}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Link href="">
                <Image src="/img/header/i-search.svg" width={24} height={24} alt="검색" />
            </Link>
        </div>
    )
}

export default HeaderSearch;