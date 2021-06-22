PSEUDOCODE

```
SelectionSort(int[] arr)
    DECLARE n <-- arr.Length;
    FOR i = 0; i to n - 1
        DECLARE min <-- i;
        FOR j = i + 1 to n
            if (arr[j] < arr[min])
                min <-- j;

        DECLARE temp <-- arr[min];
        arr[min] <-- arr[i];
        arr[i] <-- temp;

arr = [8,4,23,42,16,15]
```

TRACE

In the first pass the insert-sort - the code will start at index 1 - which is second from the left. In this case - that value is

```
def insertion_sort(arr):
    for i in range(1,len(arr)):
        j = i - 1
        temp = arr[i]
        while j>= 0 and temp < arr[j]:
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = temp
```
