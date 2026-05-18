class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        r1 = set("qwertyuiop")
        r2 = set("asdfghjkl")
        r3 = set("zxcvbnm")

        res = []
        
        for word in words:
            lower_word = word.lower()
            word_set = set(lower_word)

            if word_set.issubset(r1) or word_set.issubset(r2) or word_set.issubset(r3):
                res.append(word)

        return res
            