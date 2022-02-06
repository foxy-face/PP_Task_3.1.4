const tbody = document.querySelector('tbody')
let rezult = ''
const url = 'http://localhost:8080/admin/users'

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

const usersRows = (users) => {
    users.forEach(user => {
        rezult += `<tr>
                            <td>${user.id}</td>
                            <td>${user.firstName}</td>
                            <td>${user.lastName}</td>
                            <td>${user.age}</td>
                            <td>${user.email}</td>
                            <td>${roleOfUser(user.roles)}</td>
                            <td class="text-center"><a class="btnEdit btn btn-primary">Edit</a><a class="btnDelete btn btn-danger">Delete</a></td>
                       </tr>
        `
    })
    tbody.innerHTML = rezult
}

async function getUsers() {
    try {
        const response = await fetch(url)
        const users = await response.json()
        const usersTable = await usersRows(users)
    } catch (e) {
        console.error(e)
    }
}

getUsers()

//-------------------------------КОНЕЦ----------Заполнение таблицы строками--------------------------------------------

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        //closest() позволяет перемещаться по DOM, пока мы не получим элемент, соответствующий заданному селектору.
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}
const urlRoles = 'http://localhost:8080/api/roles'

const editUser = document.getElementById('editUser')
const modalEditBootstrap = new bootstrap.Modal(editUser)
// const modalRolesSelector = editUser.querySelector('.userRolelist select')
const select = document.getElementById('editRoles')

const editId = document.getElementById('editId')
const editFirstName = document.getElementById('editFirstName')
const editLastName = document.getElementById('editLastName')
const editAge = document.getElementById('editAge')
const editEmail = document.getElementById('editEmail')
const editPassword = document.getElementById('editPassword')

let idUser = 0

on(document, 'click', '.btnEdit', async e => {

    const responseRoles = await fetch(urlRoles)
    const allRoles = await responseRoles.json()

    alert(allRoles)
    alert(JSON.stringify(allRoles))

    const fila = e.target.parentNode.parentNode
    idUser = fila.children[0].innerHTML
    const firstNameForm = fila.children[1].innerHTML
    const lastNameForm = fila.children[2].innerHTML
    const ageForm = fila.children[3].innerHTML
    const emailForm = fila.children[4].innerHTML
    const passwordForm = fila.children[5].innerHTML

    editId.value = idUser
    editFirstName.value = firstNameForm
    editLastName.value = lastNameForm
    editAge.value = ageForm
    editEmail.value = emailForm
    editPassword.value = passwordForm
    for(let i = 0; i < allRoles.length; i++){
        let text = allRoles[i].roleName.replace("ROLE_", "");
        // получаем значение для элемента
        let json = JSON.stringify(allRoles[i])
        // создаем новый элемента
        select.options[i] = new Option(text, json)
        // modalRolesSelector[i].value = new Option(text, json)
    }
    modalEditBootstrap.show()
})

editUser.addEventListener('submit', (e) => {
    e.preventDefault()
    const options= select.selectedOptions
    const values = Array.from(options).map(({ value }) => value)
    const roleListJSON ='['+values+']'
    const roleList = JSON.parse(roleListJSON);
    const user = {}
    user.id=idUser
    user.firstName=editFirstName.value
    user.lastName=editLastName.value
    user.age=editAge.value
    user.email=editEmail.value
    user.password=editPassword.value
    user.roles=roleList
    alert(JSON.stringify({
        user
    }))
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(response => location.reload())
    modalEditBootstrap.hide()
})


const deleteUser = document.getElementById('deleteUser')
const modalDeleteBootstrap = new bootstrap.Modal(deleteUser)
const deleteId = document.getElementById('deleteId')
const deleteFirstName = document.getElementById('deleteFirstName')
const deleteLastName = document.getElementById('deleteLastName')
const deleteAge = document.getElementById('deleteAge')
const deleteEmail = document.getElementById('deleteEmail')
const deletePassword = document.getElementById('deletePassword')
const deleteRoles = document.getElementById('deleteRoles')

on(document, 'click', '.btnDelete', e => {
    const fila = e.target.parentNode.parentNode
    idUser = fila.children[0].innerHTML
    const firstNameForm = fila.children[1].innerHTML
    const lastNameForm = fila.children[2].innerHTML
    const ageForm = fila.children[3].innerHTML
    const emailForm = fila.children[4].innerHTML
    const passwordForm = fila.children[5].innerHTML
    const roleForm = fila.children[6].innerHTML
    deleteId.value = idUser
    deleteFirstName.value = firstNameForm
    deleteLastName.value = lastNameForm
    deleteAge.value = ageForm
    deleteEmail.value = emailForm
    deletePassword.value = passwordForm
    deleteRoles.value = roleForm
    modalDeleteBootstrap.show()
})

deleteUser.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(url + "/" + idUser, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(response => location.reload())
    modalDeleteBootstrap.hide()
})

const newUser = document.getElementById('newUser')
const newFirstName = document.getElementById('newFirstName')
const newLastName = document.getElementById('newLastName')
const newAge = document.getElementById('newAge')
const newEmail = document.getElementById('newEmail')
const newPassword = document.getElementById('newPassword')
const newRoles = document.getElementById('newRoles')

newUser.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            firstName: newFirstName.value,
            lastName: newLastName.value,
            age: newAge.value,
            email: newEmail.value,
            password: newPassword.value,
            roles: [{
                "roleName": "ROLE_ADMIN"
            }, {
                "roleName": "ROLE_USER"
            }]
        })
    })
        .then(response => response.json())
        .then(response => location.reload())
})

// let rezultRoles = ''
//
// const roleMassive = (roles) => {
//     roles.forEach(role => {
//         rezultRoles += `"[{
//                 "roleName": "${role.roleName}"
//             }]
//         `
//     })
//     return rezultRoles;
// }