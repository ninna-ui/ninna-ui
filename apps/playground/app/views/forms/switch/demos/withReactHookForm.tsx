
import { useForm, Controller } from 'react-hook-form';
import { Switch, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  notifications: boolean;
  darkMode: boolean;
  marketing: boolean;
}

export default function WithReactHookForm() {
  const {
    control,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      notifications: true,
      darkMode: false,
      marketing: false,
    },
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
      <Field label="Preferences">
        <div className="space-y-3">
          <Controller
            name="notifications"
            control={control}
            render={({ field }) => (
              <Switch
                label="Enable notifications"
                checked={field.value}
                onCheckedChange={field.onChange}
                ref={field.ref}
              />
            )}
          />

          <Controller
            name="darkMode"
            control={control}
            render={({ field }) => (
              <Switch
                label="Dark mode"
                checked={field.value}
                onCheckedChange={field.onChange}
                ref={field.ref}
              />
            )}
          />

          <Controller
            name="marketing"
            control={control}
            render={({ field }) => (
              <Switch
                label="Marketing emails"
                checked={field.value}
                onCheckedChange={field.onChange}
                ref={field.ref}
              />
            )}
          />
        </div>
      </Field>

      <Button type="submit" fullWidth>
        Save Preferences
      </Button>
    </form>
  );
}
