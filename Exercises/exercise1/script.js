"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.userdata = {};
document.querySelector('form')?.addEventListener('keyup', keyupCallback);
function keyupCallback({ target }) {
    if (target instanceof HTMLInputElement &&
        (target.id === 'nome' || target.id === 'email' || target.id === 'cpf')) {
        window.userdata[target.id] = target.value;
        localStorage.setItem('userdata', JSON.stringify(window.userdata));
    }
}
function isUserData(data) {
    if (data && typeof data === 'object') {
        return 'nome' in data || 'email' in data || 'cpf' in data;
    }
    return false;
}
function checkIfString(value) {
    return typeof value === 'string';
}
const localStoreUserData = localStorage.getItem('userdata') || '';
const parsedData = JSON.parse(localStoreUserData);
if (isUserData(parsedData)) {
    window.userdata = parsedData;
    Object.entries(window.userdata).forEach(([key, value]) => {
        const input = document.querySelector(`#${key}`);
        if (checkIfString(value))
            input.value = value;
    });
}
