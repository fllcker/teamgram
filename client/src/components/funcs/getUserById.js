export default async function getUserById(userId) {
    if (!userId) return 1;

    return fetch('http://localhost:7000/users/id/' + userId)
}