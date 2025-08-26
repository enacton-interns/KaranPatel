# Node CLI Tool

A versatile command-line interface tool built with Node.js that provides file compression, string manipulation, and API data fetching capabilities.

## Features

- **File Compression**: Compress and decompress files using Gzip
- **String Operations**: Perform various string manipulations (uppercase, lowercase, word count, palindrome check)
- **API Data Fetching**: Fetch weather information and random jokes

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### File Compression
- Select 'Compress file' or 'Decompress file'
- Enter source and destination file paths
- Files will be compressed using Gzip compression

### String Operations
- Choose from: Uppercase, Lowercase, Word count, or Palindrome check
- Enter your text
- Get instant results

### API Data Fetching
- Access weather information and random jokes
- Follow the interactive prompts

## Project Structure
```
my-cli-tool/
├── src/
│   ├── commands/
│   │   ├── compress.js
│   │   ├── string.js
│   │   └── fetch.js
│   ├── menus/
│   │   ├── compressionMenu.js
│   │   ├── stringMenu.js
│   │   └── fetchMenu.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Dependencies

- `inquirer`: Interactive command line interface
- `axios`: API data fetching
- `chalk`: Terminal styling
- `dotenv`: Environment configuration
