// app/api/items/getListMobile/route.js
export async function POST(request) {
  try {
    const reqData = await request.json();
    
    const response = await fetch(`${process.env.LEGACY_API_URL}/api/items/getListMobile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': request.headers.get('authorization'), // 필요시
      },
      body: JSON.stringify(reqData)
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    const data = await response.json();
    return Response.json(data);
    
  } catch (error) {
    return Response.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}