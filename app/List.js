'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useCateStore from '@/store/useCateStore';

const List = ({bgColors}) => {
    const [items, setItems] = useState([]);
    const [activeNav, setActiveNav] = useState(0);
    const cate = useCateStore((state) => state.cate);
    const navData = [
        {title: '맞춤추천', link: ''},
        {title: '신규', link: ''},
        {title: '급상승', link: ''},
        {title: '상담중', link: ''},
    ]
    // const activeNavArr = Array.from(navData).map((_, idx) => `after:left-[${idx/navData.length*100}%]`);
    // ${activeNav/navData.length*100}%
    // console.log(navData.length, activeNavArr);
    const activeNavArr = ['after:left-[2rem]', 'after:left-[calc(1rem+25%)]', 'after:left-[50%]', 'after:left-[calc(75%-1rem)]']
    const getListRender = async (cate) => {
        try {
            let reqData = {
                offset: 0,
                limit: 10,
                cate: 'call',
                order: 'cematch',
            }
            const greenData = {
                isGreen: 'Y', 
                page_pg_type: cate
            }
            if(cate === 'green') reqData = {...reqData, ...greenData};

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

    useEffect(() => {
        getListRender(cate);
    }, [cate]);
    return (
        <div>
            <ul className={`relative flex items-center pt-[.8rem] px-[2rem] border-b border-[#e9e9e9] before:content-[""] before:w-[100%] before:h-[.8rem] before:bg-[#f5f5f5] before:border-t before:border-b before:border-[#e9e9e9] before:absolute before:top-0 before:left-0 before:z-[1] after:content-[""] after:absolute ${activeNavArr[activeNav]} after:bottom-0 after:w-[calc((100%-4rem)/4)] after:h-[.3rem] after:translate-y-[50%] after:bg-[#6335b4] after:rounded-[0.15rem] after:transition-all after:duration-300 after:ease-in-out`}>
                {navData.map(({title, link}, idx) => (
                    <li key={idx} className='flex-[1]'>
                        <button className={`${activeNav === idx ? `font-bold text-[#6335b4]` : `font-[500]`} text-[1.8rem] w-[100%] h-[6rem] transition-all duration-300 ease-in`} onClick={() => setActiveNav(idx)}>{title}</button>
                    </li>
                ))}
            </ul>
            <ul className='flex flex-col gap-[.6rem] bg-[#f5f5f5]'>
                {items.map((elm, idx) => {
                    const {it_code, it_main_pic, it_category_name, it_category_code, it_nick, it_060_code, it_connect_number, it_style_key, it_counsel_key, it_coin_price, view_win_comment, view_win_point, it_new, ed_cnt_no, ce_level} = elm;
                    return (
                        <li key={idx} className='p-[2.4rem_2rem_0] bg-[#fff] border-t-1 border-b-1 border-[#e9e9e9] first:border-t-0 last:border-b-0'>
                            <Link href={`/${it_code}`} className='flex gap-[2rem] h-[10.8rem]'>
                                <div style={{backgroundImage: `url(/img/list/bg_${it_category_code}.${it_category_code === 'fortune' ? 'png' : 'jpg'})`}} className="relative bg-no-repeat bg-center bg-cover rounded-[.6rem] overflow-hidden">
                                    <span className={`absolute top-[.6rem] left-[.6rem] flex items-center justify-center w-[3.4rem] p-[.6rem_.5rem_.5rem_.6rem] rounded-[.4rem] text-[1.2rem] font-bold text-[#fff] ${bgColors[it_category_code]} leading-[1.18]`}>전화{it_category_name}</span>
                                    <Image src={it_main_pic} alt="" width={158} height={108} />
                                </div>
                                <div className='flex justify-between flex-1 border-b border-solid border-[#e9e9e9]'>
                                    <ul className='flex flex-col gap-[.2rem]'>
                                        <li className='flex items-center'>
                                            <p className='text-[2rem] font-bold'>{it_nick}</p><p>「<span className='font-bold'>{it_060_code}번</span>」</p>
                                        </li>
                                        <li className='flex items-center gap-[.8rem] text-[#999]'>
                                            <p>#{it_style_key}</p><p>#{it_counsel_key}</p>
                                        </li>
                                        <li className='flex items-center gap-[.6rem] mt-[1rem]'>
                                            <Image src="/img/list/i-list-won.svg" alt="" width={18} height={18} />
                                            <p className='font-bold'>{it_coin_price.toLocaleString('ko-KR')}</p>
                                            <span className='text-[1.4rem] text-[#666]'>(30초)</span>
                                        </li>
                                    </ul>
                                    <div className='flex items-center justify-center gap-[.8rem] w-[18rem] h-[6rem] rounded-[.4rem] bg-[var(--primary-1)] text-[#fff] text-[1.8rem] font-bold mt-[1.4rem]'>
                                        <Image src='/img/list/i-list-call.png' alt='전화 상담' width={18} height={18} />
                                        <p>전화 상담</p>
                                    </div>
                                </div>
                            </Link>
                            <button className='flex items-center justify-between w-[100%] py-[1.4rem]'>
                                <div className='flex items-center gap-[.8rem]'>
                                    {ce_level !== 0 && ce_level !== 7 ? 
                                    <div className='flex items-center gap-[.6rem]'>
                                        <Image src='/img/list/i-partner-purple.svg' alt='' width={18} height={18} />
                                        <p className='text-[1.4rem] font-bold leading-[1]'>파트너</p>
                                    </div>
                                    : ``}
                                    {it_new === 'Y' ?
                                    <div className='flex items-center gap-[.6rem]'>
                                        <Image src='/img/list/i-new-pu.svg' alt='' width={18} height={18} />
                                        <p className='text-[1.4rem] font-bold leading-[1]'>신규</p>
                                    </div>
                                    : ``}
                                    {ed_cnt_no ?
                                    <span className='flex items-center h-[2.4rem] text-[1.2rem] font-[500] border-1 border-[#dcdcdc] bg-[#f8f8f8] px-[.6rem] rounded-[.3rem]'>교육이수</span>
                                    : ``}
                                </div>
                                <div className='flex items-center gap-[1.2rem]'>
                                    <div className='text-[1.4rem] text-[#666]'>최근 3개월</div>
                                    <div className='flex items-center gap-[.4rem] text-[1.4rem]'>
                                        <Image src='/img/list/i-list-review.svg' alt='' width={14} height={14} className='mr-[.2rem]' />
                                        <p className='font-bold'>후기</p>
                                        <span className='text-[#666]'>({view_win_comment})</span>
                                    </div>
                                    <div className='flex items-center gap-[.4rem] text-[1.4rem]'>
                                        <Image src='/img/list/i-list-star.svg' alt='' width={14} height={14} />
                                        <p className='font-bold'>5</p>
                                        <span className='text-[#666]'>({view_win_point})</span>
                                    </div>
                                    <i className='flex items-center justify-center w-[1.2rem] h-[1.2rem] rotate-180'><Image src='/img/list/i-arrow-top.png' alt='' width={12} height={7} /></i>
                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;