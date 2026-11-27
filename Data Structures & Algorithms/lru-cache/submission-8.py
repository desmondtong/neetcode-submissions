class DNode:
    def __init__(self, key, value, prev=None, next=None):
        self.key = key
        self.value = value
        self.prev = prev
        self.next = next


class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.map = {}

        self.left = DNode(None, None)
        self.right = DNode(None, None)
        self.left.next = self.right
        self.right.prev = self.left

    def _remove(self, node):
        node.next.prev = node.prev
        node.prev.next = node.next

    def _insertAtRight(self, node):
        self.right.prev.next = node
        node.prev = self.right.prev

        node.next = self.right
        self.right.prev = node

    def get(self, key: int) -> int:
        if key not in self.map:
            return -1

        node = self.map[key]
        self._remove(node)
        self._insertAtRight(node)

        return node.value

    def put(self, key: int, value: int) -> None:
        if key in self.map:
            self._remove(self.map[key])

        newNode = DNode(key, value)
        self._insertAtRight(newNode)
        self.map[key] = newNode

        if len(self.map) > self.cap:
            leastUseNode = self.left.next
            self._remove(leastUseNode)
            del self.map[leastUseNode.key]
