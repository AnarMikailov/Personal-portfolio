// import React, { useContext, createContext, useState, useEffect } from 'react';
// const LoaderContext = createContext();

// export const ContextProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 1200);
//   }, []);
//   return (
//     <LoaderContext.Provider value={{ loading, setLoading }}>
//       {children}
//     </LoaderContext.Provider>
//   );
// };
// export const useStateContext = () => useContext(LoaderContext);
