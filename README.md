# <a href="https://baker.pages.dev/" target="_blank">Baker College</a>

This is the website for Baker College created by Aidan Gerber. It is built with SvelteKit and Sanity.
# Table of Contents
1. [Hosted](#hosted)
1. [Developing](#developing)
2. [Building](#building)
3. [Testing](#testing)
4. [Sanity](#sanity)

## Hosted Version<a name="hosted"></a>
This website is currently hosted at <a href="https://baker.pages.dev/" target="_blank">baker.pages.dev</a>. The Sanity studio is hosted at <a href="https://baker.sanity.studio/" target="_blank">baker.sanity.studio</a>. To edit website content make a Sanity account and contact me with your account and I will add you to the content editor.
## Developing<a name="developing"></a>

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building<a name="building"></a>

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

This app comes with the adapter for Cloudflare Pages but can be easily substituted for any hosting platform using a SvelteKit adapter.

## Testing<a name="testing"></a>

This app comes with Playwright. To initialize Playwright on your machine:
```bash
npx playwright install
```

To run tests:
```bash
npm run test
```

## Sanity<a name="sanity"></a>
In the /baker directory is the Sanity instance. To use Sanity: 

```bash
npm install -g @sanity/cli
npm install
sanity init
sanity deploy
```