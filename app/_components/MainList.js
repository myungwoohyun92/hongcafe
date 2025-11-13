import Link from 'next/link';
import Image from 'next/image';
import MainListItems from './MainListItems';

const MainList = async ({pageCate}) => {
    let reqData = {
        offset: 0,
        limit: 10,
        cate: pageCate,
        order: 'cematch',
        isGreen: 'Y', 
        page_pg_type: 'green'
    }
    // const greenData = {
    //     isGreen: 'Y', 
    //     page_pg_type: cate
    // }
    // if(cate === 'green') reqData = {...reqData, ...greenData};

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/getListMobile`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqData)
    });
    const data = await response.json();
    return <MainListItems data={data} pageCate={pageCate} />
}

export default MainList;