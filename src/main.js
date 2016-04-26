import React from 'react';
import ReactDOM from 'react-dom';
import {Coord, CoordBox} from './jsx/coordbox';
import {MultiValueButton, ButtonValue} from './jsx/multivaluebutton';
import MenuEntry from './jsx/menuentry';
import Popover from './jsx/popover';
import PushButton from './jsx/pushbutton';
import Tab from './jsx/tab';
import Tabs from './jsx/tabs';

window.onload = e => {
  ReactDOM.render(
    <div>
      <CoordBox caption="Coordinates">
        <Coord label="x" value="13" />
        <Coord label="y" value="42" />
      </CoordBox>
      <MultiValueButton>
        <ButtonValue label="Land" icon="fa-car" def />
        <ButtonValue label="Rock" icon="fa-subway" />
        <ButtonValue label="Water" icon="fa-ship" />
        <ButtonValue label="Air" icon="fa-rocket" />
      </MultiValueButton>
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
