document.addEventListener("DOMContentLoaded", () => {
    const complexitySelect = document.getElementById("complexitySelect");
    const exampleSelect = document.getElementById("exampleSelect");
    const codeDisplay = document.getElementById("codeDisplay");
    const complexityVisualization = document.getElementById("complexityVisualization");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    
    const codes = {
        "O(1)": [
            {
                title: "Example 1",
                lines: [
                    "int getConstantValue() {",
                    "    return 1;",
                    "}"
                ],
                complexities: ["C1", "C1", "C1"],
                steps: [
                    "This example has constant time complexity O(1)."
                ]
            },
            {
                title: "Example 2",
                lines: [
                    "void printFirstElement(int[] arr) {",
                    "    if (arr.length > 0) {",
                    "        System.out.println(arr[0]);",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C1", "C1", "C1"],
                steps: [
                    "This example accesses the first element directly, which is constant time O(1)."
                ]
            },
            {
                title: "Example 3",
                lines: [
                    "int getSquare(int x) {",
                    "    return x * x;",
                    "}"
                ],
                complexities: ["C1", "C1", "C1"],
                steps: [
                    "The computation of the square of a number is done in constant time O(1)."
                ]
            },
            {
                title: "Example 4",
                lines: [
                    "boolean isEven(int number) {",
                    "    return number % 2 == 0;",
                    "}"
                ],
                complexities: ["C1", "C1", "C1"],
                steps: [
                    "The check for even or odd is done in constant time O(1)."
                ]
            },
            {
                title: "Example 5",
                lines: [
                    "char getFirstChar(String str) {",
                    "    return str.charAt(0);",
                    "}"
                ],
                complexities: ["C1", "C1", "C1"],
                steps: [
                    "Accessing the first character of a string is done in constant time O(1)."
                ]
            }
        ],
        "O(n)": [
            {
                title: "Example 1",
                lines: [
                    "void printArray(int[] arr) {",
                    "    for (int i = 0; i < arr.length; i++) {",
                    "        System.out.println(arr[i]);",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C2", "C2", "C1"],
                steps: [
                    "Printing each element of the array takes linear time O(n)."
                ]
            },
            {
                title: "Example 2",
                lines: [
                    "int sumArray(int[] arr) {",
                    "    int sum = 0;",
                    "    for (int i = 0; i < arr.length; i++) {",
                    "        sum += arr[i];",
                    "    }",
                    "    return sum;",
                    "}"
                ],
                complexities: ["C1", "C2", "C3", "C2", "C1"],
                steps: [
                    "Summing up all elements in the array requires linear time O(n)."
                ]
            },
            {
                title: "Example 3",
                lines: [
                    "void copyArray(int[] src, int[] dest) {",
                    "    for (int i = 0; i < src.length; i++) {",
                    "        dest[i] = src[i];",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C2", "C2", "C1"],
                steps: [
                    "Copying all elements from one array to another requires linear time O(n)."
                ]
            },
            {
                title: "Example 4",
                lines: [
                    "boolean containsElement(int[] arr, int element) {",
                    "    for (int i = 0; i < arr.length; i++) {",
                    "        if (arr[i] == element) {",
                    "            return true;",
                    "        }",
                    "    }",
                    "    return false;",
                    "}"
                ],
                complexities: ["C1", "C2", "C3", "C2", "C1"],
                steps: [
                    "Checking if an element is in the array requires linear time O(n) in the worst case."
                ]
            },
            {
                title: "Example 5",
                lines: [
                    "void reverseArray(int[] arr) {",
                    "    for (int i = 0; i < arr.length / 2; i++) {",
                    "        int temp = arr[i];",
                    "        arr[i] = arr[arr.length - 1 - i];",
                    "        arr[arr.length - 1 - i] = temp;",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C2", "C3", "C2", "C1"],
                steps: [
                    "Reversing the elements in an array requires linear time O(n)."
                ]
            }
        ],
        "O(n^2)": [
            {
                title: "Example 1",
                lines: [
                    "void bubbleSort(int[] arr) {",
                    "    int n = arr.length;",
                    "    for (int i = 0; i < n; i++) {",
                    "        for (int j = 0; j < n - i - 1; j++) {",
                    "            if (arr[j] > arr[j + 1]) {",
                    "                int temp = arr[j];",
                    "                arr[j] = arr[j + 1];",
                    "                arr[j + 1] = temp;",
                    "            }",
                    "        }",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C1", "C2", "C2", "C3", "C4", "C4", "C4", "C1"],
                steps: [
                    "Bubble sort has quadratic time complexity O(n^2)."
                ]
            },
            {
                title: "Example 2",
                lines: [
                    "void selectionSort(int[] arr) {",
                    "    int n = arr.length;",
                    "    for (int i = 0; i < n - 1; i++) {",
                    "        int minIndex = i;",
                    "        for (int j = i + 1; j < n; j++) {",
                    "            if (arr[j] < arr[minIndex]) {",
                    "                minIndex = j;",
                    "            }",
                    "        }",
                    "        int temp = arr[minIndex];",
                    "        arr[minIndex] = arr[i];",
                    "        arr[i] = temp;",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C2", "C2", "C3", "C4", "C5", "C1"],
                steps: [
                    "Selection sort has quadratic time complexity O(n^2)."
                ]
            },
            {
                title: "Example 3",
                lines: [
                    "void insertionSort(int[] arr) {",
                    "    int n = arr.length;",
                    "    for (int i = 1; i < n; i++) {",
                    "        int key = arr[i];",
                    "        int j = i - 1;",
                    "        while (j >= 0 && arr[j] > key) {",
                    "            arr[j + 1] = arr[j];",
                    "            j--;",
                    "        }",
                    "        arr[j + 1] = key;",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C2", "C3", "C4", "C5", "C6", "C1"],
                steps: [
                    "Insertion sort has quadratic time complexity O(n^2)."
                ]
            },
            {
                title: "Example 4",
                lines: [
                    "void matrixMultiplication(int[][] A, int[][] B, int[][] C) {",
                    "    int n = A.length;",
                    "    for (int i = 0; i < n; i++) {",
                    "        for (int j = 0; j < n; j++) {",
                    "            C[i][j] = 0;",
                    "            for (int k = 0; k < n; k++) {",
                    "                C[i][j] += A[i][k] * B[k][j];",
                    "            }",
                    "        }",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C1"],
                steps: [
                    "Matrix multiplication has cubic time complexity O(n^3)."
                ]
            },
            {
                title: "Example 5",
                lines: [
                    "void generatePascalTriangle(int n) {",
                    "    int[][] triangle = new int[n][];",
                    "    for (int i = 0; i < n; i++) {",
                    "        triangle[i] = new int[i + 1];",
                    "        triangle[i][0] = 1;",
                    "        triangle[i][i] = 1;",
                    "        for (int j = 1; j < i; j++) {",
                    "            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];",
                    "        }",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C2", "C3", "C4", "C5", "C6", "C1"],
                steps: [
                    "Generating Pascal's Triangle has quadratic time complexity O(n^2)."
                ]
            }
        ],
        "O(log n)": [
            {
                title: "Example 1",
                lines: [
                    "int binarySearch(int[] arr, int target) {",
                    "    int left = 0;",
                    "    int right = arr.length - 1;",
                    "    while (left <= right) {",
                    "        int mid = left + (right - left) / 2;",
                    "        if (arr[mid] == target) {",
                    "            return mid;",
                    "        }",
                    "        if (arr[mid] < target) {",
                    "            left = mid + 1;",
                    "        } else {",
                    "            right = mid - 1;",
                    "        }",
                    "    }",
                    "    return -1;",
                    "}"
                ],
                complexities: ["C1", "C1", "C2", "C2", "C3", "C3", "C4", "C5", "C5", "C6", "C1"],
                steps: [
                    "Binary search in a sorted array has logarithmic time complexity O(log n)."
                ]
            },
            {
                title: "Example 2",
                lines: [
                    "int findMaxInLogSorted(int[] arr) {",
                    "    int left = 0;",
                    "    int right = arr.length - 1;",
                    "    while (left < right) {",
                    "        int mid = left + (right - left) / 2;",
                    "        if (arr[mid] < arr[mid + 1]) {",
                    "            left = mid + 1;",
                    "        } else {",
                    "            right = mid;",
                    "        }",
                    "    }",
                    "    return arr[left];",
                    "}"
                ],
                complexities: ["C1", "C1", "C2", "C2", "C3", "C4", "C1"],
                steps: [
                    "Finding the maximum in a rotated sorted array is done in O(log n)."
                ]
            },
            {
                title: "Example 3",
                lines: [
                    "void printPowersOfTwo(int n) {",
                    "    int power = 1;",
                    "    while (power <= n) {",
                    "        System.out.println(power);",
                    "        power *= 2;",
                    "    }",
                    "}"
                ],
                complexities: ["C1", "C2", "C2", "C3"],
                steps: [
                    "Printing powers of two up to n has logarithmic time complexity O(log n)."
                ]
            },
            {
                title: "Example 4",
                lines: [
                    "int countOccurrences(int[] arr, int target) {",
                    "    int left = 0;",
                    "    int right = arr.length - 1;",
                    "    int count = 0;",
                    "    while (left <= right) {",
                    "        int mid = left + (right - left) / 2;",
                    "        if (arr[mid] == target) {",
                    "            count++;",
                    "            int l = mid - 1;",
                    "            while (l >= left && arr[l] == target) {",
                    "                count++;",
                    "                l--;",
                    "            }",
                    "            int r = mid + 1;",
                    "            while (r <= right && arr[r] == target) {",
                    "                count++;",
                    "                r++;",
                    "            }",
                    "            return count;",
                    "        }",
                    "        if (arr[mid] < target) {",
                    "            left = mid + 1;",
                    "        } else {",
                    "            right = mid - 1;",
                    "        }",
                    "    }",
                    "    return count;",
                    "}"
                ],
                complexities: ["C1", "C2", "C3", "C4", "C5", "C1"],
                steps: [
                    "Counting occurrences of an element in a sorted array using binary search."
                ]
            },
            {
                title: "Example 5",
                lines: [
                    "int findClosestValue(int[] arr, int target) {",
                    "    int left = 0;",
                    "    int right = arr.length - 1;",
                    "    int closest = arr[left];",
                    "    while (left <= right) {",
                    "        int mid = left + (right - left) / 2;",
                    "        if (Math.abs(arr[mid] - target) < Math.abs(closest - target)) {",
                    "            closest = arr[mid];",
                    "        }",
                    "        if (arr[mid] == target) {",
                    "            return arr[mid];",
                    "        }",
                    "        if (arr[mid] < target) {",
                    "            left = mid + 1;",
                    "        } else {",
                    "            right = mid - 1;",
                    "        }",
                    "    }",
                    "    return closest;",
                    "}"
                ],
                complexities: ["C1", "C2", "C3", "C4", "C5", "C6", "C1"],
                steps: [
                    "Finding the closest value to a target in a sorted array using binary search."
                ]
            }
        ]
    };
    
    let currentCode = {};
    let currentIndex = 0;
    
    function updateExampleSelect() {
        const selectedComplexity = complexitySelect.value;
        const examples = codes[selectedComplexity] || [];
        exampleSelect.innerHTML = examples.map((example, index) => 
            `<option value="${index}">${example.title}</option>`
        ).join('');
    }
    
    function updateCodeDisplay() {
        const code = currentCode.lines || [];
        codeDisplay.innerHTML = code.map((line, index) => 
            `<div class="code-line ${index === currentIndex ? 'highlight' : ''}">${line}</div>`
        ).join('');
    }
    
    function updateComplexityVisualization() {
        if (currentIndex < (currentCode.complexities || []).length) {
            complexityVisualization.innerHTML = `<p>Complexity for current line: ${currentCode.complexities[currentIndex]}</p>`;
        } else {
            const complexityFormula = complexitySelect.value;
            complexityVisualization.innerHTML = `<p>Overall Complexity Formula: ${complexityFormula}</p>`;
        }
    }
    
    function updateSteps() {
        complexityVisualization.innerHTML += `<p>${currentCode.steps[currentIndex]}</p>`;
    }
    
    complexitySelect.addEventListener("change", () => {
        updateExampleSelect();
        exampleSelect.dispatchEvent(new Event("change"));
    });
    
    exampleSelect.addEventListener("change", () => {
        const selectedComplexity = complexitySelect.value;
        const selectedExampleIndex = exampleSelect.value;
        currentCode = codes[selectedComplexity][selectedExampleIndex] || { lines: [], complexities: [], steps: [] };
        currentIndex = 0;
        updateCodeDisplay();
        updateComplexityVisualization();
        updateSteps();
    });
    
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCodeDisplay();
            updateComplexityVisualization();
            updateSteps();
        }
    });
    
    nextButton.addEventListener("click", () => {
        if (currentIndex < (currentCode.lines || []).length - 1) {
            currentIndex++;
            updateCodeDisplay();
            updateComplexityVisualization();
            updateSteps();
        }
    });

    // Initialize with default selection
    complexitySelect.value = "O(1)";
    complexitySelect.dispatchEvent(new Event("change"));
});
