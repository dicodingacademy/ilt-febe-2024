function extractUrlSegments(url) {
  const splitUrl = url.split('/');

  return {
    resource: splitUrl[1] || null,
  };
}

function combineUrlSegments(urlSegments) {
  let url = '';

  if (urlSegments.resource) {
    url = url.concat(urlSegments.resource);
  }

  return url || '/';
}

export function parseAndCombineActiveUrl() {
  const url = window.location.hash.slice(1).toLowerCase();
  const urlSegments = extractUrlSegments(url);
  return combineUrlSegments(urlSegments);
}
