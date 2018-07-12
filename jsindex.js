//чтение параметров с формы
function getFormParams() {
    var resultTable = {};
    // Поиск классов в теле страницы
    var body = document.querySelector("body"),
        tableWidth = document.getElementById("table_width"),
        tableHeight = document.getElementById("table_height"),
        numRows = document.getElementById("rows"),
        numColumns = document.getElementById("columns");

    // Присвоение введеных параметров переменным
    resultTable.width = tableWidth.value;
    resultTable.height = tableHeight.value;
    resultTable.rows = numRows.value;
    resultTable.columns = numColumns.value;
    resultTable.tr = "";
    resultTable.td = "";
    resultTable.selector = document.querySelector("table");

    // Отладочная информация
    console.log(resultTable);

    return resultTable;
}



// "Создать таблицу"
function addTable() {
    var tableParams = getFormParams();
    genTable(tableParams);
    destroyTable(tableParams);
    clearSpace(tableParams)

    //combineCells(body, tableWidth, tableHeight, numRows, numColumns, width, height, rows, columns, tr, td, firstTable);
}



// Отрисовка таблицы
function genTable(params) {
    var body = document.querySelector("body");

    // Создание таблицы и отрисовка рамки
    var table = document.createElement("table"),
        checkbox = document.getElementById("checkbox");

    if (checkbox.checked == true) {
        table.setAttribute("border", "2px");
    } else {
        table.setAttribute("border", "0");
    }

    // Установка размеров таблицы
    table.setAttribute("wigth", params.width);
    table.setAttribute("height", params.height);
     table.setAttribute("class", "example_default");

    // Построение строк и колонок
    for (var i = 0; i < params.rows; i++) {
        params.tr = document.createElement("tr");
            for (var j = 0; j < params.columns; j++) {
                params.td = document.createElement("td");
                let text = document.createTextNode((i + 1) + "." + (j + 1));

                // Установка зависимостей
                params.td.appendChild(text);
                params.tr.appendChild(params.td);
            }
            table.appendChild(params.tr);
    }
    console.log(params.tr);
    console.log(params.td);

    if (params.selector == null) {
        // return;
        body.appendChild(table);
    } else {
        var newTable = body.appendChild(table);
        //return;
        // document.body.replaceChild(newTable, params.selector);
    }
}

// // Объединение ячеек
// function combineCells(body, tableWidth, tableHeight, numRows, numColumns, width, height, rows, columns, tr, td, firstTable) {
//     // Создание таблицы и отрисовка рамки
//     table = document.createElement("table"),
//         checkbox = document.getElementById("checkbox");
//
//     if (checkbox.checked == true) {
//         table.setAttribute("border", "2px");
//     } else {
//         table.setAttribute("border", "0");
//     }
//     var input;
//
//     // Установка размеров таблицы
//     table.setAttribute("wigth", width);
//     table.setAttribute("height", height);
//
//     // Построение строк и колонок
//     for (var i = 0; i < rows; i++) {
//         tr = document.createElement("tr");
//         for (var j = 0; j < columns; j++) {
//             td = document.createElement("td");
//             input = document.createElement("input");
//             input.setAttribute("type", "checkbox");
//
//             // Установка зависимостей
//             td.appendChild(input);
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     console.log(tr);
//     console.log(td);
//
//     if (firstTable == null) {
//         // return;
//         body.appendChild(table);
//     } else {
//         var newTable = body.appendChild(table);
//         return;
//         document.body.replaceChild(newTable, firstTable);
//     }
// }

// "Удалить таблицу"
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
    }
}

// "Очистить поля"
function clearSpace() {
    var body = document.querySelector("body"),
        checkbox = document.getElementById("checkbox"),
        tableWidth = document.getElementById("table_width"),
        tableHeight = document.getElementById("table_height"),
        numRows = document.getElementById("rows"),
        numColumns = document.getElementById("columns");
    if (document.querySelector("table") != null) {
        checkbox.checked = false;
        tableWidth.value = "";
        tableHeight.value = "";
        numRows.value = "";
        numColumns.value = "";
    }
}
