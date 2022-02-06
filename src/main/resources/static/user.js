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

let urlAuth = 'http://localhost:8080/admin/users/authorized'

function roleOfUser(roles) {
    let role = "";
    for (let temp of roles) {
        role += temp.roleName;
        if (roles.length > 1) {
            role += " ";
        }
    }
    return role;
}

async function navInfoUser() {
    const response = await fetch(urlAuth)
    const authUser = await response.json();

    // let infoUsername = document.getElementById("oneUserRoles")
    // infoUsername.innerHTML = authUser.email

    let oneUserRoles = document.getElementById("oneUserRoles")
    let roleList = authUser.roles
    oneUserRoles.innerHTML = ' with roles: ' + roleOfUser(roleList)
}

navInfoUser()