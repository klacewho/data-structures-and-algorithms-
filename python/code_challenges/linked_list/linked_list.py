class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = self

if __name__ == '__main__':
    list = LinkedList()
    list.head = Node('Test')
    test1 = Node('test1')
    test2 = Node('test2')

