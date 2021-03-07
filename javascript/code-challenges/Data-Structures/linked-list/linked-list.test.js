'use strict';

const LinkedList = require('../linked-list/linked-list.js');

describe('Linked List', () => {
    it ('Supposed to make an empty list', () => {
        let list = new LinkedList();
        expect(list.head).toEqual(null);
    })
    it ('Should add items to the list');
        let list = new LinkedList();
        let first = 'first';
        let second = 'second';

        list.insert(first);
        expect(list.head.value).toEqual(first);

        list.append(second);
});