import React, { useState } from "react";

const NameContext = React.createContext({
  name: "",
  setName: () => {},
});

// eslint-disable-next-line react/prop-types
function NameContextProvider({ children }) {
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameContextProvider;

export const useNameContext = () => React.useContext(NameContext);
