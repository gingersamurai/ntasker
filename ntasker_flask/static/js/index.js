function print(something) {
    console.log(something);
}

taskDict = {
    1: ["Неоднозначное соотнесение таблицы и графа"],
    2: ["Строки с пропущенными значениями"],
    3: ["Задания для подготовки"],
    4: ["Передача информации. Выбор кода"],
    5: ["Посимвольное десятичное преобразование"],
    6: ["Задания для подготовки"],
    7: ["Хранение изображений"],
    8: ["Слова по порядку"],
    9: ["Задания для подготовки"],
    10: ["Задания для подготовки"],
    11: ["Пароли", "Пароли с дополнительными сведениями"],
    12: ["Исполнитель Редактор"],
    13: [
        "Подсчёт путей",
        "Подсчёт путей с избегаемой вершиной",
        "Подсчёт путей с обязательной вершиной",
        "Подсчёт путей с обязательной и избегаемой вершинами",
    ],
    14: [
        "Операции в одной СС",
        "Операции в разных СС с двумя переменными",
        "Операции в разных СС с одной переменной",
        "Прямое сложение в СС",
    ],
    15: [
        "Координатная плоскость",
        "Побитовая конъюнкция",
        "Разное",
        "Числовые отрезки",
    ],
    16: [
        "Алгоритмы, опирающиеся на несколько предыдущих значений",
        "Алгоритмы, опирающиеся на одно предыдущее значение",
        "Рекурсивные функции с возвращаемыми",
    ],
    17: ["Обработки числовой последовательности"],
    18: ["Робот-сборщик монет"],
    19: ["Две кучи", "Одна куча"],
    20: ["Две кучи", "Одна куча"],
    21: ["Две кучи", "Одна куча"],
    22: ["Задания для подготовки"],
    23: [
        "Количество программ с избегаемым этапом",
        "Количество программ с обязательным и избегаемым этапами",
        "Количество программ с обязательным этапом",
        "Поиск количества программ по заданному числу",
    ],
    24: ["Задания для подготовки"],
    25: ["Задания для подготовки"],
    26: ["Задания для подготовки"],
};

form = document.querySelector("form");

function makeFilter() {
    const taskTypeSelector = document.querySelector(".select-type");

    taskTypeSelector.addEventListener("change", (event) => {
        print(event.target.value);
        changeFilter(event.target.value);
    });

    inner = taskTypeSelector.innerHTML;
    for (i in taskDict) {
        inner += `<option value="${i}">Задание ${i}</option>`;
    }
    taskTypeSelector.innerHTML = inner;
    console.log(taskTypeSelector);
}

function changeFilter(taskType) {
    const taskSubtypeSelector = document.querySelector(".select-subtype");

    inner = '<option value="none">Выберите</option>';
    for (i in taskDict[taskType]) {
        print(i);
        inner += `<option value="${taskDict[taskType][i]}">${taskDict[taskType][i]}</option>`;
    }
    taskSubtypeSelector.innerHTML = inner;
    console.log(taskTypeSelector);
}

makeFilter();

text =
    '<p>\n    На рисунке схема дорог изображена в виде графа, в таблице звёздочкой обозначено наличие дороги между населёнными пунктами. Отсутствие звёздочки означает, что такой дороги нет.\n</p>\n<p>\n    Так как таблицу и схему рисовали независимо друг от друга, то нумерация населённых пунктов в таблице никак не связана с буквенными обозначениями на графе. Определите, какие номера населённых пунктов соответствуют населённым пунктам Б и В. В ответе запишите\n    эти два номера в порядке возрастания без пробелов и знаков препинания.\n</p>\n<p>\n    Пример. Пусть населённым пунктам Д и Е соответствуют номера П1 и П2. Тогда в ответе нужно написать 12.\n</p>\nTABLE 1\n<table style="margin:auto">\n <tr>\n  <td style="text-align:center" width="25">\n  </td>\n  <td style="text-align:center" width="25">\n   <b>\n    П1\n   </b>\n  </td>\n  <td style="text-align:center" width="25">\n   <b>\n    П2\n   </b>\n  </td>\n  <td style="text-align:center" width="25">\n   <b>\n    П3\n   </b>\n  </td>\n  <td style="text-align:center" width="25">\n   <b>\n    П4\n   </b>\n  </td>\n  <td style="text-align:center" width="25">\n   <b>\n    П5\n   </b>\n  </td>\n  <td style="text-align:center" width="25">\n   <b>\n    П6\n   </b>\n  </td>\n  <td style="text-align:center" width="25">\n   <b>\n    П7\n   </b>\n  </td>\n </tr>\n <tr>\n  <td style="text-align:center">\n   <b>\n    П1\n   </b>\n  </td>\n  <td style="text-align:center;background-color:#B3B3B3">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n </tr>\n <tr>\n  <td style="text-align:center">\n   <b>\n    П2\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center;background-color:#B3B3B3">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n </tr>\n <tr>\n  <td style="text-align:center">\n   <b>\n    П3\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center;background-color:#B3B3B3">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n </tr>\n <tr>\n  <td style="text-align:center">\n   <b>\n    П4\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center;background-color:#B3B3B3">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n </tr>\n <tr>\n  <td style="text-align:center">\n   <b>\n    П5\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center;background-color:#B3B3B3">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n </tr>\n <tr>\n  <td style="text-align:center">\n   <b>\n    П6\n   </b>\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center;background-color:#B3B3B3">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n </tr>\n <tr>\n  <td style="text-align:center">\n   <b>\n    П7\n   </b>\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center">\n   <b>\n    *\n   </b>\n  </td>\n  <td style="text-align:center;background-color:#B3B3B3">\n  </td>\n </tr>\n</table>\n';

filter_html =
    '\
<form class="filter">\
    <select name="type" class="select-type">\
        <option value="0">Выберите</option>\
    </select>\
    <select name="subtype" class="select-type">\
        <option value="0">Выберите</option>\
    </select>\
    <button type="submit">Показать</button>\
</form>';

// print(text);
