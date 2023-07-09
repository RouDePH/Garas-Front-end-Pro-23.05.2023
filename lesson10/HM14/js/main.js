
(function () {
    while (true) {
        let task = parseInt(prompt("Введите номер задания:", 1));
        switch (task) {
            case 1:
                processFirstTask();
                break;
            case 2:
                processSecondTask();
                break;
            case 3:
                processThirdTask();
                break;
            case 4:
                processFouthTask();
                break;
            case 5:
                processFifthTask();
                break;
            case -1:
                return; //Выход
            default: alert("Задания с таким номером не существует!");
        }
    }
})();

