import React, { createContext, useContext, useState } from "react";

const ExamAccessContext = createContext();

export const useExamAccess = () => useContext(ExamAccessContext);

export const ExamAccessProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false);

  return (
    <ExamAccessContext.Provider value={{ hasAccess, setHasAccess }}>
      {children}
    </ExamAccessContext.Provider>
  );
};
