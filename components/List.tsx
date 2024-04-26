import React from "react";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}
const List: React.FC<ListProps> = ({ children, className }) => {
  return <div className={"grid grid-cols-2"}>{children}</div>;
};

export default List;
