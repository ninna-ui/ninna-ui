
import { useForm, Controller } from 'react-hook-form';
import { FileUpload, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  document: File | null;
}

export default function WithReactHookForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      document: null,
    },
  });

  const onSubmit = (data: FormData) => {
    alert(`File selected: ${data.document?.name || 'None'}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
      <Field
        label="Upload Document"
        helperText="PDF, DOC, or DOCX up to 10MB"
        errorText={errors.document?.message}
        invalid={!!errors.document}
        required
      >
        <Controller
          name="document"
          control={control}
          rules={{ required: 'Please select a file' }}
          render={({ field }) => (
            <FileUpload
              accept=".pdf,.doc,.docx"
              maxFileSize={10 * 1024 * 1024}
              onFilesChange={(files: File[]) => field.onChange(files?.[0] || null)}
              invalid={!!errors.document}
            />
          )}
        />
      </Field>

      <Button type="submit">
        Submit
      </Button>
    </form>
  );
}
