import HeaderEvent from "./HeaderEvent";
import HeaderSearch from "./HeaderSearch";
import HeaderGnb from "./HeaderGnb";
import { cookies } from "next/headers";

const Header = async () => {
    const cookieStore = await cookies();
    const joinBannerState = cookieStore.get('joinBannerHide')?.value;
    return (
        <header className="border-b border-solid border-[#e2cccc]">
            {!joinBannerState && <HeaderEvent joinBannerState={joinBannerState} />}
            <HeaderSearch />
            <HeaderGnb />
        </header>
    )
}

export default Header;