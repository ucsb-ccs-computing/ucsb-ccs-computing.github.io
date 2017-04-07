# ucsb-ccs-computing.github.io

Jekyll-based website for UCSB CCS Computing program

For shared resources, articles, and student/alumni/faculty profiles.

website: https://ucsb-ccs-computing.github.io

To test locally:
* One time setup:
    * `git clone` the repo
    * Install rvm (the Ruby version manager)
    * Run `./setup.sh` to install correct ruby version, bundler version, and bundle the gems
* From then on, to test the site locally:
    * Run `./jekyll.sh
    * Point browser to localhost:4000

# Resizing images with Imagemagick

The `convert` command line utility is available in the Imagemagick package,
which is available on CSIL, and can be [installed on Mac via homebrew](http://stackoverflow.com/questions/7053996/how-do-i-install-imagemagick-with-homebrew)

To convert images of arbitrary size to 300 pixels of height, while maintaining aspect ration, use:

```
convert -resize x300 input.jpg output.jpg
```

