# Simple-App Development Instructions

**ALWAYS follow these instructions first and only fallback to additional search and context gathering if the information in these instructions is incomplete or found to be in error.**

## Repository Overview

Simple-App is a minimal repository currently containing only basic project structure. The repository is in its initial state and ready for application development.

## Working Effectively

### Initial Repository Setup
- Clone the repository: `git clone https://github.com/HarishGangula/Simple-App.git`
- Navigate to repository: `cd Simple-App`
- Check repository status: `git --no-pager status`
- List available files: `ls -la`

### Development Environment Setup
The development environment has the following tools available:
- Node.js and npm: `/usr/local/bin/node` and `/usr/local/bin/npm`
- Python 2 and 3: `/usr/bin/python` and `/usr/bin/python3`  
- Java Development Kit: `/usr/bin/java` and `/usr/bin/javac`
- Docker: `/usr/bin/docker`
- Build tools: `/usr/bin/make`, `/usr/bin/gcc`, `/usr/bin/g++`

### Current Repository State
- Repository contains only `README.md` with basic project title
- No application code, build scripts, or configuration files present
- No CI/CD pipelines or workflows configured
- Ready for initial application development

## Building and Testing (Future State)

*Note: These instructions are templates for when application code is added*

### For Node.js Applications
When Node.js code is added:
- Install dependencies: `npm install` -- typically takes 1-3 minutes. Set timeout to 5+ minutes.
- Build application: `npm run build` -- timing varies by project size. NEVER CANCEL. Set timeout to 30+ minutes for complex builds.
- Run tests: `npm test` -- typically takes 2-10 minutes. NEVER CANCEL. Set timeout to 15+ minutes.
- Start development server: `npm run dev` or `npm start`

### For Python Applications  
When Python code is added:
- Install dependencies: `pip install -r requirements.txt` -- typically takes 2-5 minutes. Set timeout to 10+ minutes.
- Run tests: `python -m pytest` or `python -m unittest` -- timing varies. NEVER CANCEL. Set timeout to 20+ minutes.
- Start application: `python app.py` or equivalent main file

### For Java Applications
When Java code is added:
- Compile: `javac *.java` or use build tool like Maven/Gradle
- Maven build: `mvn clean install` -- can take 10-30 minutes. NEVER CANCEL. Set timeout to 45+ minutes.
- Gradle build: `./gradlew build` -- can take 10-30 minutes. NEVER CANCEL. Set timeout to 45+ minutes.
- Run tests: `mvn test` or `./gradlew test` -- can take 5-20 minutes. NEVER CANCEL. Set timeout to 30+ minutes.

## Validation Requirements

### Pre-commit Validation
Always run these steps before committing changes:
- Verify code compiles/builds successfully
- Run all tests to ensure they pass
- Check code formatting and linting (when configured)
- Validate that new functionality works as expected

### Manual Testing Scenarios
After making changes, always perform these validation steps:

**For Web Applications:**
- Start the application and verify it loads correctly
- Test main user workflows (login, core functionality, navigation)
- Verify responsive design on different screen sizes
- Test error handling scenarios

**For CLI Applications:** 
- Run `--help` command to verify usage information
- Test main command with sample inputs
- Verify output files/results are generated correctly
- Test error conditions and edge cases

**For APIs/Services:**
- Start the service and verify health endpoints
- Test main API endpoints with valid requests
- Verify error responses for invalid inputs
- Check authentication/authorization if applicable

### Performance Validation
- Monitor build times and document if they exceed expected ranges
- Test application startup time and responsiveness
- Verify memory usage is within acceptable limits

## Common Development Tasks

### Adding New Features
1. Create feature branch: `git checkout -b feature/feature-name`
2. Implement the feature following project conventions
3. Add/update tests for new functionality
4. Run full validation suite
5. Commit changes with descriptive messages
6. Create pull request for review

### Debugging Issues
1. Reproduce the issue consistently
2. Check logs for error messages
3. Use appropriate debugging tools for the technology stack
4. Add debugging statements if needed
5. Test fix thoroughly before committing

### Setting up CI/CD (Future)
When CI/CD is needed:
- Create `.github/workflows/` directory
- Add build workflow with appropriate timeouts
- Include test execution with proper timeout settings
- Add deployment steps if needed
- **CRITICAL**: All CI build steps must have timeouts of 60+ minutes minimum

## Repository Structure (Future State)

Expected structure when application code is added:
```
Simple-App/
├── README.md
├── .github/
│   ├── copilot-instructions.md
│   └── workflows/ (CI/CD pipelines)
├── src/ (source code)
├── tests/ (test files)
├── docs/ (documentation)
├── config/ (configuration files)
└── [package.json|requirements.txt|pom.xml] (dependency management)
```

## Critical Reminders

- **NEVER CANCEL builds or long-running commands** - Wait for completion even if it takes 45+ minutes
- **ALWAYS set appropriate timeouts** - Use 60+ minutes for builds, 30+ minutes for tests
- **VALIDATE every change** - Don't assume code works without testing
- **Follow existing patterns** - Maintain consistency with established codebase conventions
- **Document timing expectations** - Update these instructions with actual build/test times as they're discovered

## Troubleshooting

### Common Issues
- Build timeouts: Increase timeout values, builds can take 45+ minutes
- Dependency conflicts: Clear cache and reinstall dependencies
- Test failures: Run tests individually to isolate issues
- Permission errors: Check file permissions and execution rights

### Getting Help
- Check repository README.md for project-specific information
- Review commit history for context on recent changes
- Examine error logs carefully for specific error messages
- Use project-appropriate debugging tools and techniques

---

*These instructions should be updated as the repository evolves and actual application code is added. Always validate new commands and procedures before adding them to these instructions.*