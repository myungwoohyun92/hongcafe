import ServiceListItems from "./ServiceListItems";

const ServiceList = async () => {
    const reqData = {
        offset: 0,
        limit: 24,
        cate: 'CATE-20240125141526-897',
        gd_genre: 'service',
        order: 'random',
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service/getServiceListMobile`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqData)
    });
    const data = await response.json();

    return <ServiceListItems data={data} />
}

export default ServiceList;