'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

const ServiceList = () => {
    const [items, setItems] = useState([]);
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
    
    const getListRender = async () => {
        try {
            let reqData = {
                offset: 0,
                limit: 24,
                cate: 'CATE-20240125141526-897',
                gd_genre: 'service',
                order: 'random',
            };
            console.log(reqData);

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

    useEffect(() => {
        getListRender();
    }, [])
    return (
        <div>
            <div className="flex flex-col gap-[1.2rem] p-[2.4rem_0_2rem] m-[2rem] border-b border-[#00000012]">
                <div className="flex justify-between items-center">
                    <p className="text-[2rem] leading-[1.5] font-bold">추천상품</p>
                    <div className="flex items-center">
                        <Link href="">리스트</Link>
                        <Link href="">갤러리</Link>
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
            <ul>

                <li></li>
            </ul>
        </div>
    )
}

export default ServiceList;