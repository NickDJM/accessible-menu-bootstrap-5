/**
 * @file
 * A custom updater for standard-version that finds all instances of the
 * version in the README file and updates them.
 */

/**
 * Get the current version of the README file.
 *
 * @param  {string} contents - The contents of the file.
 * @return {string}          - The version number.
 */
module.exports.readVersion = (contents) => {
  try {
    const version = contents
      .match(/\/accessible-menu-bootstrap-5@\d+\.\d+\.\d+(-.*?\.\d+)?\//)[0]
      .replace("accessible-menu-bootstrap-5@", "");

    return version;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Update all instances of the version of the README file.
 *
 * @param  {string} contents - The contents of the file.
 * @param  {string} version  - The new version number.
 * @return {string}          - The new contents of the file.
 */
module.exports.writeVersion = (contents, version) => {
  return contents.replace(
    /\/accessible-menu-bootstrap-5@\d+\.\d+\.\d+(-.*?\.\d+)?\//g,
    `/accessible-menu-bootstrap-5@${version}/`
  );
};
