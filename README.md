# The People's Demands DC

Splash page for the people's demands dc.

## overview

### install dependencies

```
npm install
```

### start dev server

```
npm run start:dev
```

### build site to `dist/`

```
npm run build
```

### deploy to [surge](surge.sh)

```
npm install -g surge
# ^ do this once. you'll be prompted to created username/pw in next step

npm run deploy:surge
```

This is a makeshift static-site generator using [HTMLWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) to render the [`ejs`](https://ejs.co/) templates in `src/views/`. Page data will eventually be fetched from a public google spreadsheet, and used in these ejs templates. The process is currently mocked in `src/getDemands.exec.js`.

I'm using a subset of [bootstrap](https://getbootstrap.com/docs/4.0/getting-started/webpack/) classes for styling.

## contribute

I'm intending this to be relatively simple to pick up and add to with very little `javascript` or `css` needed. Hopefully you can contribute by just adding HTML to `src/views/index.html` with some [bootstrap utility classes](https://getbootstrap.com/docs/4.4/utilities/borders/)
