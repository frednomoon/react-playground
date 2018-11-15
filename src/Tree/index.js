import React from 'react'

import { generateVersions, sortVersions } from './generator'

const Tree = props => {
  const versions = generateVersions(20)

  const sortedVersions = sortVersions(versions)

  console.log(sortedVersions)
  return (
    <div>
      <svg viewBox='0 0 200 200' >
        {Object.keys(sortedVersions).map((key, i) => (
          <g>
            <circle fill='white' cx={10 + 5 * i} cy='10' r='1' />
            {Object.keys(sortedVersions[key]).map((key2, i) => (
              <g>
                <circle fill='white' cx={10 + 5 * i} cy='20' r='1' />
                {Object.keys(sortedVersions[key][key2]).map((key3, i) => <circle fill='white' cx={10 + 5 * i} cy='30' r='1' />)}
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  )
}

export default Tree
