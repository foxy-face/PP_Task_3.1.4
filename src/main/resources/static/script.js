let urlAuth = 'http://localhost:8080/admin/users/authorized'

// <span id="infoUsername"> with roles: </span>
// <span id="infoRoles"></span>
async function navInfo() {
    const response = await fetch(urlAuth)
    const userAuth = await response.json()
    let infoUsername = document.getElementById("infoUsername");
    infoUsername.innerHTML = userAuth.email;
}
navInfo()

const bodyUser = document.getElementById("bodyUser")
let rezultUser = ''


//------------------------------------------------------------------------------------------------------------
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
        rezult += `<tr id="row${user.id}">
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
const selectEdit = document.getElementById('editRoles')
const selectDelete = document.getElementById('deleteRoles')
const selectNew = document.getElementById('newRoles')

async function getEditRoles() {
    const responseRoles = await fetch(urlRoles)
    const allRoles = await responseRoles.json()
    for (let i = 0; i < allRoles.length; i++) {
        let text = allRoles[i].roleName.replace("ROLE_", "");
        // получаем значение для элемента, stringify() для преобразования объектов в JSON
        let json = JSON.stringify(allRoles[i])
        // создаем новый элемента, где text будет помещен между ><, а json в option
        selectEdit.options[i] = new Option(text, json)
    }
}

async function getDeleteRoles() {
    const responseRoles = await fetch(urlRoles)
    const allRoles = await responseRoles.json()
    for (let i = 0; i < allRoles.length; i++) {
        let text = allRoles[i].roleName.replace("ROLE_", "");
        // получаем значение для элемента, stringify() для преобразования объектов в JSON
        let json = JSON.stringify(allRoles[i])
        // создаем новый элемента, где text будет помещен между ><, а json в option
        selectDelete.options[i] = new Option(text, json)
    }
}

async function getNewRoles() {
    const responseRoles = await fetch(urlRoles)
    const allRoles = await responseRoles.json()
    for (let i = 0; i < allRoles.length; i++) {
        let text = allRoles[i].roleName.replace("ROLE_", "");
        // получаем значение для элемента, stringify() для преобразования объектов в JSON
        let json = JSON.stringify(allRoles[i])
        // создаем новый элемента, где text будет помещен между ><, а json в option
        selectNew.options[i] = new Option(text, json)
    }
}

const editUser = document.getElementById('editUser')
const modalEditBootstrap = new bootstrap.Modal(editUser)

const editId = document.getElementById('editId')
const editFirstName = document.getElementById('editFirstName')
const editLastName = document.getElementById('editLastName')
const editAge = document.getElementById('editAge')
const editEmail = document.getElementById('editEmail')
const editPassword = document.getElementById('editPassword')

let idUser = 0

on(document, 'click', '.btnEdit', async e => {
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
    getEditRoles()
    modalEditBootstrap.show()
})

editUser.addEventListener('submit', async e => {
    e.preventDefault()
    const options = selectEdit.selectedOptions
    const values = Array.from(options).map(({value}) => value)
    const roleListJSON = '[' + values + ']'
    //для преобразования JSON обратно в объект
    const roleList = JSON.parse(roleListJSON);
    const editUser = {}
    editUser.id = idUser
    editUser.firstName = editFirstName.value
    editUser.lastName = editLastName.value
    editUser.age = editAge.value
    editUser.email = editEmail.value
    editUser.password = editPassword.value
    editUser.roles = roleList
    // alert(JSON.stringify({
    //     user
    // }))
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(editUser)
    })
    const responseJSON = await response.json()
    const rl = await location.reload()
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

on(document, 'click', '.btnDelete', e => {
    const fila = e.target.parentNode.parentNode
    idUser = fila.children[0].innerHTML
    const firstNameForm = fila.children[1].innerHTML
    const lastNameForm = fila.children[2].innerHTML
    const ageForm = fila.children[3].innerHTML
    const emailForm = fila.children[4].innerHTML
    const passwordForm = fila.children[5].innerHTML
    deleteId.value = idUser
    deleteFirstName.value = firstNameForm
    deleteLastName.value = lastNameForm
    deleteAge.value = ageForm
    deleteEmail.value = emailForm
    deletePassword.value = passwordForm
    getDeleteRoles()
    modalDeleteBootstrap.show()
})

deleteUser.addEventListener('submit', async e => {
    // alert("here")
    const fila = document.getElementById('row' + idUser)
    // alert('row'+idUser)
    fila.parentElement.removeChild(fila)
    await fetch(url + "/" + idUser, {
        method: 'DELETE'
    })
})

const newUser = document.getElementById('newUser')
const newFirstName = document.getElementById('newFirstName')
const newLastName = document.getElementById('newLastName')
const newAge = document.getElementById('newAge')
const newEmail = document.getElementById('newEmail')
const newPassword = document.getElementById('newPassword')

getNewRoles()

newUser.addEventListener('submit', async e => {
    e.preventDefault()
    const options = selectNew.selectedOptions
    const values = Array.from(options).map(({value}) => value)
    const roleListJSON = '[' + values + ']'
    const roleList = JSON.parse(roleListJSON)
    const newUser = {}
    newUser.firstName = newFirstName.value
    newUser.lastName = newLastName.value
    newUser.age = newAge.value
    newUser.email = newEmail.value
    newUser.password = newPassword.value
    newUser.roles = roleList
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUser)
    })
    const rs = await response.json()
    const rl = await location.reload()
})
