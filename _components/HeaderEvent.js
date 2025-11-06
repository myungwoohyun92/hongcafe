'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const HeaderEvent = () => {
    const [headerEvent, setHeaderEvent] = useState(true);
    const eventClickHandler = e => {
        e.stopPropagation();
        setHeaderEvent(false);
    }

    return (
        <Link href={''} className={`relative flex items-center justify-center gap-[.8rem] h-[6.5rem] bg-[url('/img/bg/top-banner.png')] bg-no-repeat bg-center bg-cover font-bold text-[#4e008e] ${headerEvent ? 'flex' : 'hidden'}`}>
            <p>회원가입 시 10,000코인 선물!</p>
            <div className="flex items-center gap-[.7rem] rounded-[1.5rem] h-[2.8rem]  px-[1.2rem] font-bold text-[#fff] text-[1.4rem] bg-[var(--primary-1)] leading-1">
                <p className="mb-[-.2rem]">3초 회원가입</p>
                <Image src={'/img/header/i-arrow-right-w.png'} width={7} height={12} alt="닫기" />
            </div>
            <button className="absolute right-[2rem] top-[50%] translate-y-[-50%]" onClick={() => eventClickHandler(event)}>
                <Image src={'/img/header/i-close.png'} width={14} height={14} alt={''} />
            </button>
        </Link>
    )
}

export default HeaderEvent;