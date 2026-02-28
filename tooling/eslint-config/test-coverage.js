import path from 'node:path';
import fs from 'node:fs';

/**
 * ESLint rule to enforce test coverage for P0 and P1 components.
 * 
 * Priority levels:
 * - P0 (Critical): Core components that affect product stability and accessibility
 * - P1 (Important): Frequently used components with business or UX impact
 * - P2 (Low Risk): Thin, mostly presentational or layout components (tests optional)
 */

const PRIORITY_MAP = {
  // primitives - P0
  'button': 'P0',
  'input': 'P0',
  'icon-button': 'P0',
  'link': 'P0',
  
  // primitives - P1
  'badge': 'P1',
  'avatar': 'P1',
  'link-overlay': 'P1',
  
  // primitives - P2
  'box': 'P2',
  'blockquote': 'P2',
  'code': 'P2',
  'divider': 'P2',
  'heading': 'P2',
  'kbd': 'P2',
  'list': 'P2',
  'mark': 'P2',
  'text': 'P2',
  
  // feedback - P0
  'alert': 'P0',
  'toast': 'P0',
  
  // feedback - P1
  'circular-progress': 'P1',
  'loading': 'P1',
  'progress': 'P1',
  'skeleton': 'P1',
  'status': 'P1',
  'empty-state': 'P1',
  
  // forms - P0
  'checkbox': 'P0',
  'radio-group': 'P0',
  'select': 'P0',
  'input': 'P0',
  'textarea': 'P0',
  
  // forms - P1
  'field': 'P1',
  'form-control': 'P1',
  'slider': 'P1',
  'switch': 'P1',
  'number-input': 'P1',
  'pin-input': 'P1',
  'file-upload': 'P1',
  
  // forms - P2
  'form-group': 'P2',
  'form-label': 'P2',
  'form-message': 'P2',
  'hidden-field': 'P2',
  'input-group': 'P2',
  
  // layout - P2 (all structural)
  'box': 'P2',
  'center': 'P2',
  'container': 'P2',
  'flex': 'P2',
  'grid': 'P2',
  'h-stack': 'P2',
  'spacer': 'P2',
  'stack': 'P2',
  'v-stack': 'P2',
  'wrap': 'P2',
  
  // overlays - P0
  'modal': 'P0',
  'tooltip': 'P0',
  
  // overlays - P1
  'drawer': 'P1',
  'popover': 'P1',
  'dropdown-menu': 'P1',
  
  // navigation - P0
  'tabs': 'P0',
  
  // navigation - P1
  'accordion': 'P1',
  'pagination': 'P1',
  'breadcrumbs': 'P1',
  'stepper': 'P1',
  
  // data-display - P1
  'card': 'P1',
  'table': 'P1',
  'data-table': 'P1',
  'calendar': 'P1',
  'tree': 'P1',
  
  // data-display - P2
  'stat': 'P2',
  'timeline': 'P2',
  
  // code-block - P1
  'code-block': 'P1',
  
  // hooks - P0
  'use-controllable-state': 'P0',
  'use-disclosure': 'P0',
  
  // hooks - P1
  'use-debounce': 'P1',
  'use-id': 'P1',
  'use-media-query': 'P1',
  'use-previous': 'P1',
  'use-async-state': 'P1',
  'use-keyboard': 'P1',
  
  // hooks - P2
  'use-callback-ref': 'P2',
  'use-composed-refs': 'P2',
  'use-local-storage': 'P2',
  'use-mounted': 'P2',
};

export default {
  rules: {
    'require-tests': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Enforce test files for P0 and P1 components',
          category: 'Best Practices',
          recommended: true,
        },
        messages: {
          missingTest: 'P0/P1 component "{{component}}" (priority: {{priority}}) is missing a test file. Expected: {{expectedPath}}',
          unknownComponent: 'Component "{{component}}" is not in the priority map. Add it to test-coverage.js',
        },
      },
      create(context) {
        const filename = context.getFilename();
        
        // Only check component implementation files in packages/*/src/
        if (!filename.includes('packages') || !filename.includes('/src/')) {
          return {};
        }
        
        // Skip test files themselves
        if (filename.includes('.test.') || filename.includes('__tests__')) {
          return {};
        }
        
        // Skip non-component files
        if (!filename.endsWith('.tsx') || filename.endsWith('.types.tsx') || filename.endsWith('.styles.tsx')) {
          return {};
        }
        
        // Extract component name from path
        const parts = filename.split(path.sep);
        const srcIndex = parts.indexOf('src');
        if (srcIndex === -1 || srcIndex >= parts.length - 1) {
          return {};
        }
        
        const componentName = parts[srcIndex + 1];
        const priority = PRIORITY_MAP[componentName];
        
        // Check if component exists in priority map
        if (!priority) {
          return {
            Program(node) {
              context.report({
                node,
                messageId: 'unknownComponent',
                data: { component: componentName },
              });
            },
          };
        }
        
        // Only enforce tests for P0 and P1
        if (priority === 'P2') {
          return {};
        }
        
        // Check if test file exists
        const packageDir = parts.slice(0, srcIndex).join(path.sep);
        const testPaths = [
          path.join(packageDir, '__tests__', `${componentName}.test.tsx`),
          path.join(packageDir, 'src', componentName, `${componentName}.test.tsx`),
          path.join(packageDir, 'src', `${componentName}.test.tsx`),
        ];
        
        const testExists = testPaths.some(testPath => fs.existsSync(testPath));
        
        if (!testExists) {
          return {
            Program(node) {
              context.report({
                node,
                messageId: 'missingTest',
                data: {
                  component: componentName,
                  priority,
                  expectedPath: testPaths[0],
                },
              });
            },
          };
        }
        
        return {};
      },
    },
  },
};
