import TopCate from "@/components/TopCate";
import ServiceList from "./List";

const ServicePage = () => {
    const cateList = [
        {title: '전체', img: {width: 36, height: 30, src: 'category-all.svg'}, link: ''},
        {title: '기도초', img: {width: 35, height: 32, src: 'category-tarot.svg'}, link: ''},
        {title: '부적', img: {width: 34, height: 34, src: 'category-iching.svg'}, link: ''},
        {title: '치성', img: {width: 30, height: 30, src: 'category-oracle.svg'}, link: ''},
        {title: '점성술', img: {width: 29, height: 31, src: 'category-popularity.svg'}, link: ''},
        {title: '신생아작명', img: {width: 34, height: 30, src: 'category-success.svg'}, link: ''},
        {title: '개명감명', img: {width: 29, height: 32, src: 'category-event.svg'}, link: ''},
        {title: '상호택일', img: {width: 32, height: 33, src: 'category-review.svg'}, link: ''},
        {title: '풍수지리', img: {width: 29, height: 32, src: 'category-event.svg'}, link: ''},
        {title: '후기', img: {width: 32, height: 33, src: 'category-review.svg'}, link: ''},
    ]
    return (
        <main>
            <TopCate cateList={cateList} />
            <ServiceList />
        </main>
    )
}

export default ServicePage;