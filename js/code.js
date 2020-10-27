import Todo from './Todo';

const field = document.querySelector('.input');
let select = document.querySelector ('select');

/*
функция добавления дела, которая вызывает функцию отрисовки
и добавляет дело в LocalStorage
b yt pf,sdftn j,yekznm pyfxtybz
*/

function addTask() {
    let content = field.value;
    if(content == ''){
        return;
    }
    let todo = new Todo(select.value, content, '20/20/20')
    //дальше у нас будет сохранение в LocalStorage
}

//назначение лисенеров на нашу кнопку




//функция отрисовки нашего приложения, когда оно включается
//данные берутся из localstorage

/*
универсальяная функция отрисовки, которая вставляет туду в дом
*/

function GenerateDom() {

}

//обработчик удаления дела

//обработчик редактирования дела