import React, { createContext, useState } from 'react';

export const SelectionContext = createContext();

export function SelectionProvider({ children }) {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
    setSelectedDepartment(null);
    setSelectedYear(null);
  };

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setSelectedYear(null);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  return (
    <SelectionContext.Provider
      value={{
        selectedUniversity,
        selectedDepartment,
        selectedYear,
        handleUniversitySelect,
        handleDepartmentSelect,
        handleYearSelect,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

