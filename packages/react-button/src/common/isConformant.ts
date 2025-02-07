import { isConformant as baseIsConformant } from '@fluentui/react-conformance';
import type { IsConformantOptions, TestObject } from '@fluentui/react-conformance';
import griffelTests from '@fluentui/react-conformance-griffel';

export function isConformant<TProps = {}>(
  testInfo: Omit<IsConformantOptions<TProps>, 'componentPath'> & { componentPath?: string },
) {
  const defaultOptions: Partial<IsConformantOptions<TProps>> = {
    asPropHandlesRef: true,
    componentPath: require!.main!.filename.replace('.test', ''),
    disabledTests: [
      'has-docblock',
      'kebab-aria-attributes',
      'component-has-static-classname',
      'component-has-static-classname-exported',
    ],
    extraTests: griffelTests as TestObject<TProps>,
    skipAsPropTests: true,
  };

  baseIsConformant(defaultOptions, testInfo);
}
