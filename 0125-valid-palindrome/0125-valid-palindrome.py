class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean_str = []

        for char in s:
            if char.isalnum():
                clean_str.append(char.lower())

        cleaned = ''.join(clean_str)


        return cleaned == cleaned[::-1]