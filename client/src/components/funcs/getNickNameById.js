import getUserById from "./getUserById";

export default async function getNickNameById(userId) {
    let user;

    await getUserById(userId)
        .then(response => response.json())
        .then(data => user = data)

    let email = user.email;
    console.log(email)

    if (!email.includes('@')) {
        return email
    } else {
        const nicknames = email.split('@')
        return nicknames[0]
    }
}



