'use client'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import useCateStore from "@/store/useCateStore";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import { bgColors, cateText } from "@/lib/constants";

const MainSlideItems = ({data, pageCate}) => {
    const [isMount, setIsMount] = useState(false);
    const [items, setItems] = useState([...data.items]);
    const isFirstRender = useRef(true);
    const cate = useCateStore((state) => state.cate);
    const themeBanner = [
        {title: 'VIP 고객들이 선택하는 인기 상담사', link: '/themebanner/theme/popular'},
        {title: '많은 분이 다시 찾는 상담사', link: '/themebanner/theme/revisiting'},
        {title: '재회를 위한 조언, 이 상담사 최고에요', link: '/themebanner/theme/reunion'},
        {title: '진솔한 공감과 조언! 대화가 잘 통한 상담사', link: '/themebanner/theme/effective'},
        {title: '나만 알고 싶은 단골 상담사', link: '/themebanner/theme/regular'},
    ];

    useEffect(() => {
        setIsMount(true);
    }, []);

    useEffect(() => {
        const getSlideRender = async (listCate, type) => {
            try {
                let reqData = {
                    offset: 0,
                    limit: 20,
                    cate: pageCate,
                    order: 'suggest',
                }
                const greenData = {
                    isGreen: 'Y', 
                    page_pg_type: listCate ?? cate
                }
                if(listCate === 'green') reqData = {...reqData, ...greenData};
                const response = await fetch('/api/items/getListMobile', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(reqData)
                });
                const data = await response.json();
                data.response === 'success' && setItems(data.items);
            } catch (err) {
            
            } finally {

            }
        }

        if(isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        getSlideRender(cate);
    }, [cate]);

    useEffect(() => {
        return () => {
            isFirstRender.current = true;
        }
    }, []);

    return (
        <section className="py-[2.4rem] px-[2rem] mx-[-2rem] mt-[1.2rem]">
            <div className="flex justify-between items-center px-[2rem] mb-[1.2rem]">
                <p className="font-bold text-[2rem] leading-[1]">홍카페 추천</p>
                <Link href="" className="flex items-center justify-between gap-[.6rem]">
                    <p className="text-[1.4rem]">더보기</p>
                    <Image src="/img/icon/ic-arrow-black-right.svg" alt="홍카페 추천 더보기" width={5} height={9} />
                </Link>
            </div>
            {isMount 
            ? <><Swiper slidesOffsetBefore={20} spaceBetween={12} slidesPerView={4} style={{paddingRight: '2rem'}}>
                {items.map(({ce_code, it_type, it_category_name, it_category_code, it_main_pic, it_nick, it_coin_price, status_type, call_status}, idx) => (
                    <SwiperSlide key={idx}>
                        <Link href={`/profile/${ce_code}`} className="flex flex-col gap-[.5rem]">
                            <div style={{backgroundImage: `url(/img/list/bg_${it_category_code}.${it_category_code === 'fortune' ? 'png' : 'jpg'})`}} className={`${it_type}-${it_category_code} cate-${it_category_code} rounded-[.6rem] overflow-hidden h-[10.7rem] bg-no-repeat bg-cover`}>
                                <span className={`absolute top-[.6rem] left-[.6rem] flex items-center justify-center w-[2.9rem] p-[.6rem_.5rem_.5rem_.6rem] rounded-[.2rem] text-[1rem] font-bold text-[#fff] ${bgColors[it_category_code]} leading-[1.18]`}>{cateText[pageCate]}{it_category_name}</span>
                                <Image src={it_main_pic} alt={it_nick} width={158} height={108} />
                            </div>
                            <p className="mt-[.3rem] text-[1.4rem] font-bold leading-[1]">{it_nick}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-[.2rem] leading-[1]">
                                    <Image src={'/img/list/i-list-won.svg'} alt="원" width={14} height={14} />
                                    <p className="text-[1.3rem] font-bold ml-[.4rem]">{it_coin_price}</p>
                                    <span className="text-[1.1rem] text-[#666]">(30초)</span>
                                </div>
                                <div className={`live-state ${status_type} flex items-center justify-center font-bold text-[1rem] rounded-[.2rem] bg-[#6335b4] px-[.4rem] h-[1.8rem] text-[#fff]`}>{call_status === 'on' ? '상담중' : '상담가능'}</div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            </>
            : <ul className="flex items-center gap-[1.2rem] px-[2rem]">
                {Array.from({length: 4}, (_, idx) => (
                    <li key={idx} className="flex-1">
                        <div className="flex flex-col gap-[.5rem]">
                            <div className="skeleton-ani rounded-[.6rem] overflow-hidden h-[10.7rem] bg-[#f3f3f3]"></div>
                            <p className="skeleton-ani mt-[.3rem] h-[1.4rem] bg-[#f3f3f3]"></p>
                            <div className="skeleton-ani flex justify-between items-center h-[1.8rem] bg-[#f3f3f3]"></div>
                        </div>
                    </li>
                ))}
            </ul>}
            

            <div className="relative flex items-center gap-[1rem] mt-[3.2rem] mx-[auto] w-[calc(100%-4rem)] border-[1px] border-solid border-[#eee] rounded-[2.4rem] bg-[#f6f6f6] px-[.8rem] after:content-[''] after:absolute after:top-[50%] after:right-[2rem] after:w-[.7rem] after:h-[1.2rem] after:bg-[url('/img/icon/ic-arrow-black.svg')] bg-no-repeat after:translate-y-[-50%]">
                <div className="flex items-center justify-center gap-[.6rem] w-[7.2rem] h-[3.4rem] bg-[#fff] rounded-[1.6rem] border-[1px] border-solid border-[#e6e6e6]">
                    <Image src={'/img/icon/i-crown-pp.svg'} alt="" width={14} height={12} />
                    <p className="text-[1.4rem] font-bold leading-[1]">테마</p>
                </div>
                <Swiper direction="vertical" slidesPerView={1} mousewheel={true} autoplay={{delay: 3000, disableOnInteraction: false}} modules={[Autoplay, Mousewheel]} loop={true} loopAdditionalSlides={2} speed={600} style={{ flex: '1', height: '4.5rem', margin: '0' }}>
                {themeBanner.map(({title, link}, idx) => (
                    <SwiperSlide key={idx}>
                        <Link href={link} className="flex items-center h-[100%]">{title}</Link>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    )
}

export default MainSlideItems;