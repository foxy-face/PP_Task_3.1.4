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
    const response = await fetch('http://localhost:8080/api/authorized')
    const authUser = await response.json();

    const oneUserRoles = document.getElementById("oneUserRoles")
    const roleList = authUser.roles
    oneUserRoles.innerHTML = ' with roles: ' + roleOfUser(roleList)
}

navInfoUser()

const bodyUser = document.getElementById("bodyUser")
let rezultUser = ''

async function userInfo() {
    const response = await fetch('http://localhost:8080/api/authorized')
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
    bodyUser.innerHTML = rezultUser
}

userInfo()

