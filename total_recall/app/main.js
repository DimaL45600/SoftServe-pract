import ControllerChange from './change/controllerChange.js';
import ControllerDates from './dates/controllerDates.js';
import ControllerCart from './cart/controllerCart.js';
import ControllerFilter from './filter/controllerFilter.js';
import ControllerFinding from './finding/controllerFinding.js';
import ControllerSort from './sort/controllerSort.js';
import Publisher from './helpers/publisher.js';
import controllerInfo from './Info/controllerInfo.js';
import controllerOrder from './order/controllerOrder.js';
import controllerHistory from './history/controllerHistory.js';

const publisher = new Publisher();
const dates = new ControllerDates(publisher);
const cart = new ControllerCart(publisher);
const change = new ControllerChange(publisher);
const filter = new ControllerFilter(publisher);
const finding = new ControllerFinding(publisher);
const sort = new ControllerSort(publisher);
const info = new controllerInfo(publisher);
const order = new controllerOrder(publisher);
const history = new controllerHistory(publisher);