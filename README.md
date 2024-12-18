# MMM-WordOfTheDay

**MMM-WordOfTheDay** is a module for [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror) to show the [Word of the Day from Merriam Webster's dictionary](https://www.merriam-webster.com/word-of-the-day).

This module does NOT require the user to enter any external API keys or secrets. The status of this project is a WIP nearing completion. It is a fairly simple module, but I am still working through some edge cases.

This module works best on one of the sides (`top_left`, `bottom_left`, `top_right`, `bottom_right`). I am hoping to develop capabilities for `top_bar`, `bottom_bar`, and other positions as I think that would be pretty cool, but that is a future problem. If you're a dev, feel free to make a pull request with this small fix!

Enjoy the module :)

## Screenshot

![Screenshot of Word of the Day Module](wotdPic.png)

## Installation

```bash
cd ~/MagicMirror/modules
git clone https://github.com/jmwyds/MMM-WordOfTheDay
cd MMM-WordOfTheDay
npm install
```

## Add to config

```js
{
  module: 'MMM-WordOfTheDay',
  position: 'top_left',
  config: {
    headerText: "Word of the Day"
    updateInterval: 10 * 60 * 1000, // 10 minutes
  }
},
```

## Thanks to

This module is based off of a module written by @Bittiez. Thank you.

Thank you to @volkyl for assisting with the update intervals.

Thanks to @KristjanESPERANTO for a variety of improvements to the module.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
