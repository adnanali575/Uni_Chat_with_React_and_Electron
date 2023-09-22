import React, { ReactNode } from "react";

interface DefaultPagesLayout {
  content: ReactNode;
}

const DefaultPagesLayout: React.FC<DefaultPagesLayout> = ({ content }) => {
  return <div>{content}</div>;
};

export default DefaultPagesLayout;
