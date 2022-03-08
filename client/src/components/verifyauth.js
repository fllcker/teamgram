export default async function verifyAuth(email, passwd) {

    if (email == undefined) return 0
    if (passwd == undefined) return 0


    let fetchString = 'http://localhost:7000/users/vad';
    let fetchData = {email, passwd}

    let returnResult = 0;

    await fetch(fetchString, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fetchData)
    })
        .then(response => response.json())
        .then(data => {
            if(data.error == 1 || data == {}) {
                returnResult = 0;
            } else {
                returnResult = 1;
            }
        });

    return returnResult
}