/**
 * Merges two Scratch 3 objects.
 * @param {object} p1 - The first project (should be a larger object than the second)
 * @param {object} p2 - The second project
 * @returns {string} string - JSON representation which can be parsed
 */
function mergeJSON(p1, p2) {
	var [ft, p1f, p2f] = [[], p1['targets'], p2['targets']]
	p1f.forEach((t1, index) => {
		const t2 = p2f[index]
		if (JSON.stringify(t1) === JSON.stringify(t2)) 
		{
			logs.innerText = logs.innerText + '[LOG] No differences. Merging target 1\n'
			ft.push(JSON.stringify(t1))
		}
		else
		{ 
			if (t1['name'] === 'Stage')
				if (seen === true) 
					return
				else 
				{
					seen = true
					logs.innerText = logs.innerText + '[LOG] Stage found. Merging target 1\n'
					ft.push(JSON.stringify(t1))
				}
			else
			{
				if (t1['name'] === t2['name'] && t1['blocks'] != t2['blocks'])
				{
					var [b1, b2] = [t1['blocks'], t2['blocks']]
					var pobj = t1
					var json = {}

					delete pobj['blocks']
					Object.assign(json, b1)
					Object.assign(json, b2)

					pobj['blocks'] = json
					logs.innerText = logs.innerText + '[LOG] Similar sprite names found but different code. Merging both targets into one\n'
					console.log(json)
					ft.push(JSON.stringify(pobj))
				}
			}
		}
	})
	return `{"targets": [${ft}], "monitors":[],"extensions":[],"meta":{"semver":"3.0.0","vm":"0.2.0-prerelease.20190904154449","agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15 QQBrowserLite/1.2.8"}}`.replace(/\,(?!\s*?[\{\[\"\'\w])/g, '')
}
