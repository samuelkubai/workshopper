# Workshopper

Workshopper is a workshop utility that aids in running interactive workshops by providing
a nice user experience encapsulating your workshop practical.

## What the future looks like
Once the workshopper version 1.0.0 is complete you should be able to install workshopper
as a global NPM package and through which pull in github repositories of created
interactive workshops from creators of the various workshops

> We are going to provide support for only JS workshops for our version 1.0.0

## Intended user journey

```bash

# Install the workshopper globally
yarn add --global workshopper

# Pull in your workshop
workshopper start https://github.com/samuelkubai/react-testing-workshop

# List out the various chapters for the workshop
workshopper chapter list

# Select a specific chapter of the workshop
workshopper chapter start hi-to-the-console

# Run your submission to see it's outputs
workshopper run example-file.js

# Verfiy your submission
workshopper verify example-file.js 

```

## For the 9th - 10th November hackathon

1. Scaffold the nodejs CLI application - Completed
2. Build a sample application to test out the workshopper - Completed (Test repo: https://github.com/samuelkubai/workshop-test)
3. Build the start command - Completed
4. Build the chapter listing functionality - Completed
5. Build the starting of a new chapter functionality - Completed
6. Build the running of a submission - In progress
7. Build the verification a submission
