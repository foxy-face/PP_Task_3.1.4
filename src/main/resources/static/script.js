const tbody = document.querySelector('tbody')
let rezult = ''
const url = 'http://localhost:8080/admin/users'

function roleOfUser(roles) {
    let role = "";
    for (let temp of roles) {
        role += temp.roleName;
        if (roles.length > 1) {
            role += ", ";
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

const modalUser = document.getElementById('modalUser')
const modalBootstrap = new bootstrap.Modal(modalUser)
const newUser = document.getElementById('newUser')
const linkNewUser = document.getElementById('linkNewUser')
// const modalUser = new bootstrap.Modal(document.getElementById('modalUser'))
// const form = document.querySelector('form')
// const id = document.getElementById('id')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('age')
const email = document.getElementById('email')
const password = document.getElementById('password')
const role = document.getElementById('role')
let option = ''

// linkNewUser.addEventListener('click', () => {
//     id.value = ''
//     firstName.value = ''
//     lastName.value = ''
//     age.value = ''
//     email.value = ''
//     passwordEdit.value = ''
//     newUser.show()
//     option = 'create'
// })

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        //closest() позволяет перемещаться по DOM, пока мы не получим элемент, соответствующий заданному селектору.
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

let idUser = 0

on(document, 'click', '.btnEdit', e => {
    const fila = e.target.parentNode.parentNode
    idUser = fila.children[0].innerHTML
    const firstNameForm = fila.children[1].innerHTML
    const lastNameForm = fila.children[2].innerHTML
    const ageForm = fila.children[3].innerHTML
    const emailForm = fila.children[4].innerHTML
    const passwordForm = fila.children[5].innerHTML
    const roleForm = fila.children[6].innerHTML
    firstName.value = firstNameForm
    lastName.value = lastNameForm
    age.value = ageForm
    email.value = emailForm
    password.value = passwordForm
    role.value = roleForm
    option = 'edit'
    modalBootstrap.show()
})

on(document, 'click', '.btnDelete', e => {
    const fila = e.target.parentNode.parentNode
    idUser = fila.children[0].innerHTML
    const firstNameForm = fila.children[1].innerHTML
    const lastNameForm = fila.children[2].innerHTML
    const ageForm = fila.children[3].innerHTML
    const emailForm = fila.children[4].innerHTML
    const passwordForm = fila.children[5].innerHTML
    const roleForm = fila.children[6].innerHTML
    firstName.value = firstNameForm
    lastName.value = lastNameForm
    age.value = ageForm
    email.value = emailForm
    password.value = passwordForm
    role.value = roleForm
    option = 'delete'
    modalBootstrap.show()
})

modalUser.addEventListener('submit', (e) => {
    e.preventDefault()
    if (option === 'edit') {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id: idUser,
                firstName: firstName.value,
                lastName: lastName.value,
                age: age.value,
                email: email.value,
                password: password.value,
                role: role.value
            })
        })
            .then(response => response.json())
            .then(response => location.reload())
    }
    if (option === 'delete') {
        fetch(url + "/" + idUser, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(response => location.reload())
    }
    // if (option === 'create') {
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify({
    //             firstName: firstName.value,
    //             lastName: lastName.value,
    //             age: age.value,
    //             email: email.value,
    //             password: password.value,
    //             role: role.value
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(responsw => location.reload())
    // }
    modalBootstrap.hide()
})

