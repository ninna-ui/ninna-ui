
import { useForm } from 'react-hook-form';
import { Textarea, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  message: string;
  bio: string;
}

export default function WithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
      <Field
        label="Message"
        errorText={errors.message?.message}
        invalid={!!errors.message}
        required
      >
        <Textarea
          placeholder="Enter your message"
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
        />
      </Field>

      <Field
        label="Bio"
        helperText="Tell us about yourself (max 200 characters)"
        errorText={errors.bio?.message}
        invalid={!!errors.bio}
      >
        <Textarea
          placeholder="Write a short bio..."
          maxLength={200}
          showCounter
          {...register('bio', {
            maxLength: {
              value: 200,
              message: 'Bio cannot exceed 200 characters',
            },
          })}
        />
      </Field>

      <Button type="submit" fullWidth>
        Submit
      </Button>
    </form>
  );
}
