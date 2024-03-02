import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const MyComponent = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <button onClick={handleShowAlert}>Show Alert</button>
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          This is a success alert!
        </Alert>
      )}
    </div>
  );
};

export default MyComponent;
