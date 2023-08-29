import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../API/api";

const AppCtx = createContext();

function AppProvider({ children }) {
  // const database = [
  //     {
  //       id: 1,
  //       name: "sudhir",
  //       batch: "B47",
  //       email: "dfguhh@gmail.com",
  //       phone: 87766964479,
  //       qualification: "B.E",
  //     },
  //     {
  //       id: 2,
  //       name: "VICKY",
  //       batch: "B47",
  //       email: "dfguhh@gmail.com",
  //       phone: 87766964479,
  //       qualification: "B.E",
  //     },
  //   ];
  const pages = [
    {
      name: "students",
      path: "/student/all",
    },
  ];

  const [studentData, setData] = useState([]);
  const [crumState, setCrumState] = useState(pages);

  useEffect(() => {
    const getAllStudents = async () => {
      const response = await fetch(API, {
        method: "GET",
      });

      const data = await response.json();
      setData(data);
    };
    getAllStudents();
  }, []);

  return (
    <AppCtx.Provider
      value={{
        studentData,
        setData,
        crumState,
        setCrumState,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
}

export const AppState = () => {
  return useContext(AppCtx);
};
export default AppProvider;
