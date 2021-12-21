[![NPM](https://img.shields.io/npm/v/@vtaits/react-color-picker.svg)](https://www.npmjs.com/package/@vtaits/react-color-picker)

# React Color Picker

> This is a resurrection of package [react-color-picker](https://www.npmjs.com/package/react-color-picker).

> A carefully crafted color picker for React.

No images have been used in the making of this color picker :)

![Color Picker](https://cloud.githubusercontent.com/assets/512416/5023604/0761ac7a-6aca-11e4-90db-d8678be7c267.PNG)

## Examples

* [Simple](https://codesandbox.io/s/8ynk622k9j)

## Install

#### npm

```sh
$ npm install @vtaits/react-color-picker
```

#### yarn

```sh
$ yarn add @vtaits/react-color-picker
```

#### Please don't forget to include the styles!!! - `index.css`

```jsx
import { render } from 'react-dom';
import React, { useState } from 'react';
import ColorPicker from '@vtaits/react-color-picker';

import '@vtaits/react-color-picker/dist/index.css';

const App = () => {
  const [color, setColor] = useState('red');

  const onDrag = (color) => {
    setColor(color);
  };

  return (
    <div>
      <ColorPicker value={color} onDrag={onDrag} />

      <div style={{
        background: color,
        width: 100,
        height: 50,
        color: 'white'
      }}>
        {color}
      </div>
    </div>
  );
};

render(<App />, document.getElementById('content'))
```

## HueSpectrum

You can use only the hue spectrum if that is what you need.

```jsx
import React from 'react';
import { HueSpectrum } from '@vtaits/react-color-picker';

<HueSpectrum value={color} width={100}/>
```

## SaturationSpectrum

You can use only the saturation spectrum if that is what you need.

```jsx
import React from 'react';
import { SaturationSpectrum } from '@vtaits/react-color-picker';

<SaturationSpectrum value={color} height={400}/>
```

## Properties

It's best if you specify a fixed size for the color picker.

Available options:

 * saturationWidth
 * saturationHeight
 * hueWidth
 * hueHeight (defaults to saturationHeight)

```jsx
<ColorPicker value={color} saturationWidth={400} saturationHeight={500} />
<ColorPicker value={color} saturationWidth={400} saturationHeight={500} hueWidth={100}/>
```

You can specify any other properties on the `ColorPicker`, including `className`, `style`, etc
The `ColorPicker` will always have a css class `color-picker`

The ColorPicker, the HueSpectrum and the SaturationSpectrum all accept `onDrag` and `onChange` callbacks.

### onDrag(colorString)

Called during the dragging operation.

### onChange(colorString)

Called after mouse up - when the color has been selected

## License

#### MIT
