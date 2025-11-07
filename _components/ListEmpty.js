import Image from "next/image";

const ListEmpty = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-[1rem] py-[8rem_16rem] h-[45rem] text-[#888]'>
            <Image src='/img/list/i-list-review-null.svg' width={28} height={28} alt='내역이 없습니다.' />
            내역이 없습니다.
        </div>
    )
}

export default ListEmpty;