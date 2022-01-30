//
// // Выполняет функцию, как только DOM(Document Object Model) полностью загрузился
// $('document').ready(function() {
//     /* Событию можно назначить обработчик, то есть функцию, которая сработает, как только событие
//     произошло. Обработчик может быть назначен прямо в разметке, в атрибуте, который называется
//     on(событие, функция-обработчик) */
//     $('.table.btn-warning').on('click',function(event){
//         // Отмена действия браузера (event-событие)
//         event.preventDefault();
//         // attr() получает/устанавливает значение атрибутов выбранных элементов
//         var href= $(this).attr('href');
//
//         $.get(href, function(user, status){
//             $('#IdEdit').val(user.id);
//             $('#FirstNameEdit').val(user.first_name);
//             $('#LastNameEdit').val(user.last_name);
//             $('#AgeEdit').val(user.age);
//             $('#EmailEdit').val(user.email);
//             $('#PasswordEdit').val(user.password);
//             $('#RolesEdit').val(user.roles);
//         });
//         // Вызов модального окна с id='editModal'
//         $('#editModal').modal();
//     });
//
//     $('.table #deleteButton').on('click',function(event) {
//         event.preventDefault();
//         var href = $(this).attr('href');
//         $('#deleteModal #delRef').attr('href', href);
//         $('#deleteModal').modal();
//     });
// });

async function getRowUsers() {
    try {
        const response = await fetch("http://localhost:8080/admin/users")
        const users = await response.json()
        if (users.length > 0) {
            let temp = "";
            users.forEach((u) => {
                temp += "<tr>";
                temp += "<td>" + u.id + "</td>";
                temp += "<td>" + u.first_name + "</td>";
                temp += "<td>" + u.last_name + "</td>";
                temp += "<td>" + u.age + "</td>";
                temp += "<td>" + u.email + "</td>";
                temp += "<td>" + u.roles + "</td>";
                temp += "</tr>";
            })
            // Вставляет текстовое содержимое данного HTML-тега temp в атрибут с id="users"
            document.getElementById("users").innerHTML = temp;
        }
    } catch (e) {
        console.error(e)
    }
}
