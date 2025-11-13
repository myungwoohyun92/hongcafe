'use client';
import {useState, useEffect, useRef, useCallback} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useCateStore from '@/store/useCateStore';
import ListEmpty from '@/_components/ListEmpty';
import { bgColors, cateText } from '@/lib/constants';

const MainListItems = ({data, pageCate}) => {
    const [items, setItems] = useState([...data.items]);
    const [activeNav, setActiveNav] = useState(0);
    const isFirstRender = useRef(true);
    const cate = useCateStore((state) => state.cate);
    const navData = [
        {title: '맞춤추천', type: 'cematch'},
        {title: '신규', type: 'itemNew'},
        {title: '급상승', type: 'recent'},
        {title: '상담중', type: 'calling'},
    ];

    const themeColors = {
        purple: {
            text: 'text-[var(--purple-1)]',
            afterBg: 'after:bg-[var(--purple-1)]',
        },
        green: {
            text: 'text-[var(--green-1)]',
            afterBg: 'after:bg-[var(--green-1)]',
        },
    }
    
    const activeNavArr = ['after:left-[2rem]', 'after:left-[calc(1rem+25%)]', 'after:left-[50%]', 'after:left-[calc(75%-1rem)]'];    

    const navClickHandler = (type, index) => {
        setActiveNav(index);
        getListRender(cate, type);
    }

    const getListRender = useCallback(async (listCate, type) => {
        try {
            let reqData = {
                offset: 0,
                limit: 10,
                cate: pageCate,
                order: type ?? 'cematch',
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
            data.response === 'success' ? setItems(data.items) : setItems([])
        } catch (err) {
        
        } finally {

        }
    }, [cate]);

    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        getListRender(cate)
    }, [cate]);

    useEffect(() => {
        return () => {
            isFirstRender.current = true;
        }
    }, []);
    return (
        <div>
            <ul className={`relative flex items-center pt-[.8rem] px-[2rem] border-b border-[#e9e9e9] before:content-[""] before:w-[100%] before:h-[.8rem] before:bg-[#f5f5f5] before:border-t before:border-b before:border-[#e9e9e9] before:absolute before:top-0 before:left-0 before:z-[1] after:content-[""] after:absolute ${activeNavArr[activeNav]} after:bottom-0 after:w-[calc((100%-4rem)/4)] after:h-[.3rem] after:translate-y-[50%] ${themeColors[cate]['afterBg']} after:rounded-[0.15rem] after:transition-all after:duration-300 after:ease-in-out`}>
                {navData.map(({title, type}, idx) => (
                    <li key={idx} className='flex-[1]'>
                        <button className={`${activeNav === idx ? `font-bold ${themeColors[cate]['text']} pointer-events-none` : `font-[500]`} text-[1.8rem] w-[100%] h-[6rem] transition-all duration-300 ease-in`} onClick={() => navClickHandler(type, idx)}>{title}</button>
                    </li>
                ))}
            </ul>
            <ul className='flex flex-col gap-[.6rem] bg-[#f5f5f5]'>
                {items.length 
                ? items.map((elm, idx) => {
                    const {it_code, it_main_pic, it_category_name, it_category_code, it_nick, it_060_code, it_connect_number, it_style_key, it_counsel_key, it_coin_price, view_win_comment, view_win_point, it_new, ed_cnt_no, ce_level} = elm;
                    return (
                        <li key={idx} className='p-[2.4rem_2rem_0] bg-[#fff] border-t-1 border-b-1 border-[#e9e9e9] first:border-t-0 last:border-b-0'>
                            <Link href={`/${it_code}`} className='flex gap-[2rem] h-[10.8rem]'>
                                <div style={{backgroundImage: `url(/img/list/bg_${it_category_code}.${it_category_code === 'fortune' ? 'png' : 'jpg'})`}} className="relative bg-no-repeat bg-center bg-cover rounded-[.6rem] overflow-hidden">
                                    <span className={`absolute top-[.6rem] left-[.6rem] flex items-center justify-center w-[3.4rem] p-[.6rem_.5rem_.5rem_.6rem] rounded-[.4rem] text-[1.2rem] font-bold text-[#fff] ${bgColors[it_category_code]} leading-[1.18]`}>{cateText[pageCate]}{it_category_name}</span>
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
                                    <div className='flex items-center justify-center gap-[.8rem] w-[18rem] h-[6rem] rounded-[.4rem] text-[#fff] text-[1.8rem] font-bold mt-[1.4rem]' style={{background: `var(--${cate}-1)`}}>
                                        <Image src={`/img/list/i-list-${pageCate}.png`} alt={`${cateText[pageCate]} 상담`} width={18} height={18} />
                                        <p>{cateText[pageCate]} 상담</p>
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
                })
                : <ListEmpty />}
            </ul>
        </div>
    )
}

export default MainListItems;