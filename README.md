<div align="center">
  <a href="https://baker.pages.dev/">
    <img src="static/bakerCrest.svg" alt="Baker Crest" width="120" height="120">
  </a>

  <h1 align="center">Baker College</h1>

  <p align="center">
    Welcome to the Best College at Rice
    <br />
    <br />
    <a href="https://baker.pages.dev/">View Site</a>
    ·
    <a href="https://github.com/AidanG1/baker/issues">Report Bug</a>
    ·
    <a href="https://github.com/AidanG1/baker/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#hosted-version">Hosted</a></li>
    <li><a href="#developing">Developing</a></li>
    <li><a href="#building">Building</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#sanity">Sanity</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

## 😈 About

This is the website for Baker College at Rice University created by Aidan Gerber. Baker has a long history of being the best and this website does nothing less than continue that legacy.


### 🏗️ Built With

* [Svelte](https://svelte.dev/)
* [Sanity](https://www.sanity.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [Cloudflare Pages](https://pages.cloudflare.com/)

## ⚡ Hosted Version
This website is currently hosted at <a href="https://baker.pages.dev/" target="_blank">baker.pages.dev</a>. The Sanity studio is hosted at <a href="https://baker.sanity.studio/" target="_blank">baker.sanity.studio</a>. To edit website content make a Sanity account and contact me with your account and I will add you to the content editor.
## ⌨️ Developing<a name="developing"></a>

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
## 🔨 Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

This app comes with the adapter for Cloudflare Pages but can be easily substituted for any hosting platform using a SvelteKit adapter.

## 🧪 Testing

This app comes with Playwright. To initialize Playwright on your machine:
```bash
npx playwright install
```

To run tests:
```bash
npm run test
```

## 🤖 Sanity
In the /baker directory is the Sanity instance. To use Sanity: 

```bash
npm install -g @sanity/cli
npm install
sanity init
sanity deploy
```

## 😎 Contributing

Any contributions you make are **greatly appreciated** and help Baker a better place.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request