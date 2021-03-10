# Singly Linked List
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:  
``{ a } -> { b } -> { c } -> NULL``

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I don't know yet but I will shortly.

## API
<!-- Description of each method publicly available to your Linked List -->
I don't understand what this means yet.


# Code Challenge 6 - Extending from Challenge 05

Add the follows methods to the linked list from code challenge 05.

## Challenge

- .append(value) which adds a new node with the given value to the end of the list
- .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
- .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach

[Whiteboard]('linkedlist2whiteboard.png');

## API

<!-- Description of each method publicly available to your Linked List -->
- append(Value) - this appends a node value at the end of the linked list.
- insertBefore(value, newVal) - this inserts the new node before the selected value
- insertAfter(value, newVal) - this inserts a new node after a selected node.