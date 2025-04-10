import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight);
library.add(faArrowUpRightFromSquare);
library.add(faLinkedin);
library.add(faGithub);
library.add(faInstagram);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
