# What Congress Says

A simple Rails app that creates a Markov Chain and Word Cloud based on an Congressperson's RSS feed.

# Dependencies

This app was developed on Windows Subsystem for Linux (build 15063) / Ubuntu 16.04.1 with:

* Ruby 2.4.0
* Rails 5.1.0.rc1
* Bundler 1.14.6
* Yarn 0.21.3

No DB is required.

# Running Locally

```
git clone git@github.com:MetricMike/what_congress_says.git
cd what_congress_says
bundle install
yarn install

# In separate terminals:
bin/webpack-dev-server --watch-poll
bin/rails s
```
