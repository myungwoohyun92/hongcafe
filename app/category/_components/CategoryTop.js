import Link from "next/link";

const CategoryTop = () => {
    const cateData = [
        {title: '전화', description: '고민은 후련하게 상담은 간편하게', button: [{type: 'purple', price: 1000}, {type: 'green', price: [500, 1200]}]},
        {title: '채팅', description: '깊·은·고·민·한·글·자·씩·꼼·꼼·하·게', button: [{type: 'purple', price: 1000}, {type: 'green', price: [500, 1200]}]},
    ];

    return (
        <section className="flex flex-col gap-[3.2rem] p-[2.4rem_2rem]">
            {cateData.map(({title, description, button}, idx) => (
                <div key={idx} className="flex flex-col gap-[1.2rem]">
                    <p className="flex items-center justify-between">
                        <b className="text-[2.4rem]">{title}상담</b>
                        <span className="text-[1.8rem]">{description}</span>
                    </p>
                    <ul className="flex items-center justify-between gap-[1.2rem]">
                        {button.map(({type, price}, idx) => (
                            <li key={idx} className="flex-1">
                                <Link href="" className="flex items-center justify-between h-[8rem] px-[2rem] text-[#FFF] rounded-[.8rem]" style={{background: `var(--${type}-2)`}}>
                                    <b className="text-[2.4rem]">{type === 'purple' ? `퍼플` : `그린`}{title}</b>
                                    <span className="text-[1.6rem]">{typeof price === 'number' ? `${price}원 ~` : `${price[0]}원~${price[1]}원`} (30초)</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default CategoryTop;