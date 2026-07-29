import { initializeSpotify, isInitialized } from './spotify/auth.js'
import { getProfile } from './spotify/api.js'

document.getElementById("test").addEventListener('click', test);

async function test() {
    initializeSpotify();
    if(!isInitialized()) {
        console.log("error inicializando")
    } else {
        console.log("api incializada")
    }
    displayNameAndID();
};

async function displayNameAndID() {
    const user = await getProfile();
    const name = user.display_name;
    const id = user.id;
    console.log("name: " + name + "||" + "id: " + id);
};