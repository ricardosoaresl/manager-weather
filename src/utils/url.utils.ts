export const formatUrl = <T>(url: string, params: Array<any>): string | T => {
  return url.replace(/{(\d+)}/g, (match, number) => {
    return typeof params[number] != 'undefined' ? params[number] : match;
  });
};
