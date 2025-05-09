
import { createApp } from 'vue' 
import App from './App.vue'
import FirstChild from './components/FirstChild.vue';
import HelloWorld from './components/HelloWorld.vue';


const app = createApp(App);
app.component('FirstChild', FirstChild);
app.component('HelloWorld', HelloWorld);


app.provide('')
app.mount('#app');

