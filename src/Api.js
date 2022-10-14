//Global functions, these can be used by adding a 'require' statement at the top of the JS that requires it.

export async function Put(url, payload, func){
    //Build request
    const request = {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(payload)
    }

    try {
        //Put
        await fetch(url, request).then(result => func(result));
    }catch(err){
        console.log(err);
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