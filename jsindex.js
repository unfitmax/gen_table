// Нажатие кнопки "Создать таблицу"
function addTable() {
    // Поиск классов в теле страницы
    var body = document.querySelector("body"),
        tableWidth = document.getElementById("table_width"),
        tableHeight = document.getElementById("table_height"),
        numRows = document.getElementById("rows"),
        numColumns = document.getElementById("columns"),

        // Присвоение введеных параметров переменным
        width = tableWidth.value,
        height = tableHeight.value,
        rows = numRows.value,
        columns = numColumns.value,
        tr = "",
        td = "",
        firstTable = document.querySelector("table");

    // Отладочная информация
    console.log(width);
    console.log(height);
    console.log(rows);
    console.log(columns);

    // Создание таблицы и отрисовка рамки
    table = document.createElement("table"),
        checkbox = document.getElementById("checkbox");

    if (checkbox.checked == true) {
        table.setAttribute("border", "2px");
    } else {
        table.setAttribute("border", "0");
    }

    // Установка размеров таблицы
    table.setAttribute("wigth", width);
    table.setAttribute("height", height);
    // generate();

}

function generate() {


    var body = addTable(),
        rows = addTable(),
        tr = addTable(),
        columns = addTable(),
        td = addTable(),
        firstTable = addTable();


    // Построение строк и колонок
    for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");
            for (var j = 0; j < columns; j++) {
                td = document.createElement("td");
                text = document.createTextNode((i + 1) + "." + (j + 1));

                // Установка зависимостей
                td.appendChild(text);
                tr.appendChild(td);
            }
            table.appendChild(tr);
    }
    console.log(tr);
    console.log(td);

    if (firstTable == null) {
        // return;
        body.appendChild(table);
    } else {
        var newTable = body.appendChild(table);
        return;
        document.body.replaceChild(newTable, firstTable);
    }
}

function  something( a ) {
  console.log('write', a || 'something')
}

// Нажатие кнопки "Удалить таблицу"
function destroyTable() {
    var body = document.querySelector("body"),
        table = document.querySelector("table"),
        checkbox = document.getElementById("checkbox"),
        tableWidth = document.getElementById("table_width"),
        tableHeight = document.getElementById("table_height"),
        numRows = document.getElementById("rows"),
        numColumns = document.getElementById("columns");
    if (document.querySelector("table") != null) {
        document.body.removeChild(table);
        checkbox.checked = false;
        tableWidth.value = "";
        tableHeight.value = "";
        numRows.value = "";
        numColumns.value = "";
    }

    something(' вывести что-нибудь ');
}
