// components/UserForm.js
import { Save, X } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ControlledInput from "../Controlled/ControlledInput";
import { userScheme } from "../../schemes/UserScheme";
import { yupResolver } from "@hookform/resolvers/yup";

interface UserFormProps {
  defaultValues: {
    name: string;
    email: string;
    role: string;
    department: string;
  };
  onSubmit: SubmitHandler<FieldValues>;
  setIsEditing: (isEditing: boolean) => void;
}

const UserForm = ({ defaultValues, onSubmit, setIsEditing }: UserFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(userScheme)
  });

  const submitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
      {Object.keys(defaultValues).map((key) => (
        <ControlledInput
          key={key}
          control={control}
          name={key}
          label={key}
          defaultValue={defaultValues[key]}
          error={errors?.[key]}
        />
      ))}
      <div className="flex space-x-2">
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 
                     transition-colors duration-200 flex items-center justify-center"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 
                     text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 
                     dark:hover:bg-gray-700 transition-colors duration-200 
                     flex items-center justify-center"
        >
          <X className="w-4 h-4 mr-2" />
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
