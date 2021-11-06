# sb3merge
Merge 2 Scratch (3) projects into one

![|](https://raw.githubusercontent.com/ajskateboarder/stuff/main/usingmerge.png) <br>
<sub>Combination of <a href="https://scratch.mit.edu/projects/582079363/">generator3</a> and <a href="https://scratch.mit.edu/projects/421219360/">wave wave hard tho</a></sub>

sb3merge is a tool to combine two Scratch 3 projects together. It was created by **[@themysticsavages](https://github.com/themysticsavages) (me)** and **[@UtterDonkey](https://github.com/UtterDonkey)**.

## Usage
For plain users, go to the [Github page](https://ajskateboarder.github.io/sb3merge), you can also run this locally if you strongly dislike Github Pages.

### Advanced usage
This same repo offers a function which can basically do the same thing as the website but in JavaScript. <br>
Just import the script any way you want, and do this:
```js
/**
* Merges two Scratch 3 objects.
* @param {object} p1 - The first project (should be a larger object than the second)
* @param {object} p2 - The second project
* @returns {string} string - JSON representation which can be parsed
*/
var thing = mergeJSON(object1, object2)
// If you want to parse this response, you may need JSON5
```
