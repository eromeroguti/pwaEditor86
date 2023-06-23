import { text } from "express";

const butInstall = document.getElementById('buttonInstall');
const textHeader = document.getElementById('textHeader');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    const deferredPrompt = event;


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    event.prompt();
    butInstall.setAttribute('hidden', true);
    butInstall.textContent = 'Installated';
});

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfull installated';
    console.log ('Successfull installated', event);
});
