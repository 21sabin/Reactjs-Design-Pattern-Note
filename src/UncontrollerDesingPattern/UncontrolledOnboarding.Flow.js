import React, { useState } from "react";

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const gotoNext = (stepData) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...onboardingData,
      ...stepData,
    };
    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }
    setOnboardingData(updatedData);
  };

  const currentChildren = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChildren)) {
    return React.cloneElement(currentChildren, { gotoNext });
  }
  return currentChildren;
};
