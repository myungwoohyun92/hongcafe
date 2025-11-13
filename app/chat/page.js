import TopCate from "@/_components/TopCate";
import MainSlide from "../_components/MainSlide";
import MainList from "../_components/MainList";

const ChatPage = () => {
    const cateList = [
        {title: '전체', img: {width: 36, height: 30, src: 'category-all.svg'}, link: ''},
        {title: '타로', img: {width: 35, height: 32, src: 'category-tarot.svg'}, link: ''},
        {title: '사주', img: {width: 34, height: 34, src: 'category-iching.svg'}, link: ''},
        {title: '신점', img: {width: 30, height: 30, src: 'category-oracle.svg'}, link: ''},
        {title: '후기', img: {width: 32, height: 33, src: 'category-review.svg'}, link: ''},
    ];
    return (
        <main>
            <TopCate cateList={cateList} />
            <MainSlide pageCate={'chat'} />
            <MainList pageCate={'chat'} />
        </main>
    )
}

export default ChatPage;