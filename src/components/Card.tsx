import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  isExpanded: boolean;
  onClick: () => void;
}

const Card = ({
  title,
  icon: Icon,
  children,
  isExpanded,
  onClick
}: CardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <div
        className="p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="w-5 h-5 text-blue-500" />}
            <h2 className="text-lg font-semibold dark:text-white">{title}</h2>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>
      {isExpanded && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Card;
