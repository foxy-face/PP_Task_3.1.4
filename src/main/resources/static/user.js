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

let url = 'http://localhost:8080/admin/users/authorized'

async function navInfoAdmin() {
    const response = await fetch(urlAuth)
    const authUser = await response.json();

    let infoUsername = document.getElementById("infoUsername")
    infoUsername.innerHTML = authUser.email

    let infoRoles = document.getElementById("infoRoles")
    let roleList = authUser.roles
    infoRoles.innerHTML = ' with roles: ' + roleOfUser(roleList)
}

navInfoAdmin()