# MMM-WordOfTheDay
Magic Mirror Module to show the Word of the Day from Merriam Webster's dictionary. This module does NOT require the user to enter any external API keys or secrets. The status of this project is WIP nearing completion. It is a fairly simple module, but I am still working through some edge cases.

This module works best on one of the sides (top_left, bottom_left, top_right, bottom_right). I am hoping to develop capabilities for top_bar, bottom_bar, and other positions as I think that would be pretty cool, but that is a future problem. If you're a dev, feel free to make a pull request with this small fix!
Enjoy the module :)

# Screenshot
![Image of Word of the Day Module](wotdPic.png)


# Installation
```
cd ~/MagicMirror/modules
git clone https://github.com/jmwyds/MMM-WordOfTheDay.git
npm install
```

## Add to config:
```
module: 'MMM-WordOfTheDay',
position: 'top_right',
config: {
	updateInterval: 120000,
	headerText: "Word of the Day"
}
```

### Thanks To:
This module is based off of a module written by @Bittiez. Thank you.
