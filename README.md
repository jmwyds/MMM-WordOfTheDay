# MMM-WordOfTheDay
Magic Mirror Module to show the Word of the Day from Merriam Webster's dictionary. This module does NOT require the user to enter any external API keys or secrets. The status of this project is WIP nearing completion. It is a fairly simple module, but I am still working through some edge cases. Enjoy!

# Screenshot
![Image of Word of the Day Module](wotdPic.png)


# Installation
`cd modules` -> `git clone https://github.com/jmwyds/MMM-WordOfTheDay.git`

## Add to config:
```
module: 'MMM-WordOfTheDay',
position: 'top_right',
config: {
	updateInterval: 120000,
	headerText: "Word of the Day"
}
```

# Thanks To:
This module is based off of a module written by @Bittiez. Thank you.
