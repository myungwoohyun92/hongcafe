'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import useCateStore from "@/store/useCateStore";
import useJoinBannerStore from "@/store/useJoinBannerStore";
import { setCookie } from "@/lib/cookies";

const HeaderEvent = ({joinBannerState}) => {
    const [bannerState, setBannerState] = useState(joinBannerState);
    const cate = useCateStore((state) => state.cate);
    const { setBannerHide } = useJoinBannerStore();
    const eventClickHandler = async (e) => {
        e.stopPropagation();
        await setCookie('joinBannerHide', true);
        setBannerHide(true);
        setBannerState(true);
    }

    useEffect(() => {
        setBannerHide(joinBannerState);
    }, [joinBannerState]);

    return (
        <Link href={''} className={`relative ${!bannerState ? `flex` : 'hidden'} items-center justify-center gap-[.8rem] h-[6.5rem] bg-[url('/img/bg/top-banner.png')] bg-no-repeat bg-center bg-cover font-bold text-[#4e008e]`}>
            <p>회원가입 시 10,000코인 선물!</p>
            <div className="flex items-center gap-[.7rem] rounded-[1.5rem] h-[2.8rem]  px-[1.2rem] font-bold text-[#fff] text-[1.4rem] leading-1" style={{background: `var(--${cate}-1)`}}>
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