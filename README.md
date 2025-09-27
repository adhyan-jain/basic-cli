# CLI Something

A command-line tool for creating new projects from templates with optional Git initialization and dependency installation.

## Features

- 🚀 Create projects from predefined templates (JavaScript, TypeScript)
- 📁 Interactive project template selection
- 🔧 Optional Git repository initialization
- 📦 Optional npm dependency installation
- 💬 Interactive prompts or silent mode with flags

## Installation

### Global Installation (Recommended)

```bash
npm install -g @adhyanjain/cli-something
```

### Local Installation

```bash
npm install @adhyanjain/cli-something
```

## Usage

### Interactive Mode

Run the CLI without any arguments to use interactive prompts:

```bash
cli-something
```

This will prompt you to:
- Select a project template (JavaScript or TypeScript)
- Choose whether to initialize a Git repository

### Command Line Arguments

You can also specify options directly via command line arguments:

```bash
cli-something [template] [options]
```

#### Templates

- `javascript` - JavaScript project template
- `typescript` - TypeScript project template

#### Options

- `--git`, `-g` - Initialize a Git repository
- `--yes`, `-y` - Skip prompts and use defaults
- `--install`, `-i` - Run npm install after creating the project

### Examples

Create a JavaScript project with Git initialization:
```bash
cli-something javascript --git
```

Create a TypeScript project and install dependencies:
```bash
cli-something typescript --install
```

Skip all prompts and create a default project:
```bash
cli-something --yes
```

Create a project with all options:
```bash
cli-something typescript --git --install --yes
```

## Project Structure

The CLI looks for templates in the `templates/` directory:
```
cli-something/
├── bin/
│   └── create-project
├── src/
│   ├── cli.js
│   └── main.js
├── templates/
│   ├── javascript/
│   └── typescript/
├── package.json
└── README.md
```

## Development

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cli-something
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Link the package for local development:
   ```bash
   npm link
   ```

### Adding New Templates

1. Create a new directory in the `templates/` folder
2. Add your template files to the new directory
3. Update the template choices in `src/cli.js` if needed

## Dependencies

- [arg](https://www.npmjs.com/package/arg) - Command line argument parsing
- [chalk](https://www.npmjs.com/package/chalk) - Terminal string styling
- [inquirer](https://www.npmjs.com/package/inquirer) - Interactive command line prompts
- [ncp](https://www.npmjs.com/package/ncp) - Asynchronous recursive file copying

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Issues

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.