"use strict";

async function loadUsers(url) {    
    let response = await fetch(url)
    if (response.status != 200) return [];
    let users = await response.json();
    return users;
}

function storeUser(url, user, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function putUser(url, user, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function deleteUser(url, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', url);
    xhr.send();
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function getXhrResponse(xhr, onSuccess, onError) {
    if (xhr.status == 200) {
        onSuccess(xhr.responseText);
    } else {
        onError(xhr.status + ': ' + xhr.statusText);
    }
}