
import { useForm } from 'react-hook-form';
import { Input, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  email: string;
  password: string;
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
        label="Email"
        errorText={errors.email?.message}
        invalid={!!errors.email}
        required
      >
        <Input
          type="email"
          placeholder="Enter your email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
      </Field>

      <Field
        label="Password"
        errorText={errors.password?.message}
        invalid={!!errors.password}
        required
      >
        <Input
          type="password"
          placeholder="Enter your password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
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
