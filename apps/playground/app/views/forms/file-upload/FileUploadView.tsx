import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from '~/components/docs';
import { Code } from "@ninna-ui/primitives";
import { fileUploadMeta } from './meta';

import Basic from './demos/basic';
import ImageOnly from './demos/imageOnly';
import Multiple from './demos/multiple';
import Validation from './demos/validation';
import Sizes from './demos/sizes';
import States from './demos/states';
import ShowFileList from './demos/showFileList';
import AllowDrag from './demos/allowDrag';
import WithReactHookForm from './demos/withReactHookForm';

export const fileUploadSections: ComponentSectionType[] = [
  { id: 'usage', title: 'Usage', level: 2 },
  { id: 'image-only', title: 'Image Only', level: 3 },
  { id: 'multiple', title: 'Multiple Files', level: 3 },
  { id: 'validation', title: 'Validation', level: 3 },
  { id: 'sizes', title: 'Sizes', level: 3 },
  { id: 'show-file-list', title: 'Show File List', level: 3 },
  { id: 'allow-drag', title: 'Allow Drag', level: 3 },
  { id: 'states', title: 'States', level: 3 },
  { id: 'react-hook-form', title: 'React Hook Form', level: 3 },
  { id: 'api', title: 'API Reference', level: 2 },
  { id: 'accessibility', title: 'Accessibility', level: 2 },
];

const FILE_UPLOAD_PROPS: PropDefinition[] = [
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Size of the file upload component',
  },
  {
    name: 'accept',
    type: 'string',
    description: 'Accepted file types (e.g., "image/*", ".pdf")',
  },
  {
    name: 'multiple',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Allow multiple file selection',
  },
  {
    name: 'maxFileSize',
    type: 'number',
    description: 'Maximum file size in bytes',
  },
  {
    name: 'maxFiles',
    type: 'number',
    defaultValue: '10',
    description: 'Maximum number of files',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the upload is disabled',
  },
  {
    name: 'required',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field is required',
  },
  {
    name: 'invalid',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the upload is in an invalid state',
  },
  {
    name: 'onFilesChange',
    type: '(files: File[]) => void',
    description: 'Callback when files are selected',
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label for the upload area',
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Helper text below the upload area',
  },
  {
    name: 'showFileList',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Show file list after selection',
  },
  {
    name: 'allowDrag',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Allow drag and drop',
  },
];

const BASIC_USAGE = `import { FileUpload } from "@ninna-ui/forms";

export default function Example() {
  return (
    <FileUpload
      label="Upload files"
      accept="image/*"
      onFilesChange={(files) => console.log(files)}
    />
  );
}`;

export function FileUploadView() {
  return (
    <div className="">
      <ComponentHeader meta={fileUploadMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the FileUpload component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic file upload with drag and drop."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/file-upload/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="image-only"
          title="Image Only"
          description="Restrict uploads to image files only."
          level={3}
        >
          <CodePreview
            component={<ImageOnly />}
            filePath="app/views/forms/file-upload/demos/imageOnly.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="multiple"
          title="Multiple Files"
          description="Allow uploading multiple files at once."
          level={3}
        >
          <CodePreview
            component={<Multiple />}
            filePath="app/views/forms/file-upload/demos/multiple.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="validation"
          title="Validation"
          description="File validation with size limits and rejection handling."
          level={3}
        >
          <CodePreview
            component={<Validation />}
            filePath="app/views/forms/file-upload/demos/validation.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="FileUpload in different sizes."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/file-upload/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="show-file-list"
          title="Show File List"
          description="Control whether to display uploaded files list."
          level={3}
        >
          <CodePreview
            component={<ShowFileList />}
            filePath="app/views/forms/file-upload/demos/showFileList.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="allow-drag"
          title="Allow Drag"
          description="Enable or disable drag and drop functionality."
          level={3}
        >
          <CodePreview
            component={<AllowDrag />}
            filePath="app/views/forms/file-upload/demos/allowDrag.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="states"
          title="States"
          description="Different states of the file upload."
          level={3}
        >
          <CodePreview
            component={<States />}
            filePath="app/views/forms/file-upload/demos/states.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="FileUpload works with React Hook Form using the Controller pattern."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/file-upload/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the FileUpload component."
        >
          <PropsTable data={FILE_UPLOAD_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Keyboard accessible - can be activated with <Code>Enter</Code> or <Code>Space</Code></li>
              <li>Uses <Code>aria-disabled</Code> and <Code>aria-invalid</Code> for disabled and invalid states</li>
              <li>File input is properly labeled for screen readers via <Code>aria-label</Code></li>
              <li>File list items have accessible remove buttons with descriptive <Code>aria-label</Code></li>
              <li>Drag and drop zone is keyboard focusable with <Code>role="button"</Code></li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
