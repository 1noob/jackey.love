import { cn } from "@heroui/react";

interface Props {
  className?: string;
}

const Divider: React.FC<Props> = ({ className }) => {
  return (
    <hr className={cn("my-2 border-gray-400 dark:border-gray-600", className)}/>
  );
};

export default Divider;
