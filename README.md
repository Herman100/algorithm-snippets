# Algorithm Snippets 📚

A collection of well-documented algorithm implementations in JavaScript for public usage. This repository serves as a learning resource and reference for common algorithms with comprehensive test coverage.

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Jest](https://img.shields.io/badge/tested%20with-jest-99424f.svg)](https://github.com/facebook/jest)

## 🌟 Features

- **Clean Implementations**: Easy-to-understand algorithm implementations
- **Well-Documented**: Each algorithm includes detailed comments explaining the approach
- **Test Coverage**: Comprehensive test suites using Jest
- **ES Modules**: Modern JavaScript with ES6+ features
- **Beginner Friendly**: Perfect for learning and interview preparation

## 📋 Available Algorithms

### Sorting Algorithms
- **Insertion Sort** - Simple sorting algorithm that builds the final sorted array one item at a time

*More algorithms coming soon!*

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/algorithm-snippets.git
   cd algorithm-snippets
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 💻 Usage

### Importing and Using Algorithms

```javascript
import insertionSort from './insertion_sort.js';

const numbers = [5, 2, 9, 1, 5, 6];
const sorted = insertionSort(numbers);
console.log(sorted); // Output: [1, 2, 5, 5, 6, 9]
```

### Running Tests

Execute all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm test -- --watch
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## 📁 Project Structure

```
algorithm-snippets/
├── insertion_sort.js          # Insertion sort implementation
├── tests/
│   └── insertion_sort.test.js # Test suite for insertion sort
├── jest.config.js             # Jest configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## 🤝 Contributing

Contributions are **welcome and appreciated**! Whether you want to add a new algorithm, improve documentation, or fix bugs, your help is valued.

### How to Contribute

1. **Fork the repository**
   - Click the 'Fork' button at the top right of this page

2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/algorithm-snippets.git
   cd algorithm-snippets
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/algorithm-name
   ```

4. **Make your changes**
   - Add your algorithm implementation
   - Write comprehensive tests
   - Update documentation

5. **Run tests**
   ```bash
   npm test
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add [algorithm-name] implementation"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/algorithm-name
   ```

8. **Create a Pull Request**
   - Go to the original repository
   - Click 'New Pull Request'
   - Select your fork and branch
   - Describe your changes

### Guidelines for Adding New Algorithms

When adding a new algorithm, please follow these guidelines:

1. **File Naming**: Use snake_case for file names (e.g., `bubble_sort.js`)

2. **Code Structure**:
   ```javascript
   // Brief description of the algorithm
   // Time complexity: O(?)
   // Space complexity: O(?)
   
   export default function algorithmName(input) {
       // Clear, commented implementation
       return result;
   }
   ```

3. **Test File**: Create a corresponding test file in the `tests/` directory
   ```javascript
   import { expect, test } from '@jest/globals';
   import algorithmName from '../algorithm_name.js';
   
   test('algorithm description', () => {
       // Test cases
   });
   ```

4. **Documentation**: 
   - Add clear comments explaining the logic
   - Include time and space complexity
   - Update this README with the new algorithm

5. **Test Coverage**: Ensure your tests cover:
   - Normal cases
   - Edge cases (empty arrays, single elements, etc.)
   - Large inputs (if applicable)

### Ideas for Contributions

- **Sorting**: Bubble Sort, Quick Sort, Merge Sort, Heap Sort, Selection Sort
- **Searching**: Binary Search, Linear Search, Jump Search
- **Data Structures**: Stack, Queue, Linked List, Binary Tree
- **Graph Algorithms**: BFS, DFS, Dijkstra's Algorithm
- **Dynamic Programming**: Fibonacci, Knapsack Problem, Longest Common Subsequence
- **String Algorithms**: Pattern Matching, Palindrome Check
- **Math Algorithms**: Prime Numbers, GCD, LCM

## 🧪 Testing

This project uses [Jest](https://jestjs.io/) for testing with ES modules support.

### Test Configuration

The `jest.config.js` is set up to:
- Use Node.js test environment
- Support ES modules
- Run tests without transformation

### Writing Tests

Follow the existing test pattern:
```javascript
import { expect, test } from '@jest/globals';
import yourFunction from '../your_file.js';

test('descriptive test name', () => {
    const input = /* test input */;
    const result = yourFunction(input);
    const expected = /* expected output */;
    expect(result).toEqual(expected);
});
```

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Herman Kwamebour**

## ⭐ Show Your Support

If you find this repository helpful:
- Give it a ⭐ star
- Fork it for your own use
- Share it with others
- Contribute your own algorithms!

## 📧 Contact

Have questions or suggestions? Feel free to open an issue or submit a pull request!

---

**Happy Coding!** 🚀
