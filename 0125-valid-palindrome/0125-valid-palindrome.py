class Solution:
    def isPalindrome(self, s: str) -> bool:
        stringOnly = ''.join(character.lower() for character in s if character.isalnum())
        return stringOnly == stringOnly[::-1]
