import uuid from 'uuid/v4'

function newVersion (parentUUID) {
  return {
    uuid: uuid(),
    parentUUID,
    name: Math.random() * 100
  }
}

export const generateVersions = num => {
  const result = [newVersion()]
  let counter = 0
  for (let i = 1; i < num; i++) {
    result.push(newVersion(result[counter].uuid))
    counter += 2
    if (counter > i) counter = 0
  }
  return result
}

export function sortVersions (versions) {
  const result = {}
  result[versions[0].uuid] = {}
  versions.forEach(version => {
    findParent(result, version)
  })
  return result
}

function findParent (obj, version) {
  Object.keys(obj).forEach(key => {
    if (version.parentUUID === key) {
      obj[key][version.uuid] = {}
    } else {
      findParent(obj[key], version)
    }
  })
}
