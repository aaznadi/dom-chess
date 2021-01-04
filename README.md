# DOM Chess

A simple chess game built entirely with DOM elements and zero dependencies.

DOM Chess takes advantage of the DOM API to implement the game of chess. The board is a `<div>`, a square is a `<div>` and a piece is an `<svg>`. A piece move is simulated with the removal of an svg from a parent square node and appending it to another.

![screenshot](https://i.imgur.com/HqNxlkQ.png)

## Features

- Non-strict mode: No rules. Any move is legal 🤡

## Usage

Download the [latest release](https://github.com/kuka0len/dom-chess/releases/latest). Unzip to get the `dom-chess.js` file.

In your `HTML` file, add the following line where you want the game to be rendered:

```html
<div id="dom-chess"></div>
```

Then, add this line at the bottom of the `HTML`'s body:

```html
<script src="/path/to/dom-chess.js"></script>
```

## Development

Clone the repository:

```shell
git clone https://github.com/kuka0len/dom-chess.git
```

Install the dependencies:

```shell
npm install
```

Development build:

```shell
npm run build-dev
```

Production build:

```shell
npm run build
```

Run Webpack's development server (at `http://localhost:9000/`):

```shell
npm run dev-server
```

Run tests:

```shell
npm run test
```

## Issues and requests

Issues and requests are very welcome. I will add them to the To Do list and will do my best to fix/implement them.

Click [here](https://github.com/kuka0len/dom-chess/issues/new) to file an issue.

## Contribute

It would be cool if others contribute to this small game with some badass features.

You can contribute by making a [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) after cloning/forking the repository, just make sure your PR implements one and only one thing at a time.

Checkout the To Do list below for currently lacking features.

## To do

The list is in no special order.

- [x] Move pieces by click

- [x] Capture pieces

- [x] Print board in initial position

- [ ] Square highlighting

- [ ] Animate pieces on move by click

- [ ] Responsible board for small screens

- [ ] Add sound for: move, capture, check, game end

- [x] Inline the SVG

- [ ] Move pieces using drag/drop

- [ ] Add mode to prevent illegal moves

- [ ] Highlight legal scope

- [ ] Add mode to show square dominance

- [ ] Show move history

- [ ] Go back and forth in move history

- [ ] Render board from position

- [ ] Support for [PGN](https://en.wikipedia.org/wiki/Portable_Game_Notation)

- [ ] Support for [FEN](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)

- [ ] Arrow for last move

- [ ] PGN to FEN

- [x] Separate styles for game and `index.html`

- [ ] Add tests
