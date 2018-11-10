# Workshopper

Workshopper is a workshop utility that aids in running interactive workshops by providing
a nice user experience encapsulating your workshop's code base.

## Vision
The future of the workshopper application is have a utility anyone can install and pull in from a vast pool of workshops
built to support the workshopper. The workshopper allows not only for a unified experience of your audience but also
the ability for your audience to YOYO (You own your own) their learning after the workshop is done.

## Installation
The workshopper is a NPM package you just install globally on your machine.

> Ensure you have either NPM or Yarn is installed on your computer.

For npm users to install worshopper, run:

```bash
npm install -g @andela/workshopper
```

For yarn users to install workshopper, run:

```bash
yarn add --global @andela/workshopper
```

## Using workshopper
Once you have workshopper installed on your computer globally, you can now pull in any workshop and start off.

### Installing a new workshop
To install a new workshop you need the _github_ url of the repo and run the following command:

```bash
workshopper start [GITHUB_URL]
```

### List out the chapters of the workshop
To list our the chapters of the workshop, run:

```bash
workshopper chapters
```

### Open a specific chapter
To open a specific chapter of the workshop, run:

```bash
workshopper open [CHAPTER]
```
> The chapter name reference here can be retrieved from the list of chapters

### Run your submission
To run your submission for an excercise in the workshop, run:

```bash
workshopper run [SUBMISSION_FILE]
```

### Verify your submission
To verify your submission for an excercise in the workshop, run:

```bash
workshopper verify [SUBMISSION_FILE]
```

## Example user journey
Here is an example journey for a user using workshopper.

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

## Building for the workshopper
To configure your workshop to be compatible with the workshopper, your workshop requires

**1. Branches**
Chapters in the workshopper are defined by the branches of the repository, so be purposeful about the branch naming as that
will be the name for the various chaptes for you workshop.

**2. Make _start_**
For each branch on your workshop you need to support the `make start` command and have this command echo out raw markdown as the
introduction to your chapter and instructions for completing the workshop chapter.

**3. Make _run_**
For each branch on your workshop you need to support the `make run` command and have the command receive the path to the submission
file to run for the chapter. This is highly dependent on the workshop's branch excercise.

**4. Make _verify_**
For each branch on your workshop you need to support the `make verify` command and have the command receive the path to your
submission file to verify that the excercise as pertaining to the chapter has been done correctly.

## Contributing
Thank you for your urge to contribute to the **workshopper** project. 
Please find the contribution instructions in the [CONTRIBUTING](https://github.com/samuelkubai/workshopper/blob/master/CONTRIBUTING.md) file.

## License

MIT
