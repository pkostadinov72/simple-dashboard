// components/ControlledInput.js
import { Control, Controller, FieldError, FieldValues } from "react-hook-form";

interface ControlledInputProps {
  control: Control<FieldValues>;
  name: string;
  label?: string;
  defaultValue?: string | number;
  error?: FieldError;
  [key: string]: any;
}

const ControlledInput = ({
  control,
  name,
  label,
  defaultValue = "",
  error,
  ...rest
}: ControlledInputProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
        {label || name}
      </label>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            <input
              {...field}
              {...rest}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
                       dark:bg-gray-700 dark:text-white"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default ControlledInput;
