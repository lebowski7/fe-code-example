# FE Code Example

The goal of this project is to create a single-page app that will grab a list of GitHub repositories for a specific organization and display their name, url, description, license, number of opened issues, forks, watchers and contributors in a single table.

This boilerplate consists of a preconfigured React + redux app based on create-react-app-typescript project. By default, it will show just some mock data in a table to make obvious what structure we expect + some TS interfaces (like app's state for example). Feel free to make any changes you want.

This is a list of features to implement:

1. Load the list of public GitHub repos for eg. yahoo company via XHR and show them in the table. You can use any XHR library you want. The API URL is `https://api.github.com/users/yahoo/repos?page=1&per_page=10&client_id={id}&client_secret={secret}`.
2. The number of contributors is not part of the response. Therefore for each repo call another request `https://api.github.com/repos/yahoo/{repo}/contributors?client_id={id}&client_secret={secret}` and count the number of users. Keep only one pending request at a time and update the table immediately when a response is ready (it should first show the table without contributors and then fill them one by one asynchronously). Use any async library for redux (redux-observable, redux-saga, ...) or none if you're not familiar with any of them.
3. After clicking any row show a dropdown bellow the row you clicked with links to its issue tracker, branches and PRs. Ideally without any external package with dropdowns components.
4. Center the table horizontally and make this page responsive (eg. truncate long texts, position dropdowns properly, put description on a separate row, ...).

This all should take approx. 2-3h. You can use our test GitHub client id and secret (there might be a rate limit for API requests so maybe use only eg. `per_page=3` while developing):

```
client_id = bcb14f311b72d4bafb58
client_secret = 6d183fd3515e77bfa872ca41b136d1f5954795d6

$ curl -i "https://api.github.com/users/yahoo/repos?page=1&per_page=10&client_id=bcb14f311b72d4bafb58&client_secret=6d183fd3515e77bfa872ca41b136d1f5954795d6"
```
