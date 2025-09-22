import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const footerData = [
        {title: '홈', img: 'icoFooternavHome.svg', link: '/call'},
        {title: '카테고리', img: 'icoFooternavCategory.svg', link: '/call'},
        {title: '단골', img: 'icoFooternavCustomer.svg', link: '/call'},
        {title: '로그인', img: 'icoFooternavLogin.svg', link: '/call'},
        {title: '코인충전', img: 'icoFooternavCoin.svg', link: '/call'},
    ]
    return (
        <footer className="fixed bottom-0 left-[50%] max-w-[71.8rem] w-[100%] translate-x-[-50%] border-t border-solid border-[#0000001a] bg-[#ffffffe6]">
            <ul className="flex items-center">
                {footerData.map(({title, img, link}, idx) => (
                    <li key={idx} className="flex-1">
                        <Link href={link} className="flex flex-col items-center justify-center gap-[.4rem] h-[7.2rem]">
                            <Image src={`/img/footer/${img}`} width={idx === 2 ? 30 : 24} height={24} alt={title} />
                            <span className="text-[1.4rem]">{title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer;