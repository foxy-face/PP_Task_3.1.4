
// Выполняет функцию, как только DOM(Document Object Model) полностью загрузился
$('document').ready(function() {
    /* Событию можно назначить обработчик, то есть функцию, которая сработает, как только событие
    произошло. Обработчик может быть назначен прямо в разметке, в атрибуте, который называется
    on(событие, функция-обработчик) */
    $('.table.btn-warning').on('click',function(event){
        // Отмена действия браузера (event-событие)
        event.preventDefault();
        // attr() получает/устанавливает значение атрибутов выбранных элементов
        var href= $(this).attr('href');

        $.get(href, function(user, status){
            $('#IdEdit').val(user.id);
            $('#FirstNameEdit').val(user.first_name);
            $('#LastNameEdit').val(user.last_name);
            $('#AgeEdit').val(user.age);
            $('#EmailEdit').val(user.email);
            $('#PasswordEdit').val(user.password);
            $('#RolesEdit').val(user.roles);
        });
        // Вызов модального окна с id='editModal'
        $('#editModal').modal();
    });

    $('.table #deleteButton').on('click',function(event) {
        event.preventDefault();
        var href = $(this).attr('href');
        $('#deleteModal #delRef').attr('href', href);
        $('#deleteModal').modal();
    });
});