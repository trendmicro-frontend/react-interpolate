# react-interpolate [![build status](https://travis-ci.org/trendmicro-frontend/react-interpolate.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-interpolate) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-interpolate/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-interpolate?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-interpolate.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-interpolate/)

A React component that renders elements into a format string containing replacement fields. It comes in handy when working with dynamic text elements like localized strings of a translation library.

Demo: https://trendmicro-frontend.github.io/react-interpolate

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-interpolate](https://github.com/trendmicro-frontend/react-interpolate):

  ```
  npm install --save react @trendmicro/react-interpolate
  ```

2. Install [react-interpolate](https://github.com/trendmicro-frontend/react-interpolate)` with <b>@trendmicro</b> scope:

  ```js
  import Interpolate from '@trendmicro/react-interpolate';
  ```

## Usage

### Object Keys

```js
<Interpolate
    replacement={{
        number: (
            <span
                style={{
                    border: '1px solid #ccc',
                    padding: '5px 10px'
                }}
            >
                20
            </span>
        )
    }}
>
    {'{{number}} groups enabled'}
</Interpolate>
```

### Array Keys

```js
<Interpolate
    replacement={[
        <i>{'2017-01-01T00:00:00Z'}</i>,
        <i>{'2017-01-10T23:59:59Z'}</i>
    ]}
>
    {'From {{0}} to {{1}}'}
</Interpolate>
```

## API

### Properties

<table>
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Type</th>
      <th align="left">Default</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>format</td>
      <td>String</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>parent</td>
      <td>String</td>
      <td>'span'</td>
      <td></td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>String</td>
      <td>{{</td>
      <td></td>
    </tr>
    <tr>
      <td>suffix</td>
      <td>String</td>
      <td>}}</td>
      <td></td>
    </tr>
    <tr>
      <td>replacement</td>
      <td>Array|Object</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## License

MIT
