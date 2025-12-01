import Image from "next/image";

const CategoryList = () => {
    const listData = [
        // {img: {src: '', width: 30, height: 26}, title: '클래스', description: ['상담스킬 업!', '교육 후 취업까지!']},
        {img: {src: '', width: 30, height: 26}, title: '클래스', description: (<>상담스킬 업! <br />교육 후 취업까지!</>)},
        {img: {src: '', width: 21, height: 28}, title: '홍카페 홍대점', description: (<>홍대점 상담 <br />홍대점 클래스</>)},
        {img: {src: '', width: 26, height: 26}, title: '대면 상담', description: (<>직접 만나서 <br />명쾌하게!</>)},
        {img: {src: '', width: 26, height: 26}, title: '서비스 상품', description: (<>기도·초 / <br />부적 / 작명</>)},
        {img: {src: '', width: 28, height: 28}, title: '콘텐츠', description: (<>홍카페의 <br />다양한 콘텐츠</>)},
        {img: {src: '', width: 30, height: 22}, title: '성공사례', description: (<>리얼 상담 <br />성공사례</>)},
        {img: {src: '', width: 25, height: 28}, title: (<>321,731 <span>건</span></>), description: (<>상담 후기</>)},
        {img: {src: '', width: 28, height: 30}, title: '이벤트', description: (<>이달의 <br />이벤트 소식</>)},
        {img: {src: '', width: 28, height: 30}, title: '나만의 점(占) 스토리', description: (<>내 운세를 남기다. (10만 코인 + 복권 3장 지급)</>)},
    ];

    return (
        <section>
            <ul className="flex flex-wrap gap-[1.2rem]">
                {listData.map(({img, title, description}, idx) => (
                    <li key={idx} className={`flex ${idx !== listData.length - 1 ? `flex-col flex-[calc((100%-3.6rem)/4)] gap-[.2rem] h-[12.6rem]` : `justify-center flex-[100%]`} align-center`}>
                        {/* <Image src={img.src} alt={title} width={img.width} height={img.height} /> */}
                        <b className="text-[1.8rem] mt-[.4rem] text-center">{title}</b>
                        <p className="text-[1.2rem] text-[#666] text-center">{description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CategoryList;