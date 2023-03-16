export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g // Encontrar parâmetros dinâmicos no path da url
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`) // URL precisa começar com a regex

  return pathRegex
}