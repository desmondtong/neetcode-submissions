class DNode:
    def __init__(self, key, val, prev=None, next=None):
        self.key = key
        self.val = val
        self.prev = prev
        self.next = next


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.map = {}

        self.left = DNode(None, None)
        self.right = DNode(None, None)
        self.right.prev = self.left
        self.left.next = self.right

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _insertAtRight(self, node):
        prevNode = self.right.prev

        # btw cur node and prev last node
        node.prev = prevNode
        prevNode.next = node

        # btw cur node and self.right
        self.right.prev = node
        node.next = self.right

    def get(self, key: int) -> int:
        if not key in self.map:
            return -1

        node = self.map.get(key)
        self._remove(node)
        self._insertAtRight(node)

        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.map:
            self._remove(self.map.get(key))

        node = DNode(key, value)
        self._insertAtRight(node)
        self.map[key] = node

        if len(self.map) > self.capacity:
            leastNode = self.left.next
            self._remove(leastNode)
            del self.map[leastNode.key]
