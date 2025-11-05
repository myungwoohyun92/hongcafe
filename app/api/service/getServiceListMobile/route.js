export async function POST(request) {
  const body = await request.json();
  
  const response = await fetch('https://stage.hongcafe.com/api/service/getServiceListMobileNew', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(body)
  });
  
  const data = await response.json();
  return Response.json(data);
}