# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        self.front = head
        
        def check_palindrome(node):
            if not node:
                return True
            
            if not check_palindrome(node.next):
                return False
            
            if self.front.val != node.val:
                return False
            
            self.front = self.front.next
            return True
        
        return check_palindrome(head)