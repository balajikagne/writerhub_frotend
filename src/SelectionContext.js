import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

export function SelectionProvider({ children }) {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
    setSelectedDepartment(null);
    setSelectedYear(null);
    setSelectedData(null); // Reset data selection
  };

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setSelectedYear(null);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const handleDataSelect = (data) => {
    setSelectedData(data);
  };

  return (
    <SelectionContext.Provider
      value={{
        selectedUniversity,
        selectedDepartment,
        selectedYear,
        selectedData,
        handleUniversitySelect,
        handleDepartmentSelect,
        handleYearSelect,
        handleDataSelect, // Add to the provider
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}
