import Image from "next/image";

const ChatRoomPage = () => {
    return (
        <main className="fixed top-0 left-0">
            <section className="flex items-center h-[8rem] bg-[#6335b4] px-[2.4rem]">
                <ul className="flex items-center justify-between w-[100%]">
                    <li className="flex items-center">
                        <div className="flex items-center justify-center gap-[1.6rem] w-[5.6rem] h-[5.6rem] rounded-[50%]">
                            <Image src={'https://img.hongcafe.com/data/items/items/60778f4fa8e00.png'} width={56} height={56} alt={''} />
                        </div>
                        <p>헤이즐넛</p>
                    </li>
                    <li className="flex items-center gap-[1.2rem]">
                        <button>
                            <Image src={'/img/chat/chat-end.svg'} width={36} height={36} alt={''} />
                        </button>
                        <button>
                            <Image src={'/img/chat/chat-close.svg'} width={36} height={36} alt={''} />
                        </button>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default ChatRoomPage;