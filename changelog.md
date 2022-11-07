# Change log

Changes and WIP features will be displayed here.

## WIP Features

- General Visual updates
- Make darkmode default
- Fix footer not overlapping when screen is extremely zoomed in
- Add more display features to make it easier to use on mobile
- Change font on animation

## Release 0.12

- Word display (top offset) method changed to be non-static, fixed bugs with different displays
- Font size of words in typing test increase
- Page layout changed
- Web icon added
- Reverted changes from release 0.11

## Release 0.11

- Centered Typing test to center

## Release 0.10

- Added functionality to navbar icons
  - Keyboard icon now redirects to a "React-Type wiki page" on "keyboard layouts"
  - React icons now redirects to the official ReactJS website
- Reduced the redo button rotation from -360deg to -20deg

## September 14, 2022

- Implemented a feature which highlights the correct and incorrect words of the user
- Reformatted the calculation for WPM from `wordsTyped x 4` to `charactersTyped / 5 /0.25`
- Implemented a navbar and a footer for more information and a more visually pleasing view
- Implemented react-icons to create visually pleasing icons for links to other resources
- added hover animations for icons, and added links for functionality
- Made words in the textbox unselectable for the user
- temporarily removed the light mode toggle button to be worked on for a future version
- changed reset test button to another logo, added on hover animation.

## September 1, 2022

- Fixed bug where you can see previous words when they were supposed to be removed
- Fixed bug where old words were removed on second word of the new line
- Implemented react-type-animation for header
- Fixed bug where highlighted word color would not change on dark mode activation
- Added functionality to prevent same word from appearing twice in a row

## August 31, 2022

- Array generation refactor
- Selected word is now selected with CSS
- Fixed bug with input bar changing size and moving when timer changed
- Small visual change to result page for better readablity on mobile
- Class name changes
- Font size for words increased
- General CSS implemented
- Old words are now removed from view while typing
