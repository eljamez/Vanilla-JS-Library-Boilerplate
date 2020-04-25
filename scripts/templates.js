function propTypeSnippet() {
  return `import React, { FunctionComponent } from 'react';
  import styles from './styles/MyComponent.scss';

  type MyComponentProps = {
      onClick: () => void;
      someProp: string;
  };

  const MyComponent: FunctionComponent<MyComponentProps> = props => {
      const { onClick, someProp } = props;
      return (
          <div onClick={onClick} className={styles.someWrapper}>
              Showing prop: {someProp}
          </div>
      );
  };

  export default MyComponent;
`;
}
module.exports = {
  test: `console.log('test')`,
  npmrc: `registry=http://npm.intranet.1stdibs.com:4783/
`,
  jestConfig: `const getJestConfig = require('../../config/getJestConfig');

module.exports = getJestConfig({ projectDir: __dirname });
`,
  exportFile: `import MyComponent from '../src/MyComponent'
  export default MyComponent;
`,
  srcFile: propTypeSnippet(),
  scssFile: `.someWrapper {
      height: 100px;
  }
  `,
  testFile: `import React from 'react';
  import { shallow } from 'enzyme';
  import MyComponent from '../MyComponent';

  describe('My Component', () => {
      xit('should render', () => {
          const onClick = jest.fn();
          const wrapper = shallow(<MyComponent onClick={onClick} someProp='test' />);
          wrapper.simulate('click');
          expect(onClick).toHaveBeenCalled();
      });
  });
  `,
  storyFile: (config) => `import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { storyWrapper } from 'dibs-story-utils';

import MyComponent from '../MyComponent';

const baseStoryName = 'Resources|Modules/*** My Package Context ***';

storiesOf(baseStoryName, module)
  .addDecorator(
      storyWrapper({
          baseStoryName,
          packageName: '${config.packageName}',
          title: 'My Component',
          userTypes: ['buyer', 'seller', 'internal'],
      })
  )
  .add('default', () => <MyComponent onClick={action('onClick')} someProp="story" />);
  `,
  packageJsonObject: ({ packageName, useRelay, useStorybook }) => {
    const dibsCompile = {
      dibs: {
        compile: {
          js: {
            includes: ["exports/**", "src/**"],
          },
        },
      },
    };
    if (useRelay) {
      dibsCompile.dibs.compile.relay = {
        includes: ["exports/**", "src/**"],
      };
    }
    const scripts = {
      test: `../../node_modules/.bin/jest`,
    };
    if (useStorybook) {
      scripts.storybook = `cd ../.. && yarn storybooks --only ${packageName}`;
    }
    return {
      name: packageName,
      private: true,
      version: "1.0.0",
      author: "1stdibs, Inc.",
      ...dibsCompile,
      scripts,
    };
  },
};
