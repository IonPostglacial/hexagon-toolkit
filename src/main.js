import React from 'react';
import ReactDOM from 'react-dom';
import HTK from './htk';

window.onload = e => {
  ReactDOM.render(
    <div>
      <HTK.CoordBox caption="Coordinates">
        <HTK.Coord label="x" value="13" />
        <HTK.Coord label="y" value="42" />
      </HTK.CoordBox>
      <HTK.MultiValueButton>
        <HTK.ButtonValue label="Land" icon="fa-car" def />
        <HTK.ButtonValue label="Rock" icon="fa-subway" />
        <HTK.ButtonValue label="Water" icon="fa-ship" />
        <HTK.ButtonValue label="Air" icon="fa-rocket" />
      </HTK.MultiValueButton>
      <HTK.Popover label="popover !">
        <HTK.MenuEntry icon= "fa-subway" label="Subway" href="#1"/>
        <HTK.MenuEntry icon= "fa-plane" label="Plane" href="#1"/>
        <HTK.MenuEntry icon= "fa-rocket" label="Rocket" href="#1"/>
      </HTK.Popover>
      <HTK.PushButton icon="fa-ship" label="Go !" />
      <HTK.Tabs>
        <HTK.Tab id="tab1" label="Toto" checked><p>Lorem ipsum</p></HTK.Tab>
        <HTK.Tab id="tab2" label="Doom">
          <HTK.PushButton icon="fa-subway" label="Push me !" />
          <HTK.PushButton icon="fa-rocket" label="I'm famous !" />
        </HTK.Tab>
      </HTK.Tabs>
    </div>,
    document.getElementById('factory')
  );
};
