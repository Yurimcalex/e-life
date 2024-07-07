import './style.css'
import worlds from './src/extension/worlds/worlds.js';
import Main from './src/extension/main.js';
import Controller from './src/extension/controller.js';
import View from './src/extension/view.js';
import { getItem } from './src/extension/storage.js';


const view = new View(worlds.length);
const main = new Main(worlds, view.showData);
view.getWorldDescription = main.getWorldDescription;

view.init();
main.init(getItem('worldIndex') || 0);

const controller = new Controller(main.selectWorld, main.run);
controller.init();