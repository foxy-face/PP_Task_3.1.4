const bodyUser = document.getElementById("bodyUser")
let rezultUser = ''

function roleOfUser(roles) {
    let role = "";
    for (let temp of roles) {
        role += temp.roleName
        if (roles.length > 1) {
            role += " ";
        }
    }
    return role;
}

async function userInfo() {
    const response = await fetch(urlAuth)
    const authUser = await response.json();
    rezultUser += `<tr>
                            <td>${authUser.id}</td>
                            <td>${authUser.firstName}</td>
                            <td>${authUser.lastName}</td>
                            <td>${authUser.age}</td>
                            <td>${authUser.email}</td>
                            <td>${roleOfUser(authUser.roles)}</td>
                       </tr>
        `
    bodyUser.innerHTML = rezult
}

userInfo()

let urlAuth = 'http://localhost:8080/api/authorized'

async function navInfoUser() {
    const response = await fetch(urlAuth)
    const authUser = await response.json();

    let oneUserRoles = document.getElementById("oneUserRoles")
    let roleList = authUser.roles
    oneUserRoles.innerHTML = ' with roles: ' + roleOfUser(roleList)
}

navInfoUser()