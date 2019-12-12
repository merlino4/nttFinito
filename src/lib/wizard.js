import http from './http'

const WIZARD =
  "https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/wizard_config.json";

const load = () => {
  return http
  .get(WIZARD)
  .then(response => {
    return response.data;
  });
};

const navigate = (selection, tree, numberOfSteps) => {
  if (numberOfSteps <= 0) {
    return undefined;
  }
  if (!tree) {
    return undefined;
  }
  if (!tree.children) {
    return undefined;
  }
  if (!selection) {
    return undefined;
  }
  if (selection.length < numberOfSteps) {
    return undefined;
  }
  const lastElement = selection.reduce((acc, currentSelection) => {
    if (!acc) {
      return acc;
    }
    return acc.children[currentSelection];
  }, tree);
  if (!lastElement) {
    return undefined;
  }
  return lastElement.results;
};

export default {
  navigate,
  load
};
