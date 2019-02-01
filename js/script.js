jQuery(function ($) {
    const todos = [];
    const list = $('.todos');
    const input = $('input');

    function addTodo(value) {
        todos.push(value);
        renderTodos();
    }

    function renderTodos() {
        list.empty();
        $.each(todos,function (i) {
            list.prepend('<li>'+this+'<button data-index="${i}">add</button></li>');
        })
    }

    function removeTodo (index){
        todos.splice(index,1);
        renderTodos();
    }

    input.on('change',function (e) {
        addTodo(this.value);
        this.value = '';
    });

    $(document).on('click', 'button', function () {
        const index = $(this).data('index');
        removeTodo(index);
    });
});