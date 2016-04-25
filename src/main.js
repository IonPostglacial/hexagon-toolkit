import React from 'react';
import ReactDOM from 'react-dom';
import CoordBox from './jsx/coordbox';
import HorizontalSelectBox from './jsx/hselectbox';
import MenuEntry from './jsx/menuentry';
import Popover from './jsx/popover';
import PushButton from './jsx/pushbutton';
import Tab from './jsx/tab';
import Tabs from './jsx/tabs';

const types = [
  {name: "Land", symbol: 'car', def: true},
  {name: "Rock", symbol: 'subway'},
  {name: "Water", symbol: 'ship'},
  {name: "Void", symbol: 'plane'},
  {name: "Sand", symbol: 'sun-o'}
];

window.onload = e => {
  ReactDOM.render(
    <div>
      <CoordBox caption="Coordinates" data={{x: 0, y: 0}} />
      <HorizontalSelectBox data={ types } />
      <Popover label="popover !">
        <MenuEntry icon= "fa-subway" label="Subway" href="#1"/>
        <MenuEntry icon= "fa-plane" label="Plane" href="#1"/>
        <MenuEntry icon= "fa-rocket" label="Rocket" href="#1"/>
      </Popover>
      <PushButton icon="fa-ship" label="Go !" />
      <Tabs>
        <Tab id="tab1" label="Toto" checked><p>Lorem ipsum</p></Tab>
        <Tab id="tab2" label="Doom">
          <PushButton icon="fa-subway" label="Push me !" />
          <PushButton icon="fa-rocket" label="I'm famous !" />
        </Tab>
      </Tabs>
    </div>,
    document.getElementById('factory')
  );
};
