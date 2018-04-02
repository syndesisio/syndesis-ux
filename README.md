# Syndesis UX Design Tracker

Design resources for the [Syndesis](https://github.com/syndesisio/syndesis) project. Design tracker is hosted on github pages at https://syndesisio.github.io/syndesis-ux/

## Installation

| This installation requires that you have Ruby, Node, Gem, Jekyll and Gulp installed. You can find a list of dependecies with versions here: [Design Tracker Dependencies](https://github.com/rh-uxd/design-tracker-template/wiki/Dependencies)

1. Fork this repository
1. Rename as desired (we recommend with UX in the name)
1. Clone to your local machine
1. With Node, Gulp, Ruby, Gem and Jekyll already installed, run `npm run initialize`
1. Start with `jekyll serve`
1. Code away!

### First Time Build

1. Verify that you have the following installed (see our [Dependencies](https://github.com/rh-uxd/design-tracker-template/wiki/Dependencies):
    - Node
    - Gulp
    - Gem
    - Jekyll
1. Run `npm run initialize`
    - commands as part of the script:
      - `gem install bundler`
      - `bundle install`
      - `npm install`
      - `gulp`
        - this will copy the files from your npm_modules directory to their respective locations for the jekyll build process
      - `jekyll build`
    - if this script fails, at the `jekyll build` step, run `bundle exec jekyll build`
1. run `jekyll serve`
    - for viewing locally at http://localhost:4000 (http://127.0.0.1:4000)

### Subsequent Builds

- `jekyll serve` to start your environment on port `:4000`.

## Troubleshooting

- If you are having issues with the site building, you can run a set of cleaning commands to reset your environment.
- If you have issues with the ***gem bundler***, try to update your bundles with `bundle update`.

### Environment Troubles?

- `npm run reinstall`
  - This will clear out your **node_modules** folder, any vendor folders, reinstall all modules and copy vendor files back to their respective locations.
- `gulp cleanVendors`
  - This will remove just the vendor files that were copied over during the `gulp` process.
  - Run `gulp` to copy a clean set of vendor files back to your directories.
