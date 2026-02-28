
import { useForm, Controller } from 'react-hook-form';
import { Field, Input, Textarea, Checkbox, Select, SelectItem } from '@ninna-ui/forms';

interface FormData {
  name: string;
  email: string;
  bio: string;
  country: string;
  terms: boolean;
}

export default function UsageGuide() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        <h4 className="text-lg font-semibold text-base-content">
          Field as Primary Wrapper Pattern
        </h4>
        <p className="text-sm text-base-content/70">
          The Field component is the recommended way to wrap form inputs. It provides:
        </p>
        <ul className="text-sm text-base-content/70 list-disc pl-5 space-y-1">
          <li><strong>Labels</strong> - Properly associated with inputs via htmlFor</li>
          <li><strong>Helper text</strong> - Guidance linked via aria-describedby</li>
          <li><strong>Error messages</strong> - With role="alert" for accessibility</li>
          <li><strong>Required/Optional indicators</strong> - Visual and semantic</li>
          <li><strong>Consistent spacing</strong> - Uniform form layout</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md">
        <Field
          label="Full Name"
          helperText="Enter your first and last name"
          errorText={errors.name?.message}
          invalid={!!errors.name}
          required
        >
          <Input
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
          />
        </Field>

        <Field
          label="Email Address"
          errorText={errors.email?.message}
          invalid={!!errors.email}
          required
        >
          <Input
            type="email"
            placeholder="john@example.com"
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
          label="Bio"
          helperText="Tell us about yourself (max 200 characters)"
          optionalText="Optional"
        >
          <Textarea
            placeholder="A short bio..."
            maxLength={200}
            showCounter
            {...register('bio')}
          />
        </Field>

        <Field
          label="Country"
          errorText={errors.country?.message}
          invalid={!!errors.country}
          required
        >
          <Controller
            name="country"
            control={control}
            rules={{ required: 'Please select a country' }}
            render={({ field }) => (
              <Select
                placeholder="Select a country"
                value={field.value}
                onValueChange={field.onChange}
                invalid={!!errors.country}
              >
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </Select>
            )}
          />
        </Field>

        <Field
          errorText={errors.terms?.message}
          invalid={!!errors.terms}
        >
          <Controller
            name="terms"
            control={control}
            rules={{ required: 'You must accept the terms' }}
            render={({ field }) => (
              <Checkbox
                label="I accept the terms and conditions"
                checked={field.value}
                onCheckedChange={field.onChange}
                invalid={!!errors.terms}
              />
            )}
          />
        </Field>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary/90 text-primary-content rounded-md hover:bg-primary transition-colors"
        >
          Submit
        </button>
      </form>

      <div className="prose max-w-none border-t border-base-300 pt-6">
        <h4 className="text-lg font-semibold text-base-content">
          Integration Patterns
        </h4>
        <div className="text-sm text-base-content/70 space-y-4">
          <div>
            <strong>Native inputs (Input, Textarea):</strong>
            <pre className="bg-base-200 p-2 rounded text-xs mt-1">
{`<Field label="Email" errorText={errors.email?.message}>
  <Input {...register('email')} />
</Field>`}
            </pre>
          </div>
          <div>
            <strong>Controlled components (Select, Checkbox, Switch, Slider):</strong>
            <pre className="bg-base-200 p-2 rounded text-xs mt-1">
{`<Field label="Country" errorText={errors.country?.message}>
  <Controller
    name="country"
    control={control}
    render={({ field }) => (
      <Select value={field.value} onValueChange={field.onChange}>
        ...
      </Select>
    )}
  />
</Field>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
