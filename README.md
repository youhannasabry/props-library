<div align="center"><strong>Props Library</strong></div>
<div align="center">A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices</div>

<br />


## Features

<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Offline-first</dt>
  <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

But wait... there's more!

- _The best test setup:_ Automatically guarantee code quality and non-breaking
  changes. (Seen a react app with 100% test coverage before?)
- _Native web app:_ Your app's new home? The home screen of your users' phones.
- _The fastest fonts:_ Say goodbye to vacant text.
- _Stay fast_: Profile your app's performance from the comfort of your command
  line!
- _Catch problems:_ AppVeyor and TravisCI setups included by default, so your
  tests get run automatically on Windows and Unix.

## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo
3.  Move to the appropriate directory <br />
4.  Run `npm install` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the app at `http://localhost:3000`._

Now you're ready to rumble!


## Documentation

- [**Libary Container**](app/containers/Library): Library Main Container.
- [**/constants.js**](app/containers/Library/constants.js): State constants.
- [**/actions.js**](app/containers/Library/actions.js): State actions.
- [**/reducer.js**](app/containers/Library/reducer.js): Redux reducers.
- [**/selector.js**](app/containers/Library/selector.js): State selector.
- [**/index.js**](app/containers/Library/index.js): Main container render.
- [**/index.css**](app/containers/Library/index.css): Styling, styling-components & webpack css-loader.
- [**/loadable.js**](app/containers/Library/loadable.js): Using loadable components and lazy to asynchronously load the component for the container.
- [**/saga.js**](app/containers/Library/saga.js): Using redux-saga to manage data fetching, concurrent computations and so on.


## Workflow

- Working on a state diagram & event flow.
- Will be updated once ready!


## License

This project is licensed under the MIT license, Copyright (c) 2019 Maximilian
Stoiber. For more information see `LICENSE.md`.


<div align="center">
  <sub>Boilerplate created by <a href="https://twitter.com/mxstbr">Max Stoiber</a> and maintained with ❤️ by an amazing <a href="https://github.com/orgs/react-boilerplate/people">team of developers</a>.</sub>
</div>

