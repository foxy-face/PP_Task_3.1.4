const bodyUser = document.getElementById("bodyUser")
let rezultUser = ''

async function userInfo(user) {
    rezultUser += `<tr>
                            <td>${user.id}</td>
                            <td>${user.firstName}</td>
                            <td>${user.lastName}</td>
                            <td>${user.age}</td>
                            <td>${user.email}</td>
                            <td>${roleOfUser(user.roles)}</td>
                       </tr>
        `
    bodyUser.innerHTML = rezult
}

async function getOneUser() {
    const response = await fetch(urlAuth)
    const authUser = await response.json();
    const oneUser = await userInfo(authUser)
}

getOneUser()
