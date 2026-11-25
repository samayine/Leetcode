# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: ListNode | None) -> ListNode | None:
        if not head or not head.next:
            return head
        
        second = head.next
        head.next = self.swapPairs(second.next)
        second.next = head
        
        return second