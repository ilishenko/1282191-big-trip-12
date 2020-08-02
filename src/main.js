const POINT_COUNT = 3;

import {createHeaderRouteAndPriceTemplate} from './view/header-route-and-price-template.js';
import {createHeaderMenuTemplate} from './view/header-menu-template.js';
import {createHeaderFilterTemplate} from './view/header-filter-template.js';
import {createMainSortTemplate} from './view/main-sort-template.js';
import {createMainEditTemplate} from './view/main-edit-template.js';
import {сreateMainContentContainerDaysTemplate} from './view/main-content-container-days-template.js';
import {сreateMainContentDayTemplate} from './view/main-content-day-template.js';
import {сreateMainContentDayRoutePointTemplate} from './view/main-content-day-route-point-template.js';
import {render} from './view/render.js';

const siteHeaderElement = document.querySelector(`.page-header`);
const siteHeaderElementTrip = siteHeaderElement.querySelector(`.trip-main`);
const siteHeaderElementMenu = siteHeaderElementTrip.querySelector(`.trip-main__trip-controls`);
const siteHeaderElementMenuHeaders = siteHeaderElementMenu.querySelectorAll(`h2`);

const siteMainElement = document.querySelector(`.page-body__page-main`);
const siteMainElementTripEvents = siteMainElement.querySelector(`.trip-events`);
const siteMainElementTripEventsHeader = siteMainElementTripEvents.querySelector(`h2`);

render(siteHeaderElementTrip, createHeaderRouteAndPriceTemplate(), `afterbegin`);
render(siteHeaderElementMenuHeaders[0], createHeaderMenuTemplate(), `afterend`);
render(siteHeaderElementMenuHeaders[1], createHeaderFilterTemplate(), `afterend`);
render(siteMainElementTripEventsHeader, createMainEditTemplate(), `afterend`);
render(siteMainElementTripEventsHeader, createMainSortTemplate(), `afterend`);
render(siteMainElementTripEvents, сreateMainContentContainerDaysTemplate(), `beforeend`);

const siteMainElementTripEventsDays = siteMainElementTripEvents.querySelector(`.trip-days`);
render(siteMainElementTripEventsDays, сreateMainContentDayTemplate(), `beforeend`);

const siteMainElementTripEventsDay = siteMainElementTripEventsDays.querySelector(`.trip-events__list`);
for (let i = 0; i < POINT_COUNT; i++) {
  render(siteMainElementTripEventsDay, сreateMainContentDayRoutePointTemplate(), `beforeend`);
}
