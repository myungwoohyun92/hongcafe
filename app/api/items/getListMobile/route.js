export async function POST(request) {
  const body = await request.json();
  
  const response = await fetch('https://stage.hongcafe.com/api/items/getListMobile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  
  const data = await response.json();
  return Response.json(data);
}