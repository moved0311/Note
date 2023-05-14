/*
 * @lc app=leetcode id=890 lang=typescript
 *
 * [890] Find and Replace Pattern
 */

// @lc code=start
function findAndReplacePattern(words: string[], pattern: string): string[] {
	return words.filter(word => {
		const dict: Record<string, string> = {}
		let transformWord = ''
		for(let i = 0; i < word.length; i++){
			if(word[i] in dict){
				if(dict[word[i]] !== pattern[i]) return false
				transformWord += dict[word[i]]
			}else{
				dict[word[i]] = pattern[i]
				transformWord += pattern[i]
			}
		}
		
		if(Object.values(dict).length !== new Set(Object.values(dict)).size) return false

		return transformWord === pattern

	})
};
// @lc code=end

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"],  
"abb"))
console.log(findAndReplacePattern(["a","b","c"], "a"))