'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const ServiceListItems = ({listRender}) => {
    const [items, setItems] = useState([...listRender.items]);
    const [active, setActive] = useState(0);
    const serviceArr = [
        {title: '부적', link: ''},
        {title: '기도초', link: ''},
        {title: '치성', link: ''},
        {title: '점성술', link: ''},
        {title: '운세아이템', link: ''},
        {title: '작명개명', link: ''},
        {title: '택일', link: ''},
        {title: '풍수지리', link: ''},
    ];

    const tagColorClass = {
        service: 'bg-[#15885d]',
        name: 'bg-[rgba(0, 0, 0, 0.7019607843)]',
        class: 'bg-[#2d71ac]',
    }
    
    const getListRender = async () => {
        try {
            let reqData = {
                offset: 0,
                limit: 24,
                cate: 'CATE-20240125141526-897',
                gd_genre: 'service',
                order: 'random',
            };

            const response = await fetch('/api/service/getServiceListMobile', {
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
    return (
        <div>
            <div className="flex flex-col gap-[1.2rem] p-[2.4rem_0_2rem] mx-[2rem] border-b border-[#00000012]">
                <div className="flex justify-between items-center">
                    <p className="text-[2rem] leading-[1.5] font-bold">추천상품</p>
                    <div className="flex items-center">
                        <Link href=""></Link>
                        <Link href=""></Link>
                    </div>
                </div>
                <ul className="flex items-center gap-[.8rem]">
                    {serviceArr.map(({title, link}, idx) => (
                        <li key={idx}>
                            <Link href={link} className={`${active === idx ? `bg-[#6335b4] border-[#6335b4] font-bold text-[#FFF]` : `bg-[#f8f8f8] border-[#e3e7ed]`} flex items-center justify-center border-[1px] border-solid h-[3.4rem] px-[1.2rem] rounded-[.4rem] transition-all ease-in-out duration-300`} onClick={() => setActive(idx)}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="flex flex-col gap-[.6rem] bg-[#f5f5f5]">
                {items.map(({gd_subject, gd_code, gd_genre, gd_category_name, gd_main_pic, ce_nick, gd_price, view_win_comment, gd_cmt_cnt, view_win_point}, idx) => (
                    <li key={idx} className="flex flex-col gap-[1.2rem] p-[2rem] bg-[#FFF] border-t-1 border-b-1 border-[#e9e9e9] first:border-t-0 last:border-b-0">
                        <Link href={`/service/profile/${gd_code}`} className="flex flex-col gap-[1.6rem]">
                            <h2 className="text-[2rem] mo:text-[2rem] leading-[1.5] font-bold">{gd_subject}</h2>
                            <div className="flex gap-[1.6rem]">
                                <div className="relative flex justify-center items-center w-[15.4rem] h-[9.8rem] rounded-[.6rem] overflow-hidden">
                                    <Image src={gd_main_pic} alt={gd_subject} width={169} height={108} />
                                    <span className={`${tagColorClass[gd_genre]} flex items-center justify-center w-[3rem] h-[3.4rem] p-[.5rem_.6rem_.4rem] rounded-[.2rem] overflow-hidden leading-[1.2rem] absolute top-[.6rem] left-[.6rem] font-bold text-[1rem] text-[#FFF]`}>{gd_category_name}</span>
                                </div>
                                <ul className="flex flex-col gap-[2.1rem] flex-[1]">
                                    <li className="flex flex-col gap-[.4rem]">
                                        <p className="text-[1.8rem]">{ce_nick}</p>
                                        <div className="flex gap-[.6rem] items-center">
                                            <Image src="/img/list/i-list-won.svg" alt="" width={18} height={18} />
                                            <p className="font-bold">{gd_price}</p>
                                        </div>
                                    </li>
                                    <li className="relative before:content-[''] before:absolute before:top-[-1rem] before:w-[100%] before:h-[1px] before:bg-[#e9e9e9] flex gap-[1.6rem]">
                                        <div className="flex items-center gap-[.4rem] text-[1.4rem] leading-[1.5]">
                                            <Image src='/img/list/i-list-review.svg' alt='' width={14} height={14} className='mr-[.2rem]' />
                                            <p className="font-bold">후기</p>
                                            <span className="text-[#666]">({view_win_comment})</span>
                                        </div>
                                        <div className="flex items-center gap-[.4rem] text-[1.4rem] leading-[1.5]">
                                            <Image src='/img/list/i-list-star.svg' alt='' width={14} height={14} className='mr-[.2rem]' />
                                            <p className="font-bold">5</p>
                                            <span className="text-[#666]">({gd_cmt_cnt === 0 ? `0` : view_win_point})</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServiceListItems;