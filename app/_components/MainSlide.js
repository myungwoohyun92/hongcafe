import MainSlideItems from './MainSlideItems';

const MainSlide = async ({pageCate}) => {
    const reqData = {
        offset: 0,
        limit: 20,
        cate: pageCate,
        order: 'suggest',
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${pageCate === 'call' ? 'items' : pageCate}/getListMobile`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqData)
    });
    const data = await response.json();

    return <MainSlideItems data={data} pageCate={pageCate} />
}

export default MainSlide;