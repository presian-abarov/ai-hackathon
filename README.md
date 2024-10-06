# ai-hackathon

This project is focused on building an automated pipeline for the tag generation of a collection of texts. Additionally, there is a React frontend and FastAPI backend. The pipeline consists of the steps illustrated in the following diagram:

![Complete pipeline](taggpt.drawio.svg)

Check Project and Issues tabs for ongoing tasks.

## Prerequisites
### Git LFS
We use Git LFS to store large files such as model files and outputs of long-running tasks. Please install Git LFS before cloning the repository. You can find installation instructions [here](https://git-lfs.github.com/). 

Make sure to pull all the files using `git lfs pull` after cloning the repository.

### Running the project
#### AI Pipeline
1. Install the required packages into a fresh conda/miniconda environment using `conda env create -f environment.yml`
2. Activate the environment using `conda activate TagGPT`
3. Run the Jupyter notebook `pipeline.ipynb` to run the pipeline

The pipeline may take a while to run depending on the dataset. For this demo, we chose a 2000 document sample of the `20newsgroups` dataset.

There are "checkpoints" of the various stages of the pipeline as follows:
1. `embeddings_reduced.npy` contains the embeddings of the documents after the embedding step.
2. `model_reduced` folder contains the trained model after reducing the dimensionality of the embeddings and clustering step. The `topics` and `probabilities` (of a document belonging to a topic) are stored in `topics_reduced.npy` and `probs_reduced.npy` respectively. **Note**: The model is saved again into `model_reduced` after the LLM prompt engineering step.
3. `extensions/_cache/mistral.json` is a file that continuously outputs each result at the LLM prompt engineering stage, where the tags for each of the clusters are generated.
4. `tags.json` and `overarching_tags.json` is the final output of the pipeline after the zeroshot text classification step, where for each document we get its tags and the confidences that each tag belongs to the document.

**Note**: Multiple comments in the pipeline notebook are `Only run once` to avoid re-running expensive steps each time. If you wish to re-run the pipeline, please uncomment these lines, and comment the lines which load the saved models and files.

#### FastAPI Backend
... TODO 

#### Frontend
1. Install the required packages using `npm install` or `yarn install`
2. Run the frontend using `npm start` or `yarn start`

## ⚒️ TODOs
- [ ] Take the code from pipeline.ipynb and convert it into a python script in the FastAPI backend
- [ ] Expose the python script as an API endpoint that can be called from the frontend
- [ ] Standardize requirements file (`environment.yml` and `requirements.txt`)