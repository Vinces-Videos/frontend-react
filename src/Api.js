//Global functions, these can be used by adding a 'require' statement at the top of the JS that requires it.

export function Post(url, payload){
    const request = {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(payload)
    }
    console.log(request);
}

export async function FetchItems(url, func){
    try {
      const response = await fetch(url);
      const listItems = await response.json();
      func(listItems)
    }catch(err){
      console.log(err);
    }
}