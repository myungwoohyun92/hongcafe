import MainSlideItems from './MainSlideItems';

const MainSlide = async ({bgColors}) => {
    const reqData = {
        offset: 0,
        limit: 20,
        cate: 'call',
        order: 'suggest',
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/getListMobile`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqData)
    });
    const data = await response.json();

    return <MainSlideItems data={data} bgColors={bgColors} />
}

export default MainSlide;