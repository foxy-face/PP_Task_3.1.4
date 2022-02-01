// async function getRowUsers() {
//     try {
//         const response = await fetch("http://localhost:8080/admin/users")
//         const users = await response.json()
//         console.log(users)
//         if (users.length > 0) {
//             let tempUsers = "";
//             users.forEach((u) => {
//                 tempUsers += `<tr>`;
//                 <td>${u.id}</td>
//                 <td>${u.firstName}</td>
//                 <td>${u.lastName}</td>
//                 <td>${u.age}</td>
//                 <td>${u.email}</td>
//                 <td>${u.roles}</td>
//             </tr>
//                 `
//             })
//             // Вставляет текстовое содержимое данного HTML-тега temp в атрибут с id="users"
//             document.getElementById("users").innerHTML = tempUsers;
//         }
//     } catch (e) {
//         console.error(e)
//     }
// }
//
// getRowUsers();
//
// function roleOfUser(roles) {
//     let role = "";
//     for (let temp of roles) {
//         role += temp.roleName;
//         if (roles.length > 1) {
//             role += ", ";
//         }
//     }
//     return role;
// }
//
// async function getOneUser() {
//     try {
//         const response = await fetch(`
//                 http://localhost:8080/admin/users/${id}`)
//                     const user = await response.json()
//                 console.log(user)
//                 let tempUser = "";
//                 tempUser += `<tr>";
//         tempUser += "<td>" + user.id + "</td>";
//         tempUser += "<td>" + user.firstName + "</td>";
//         tempUser += "<td>" + user.lastName + "</td>";
//         tempUser += "<td>" + user.age + "</td>";
//         tempUser += "<td>" + user.email + "</td>";
//         tempUser += "<td>" + roleOfUser(u.roles) + "</td>";
//         tempUser += "<tr>`
//                 // Вставляет текстовое содержимое данного HTML-тега temp в атрибут с id="users"
//                 document.getElementById("user").innerHTML = tempUser;
//             }
//         catch
//             (e)
//             {
//                 console.error(e)
//             }
//         }
//
//         getOneUser();

const tbody = document.querySelector('tbody')
let rezult = ''

// const editUser = new bootstrap.Modal(document.getElementById('editUser'))
// const editForm = document.getElementById('editForm')
// const idEdit = document.getElementById('idEdit')
// const firstNameEdit = document.getElementById('firstNameEdit')
// const lastNameEdit = document.getElementById('lastNameEdit')
// const ageEdit = document.getElementById('ageEdit')
// const emailEdit = document.getElementById('emailEdit')
// const passwordEdit = document.getElementById('passwordEdit')
// let option = ''
//
// buttonEdit.addEventListener('click', () => {
//     idEdit.value = ''
//     firstNameEdit.value = ''
//     lastNameEdit.value = ''
//     ageEdit.value = ''
//     emailEdit.value = ''
//     passwordEdit.value = ''
//     editUser.show()
//     option = 'edit'
// })

// const showRezultHTML = (users) => {
//     users.forEach(user => {
//         rezult += `<tr>
//                        <td>${user.id}</td>
//                        <td>${user.firstName}</td>
//                        <td>${user.lastName}</td>
//                        <td>${user.age}</td>
//                        <td>${user.email}</td>
//                        <td>${user.password}</td>
//                        <td class="text-center"><a class="btnEdit btn btn-primary">Edit</a><a class="btnDelete btn btn-danger">Delete</a></td>
//                    </tr>
//         `
//     })
//     content.innerHTML = rezult
// }

async function getRowUsers() {
    try {
        const response = await fetch("http://localhost:8080/admin/users")
        const users = await response.json()
        users.forEach(user => {
            rezult += `<tr>
                            <td>${user.id}</td>
                            <td>${user.firstName}</td>
                            <td>${user.lastName}</td>
                            <td>${user.age}</td>
                            <td>${user.email}</td>
                            <td class="text-center"><a class="btnEdit btn btn-primary">Edit</a><a class="btnDelete btn btn-danger">Delete</a></td>
                       </tr>
        `
        })
    } catch (e) {
        console.error(e)
    }
    tbody.innerHTML = rezult
}

getRowUsers()




