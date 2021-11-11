import "./App.css";
import { UncontrolledOnboardingFlow } from "./UncontrollerDesingPattern/UncontrolledOnboarding.Flow";
import { ControlledOnboardingFlow } from "./ControllerDesignPattern/ControlledOnboardingFlow";
const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  //this is for controlled onboarding flow
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="App">
      <>
        <ControlledOnboardingFlow onNext={onNext} currentIndex={currentIndex}>
          <StepOne />
          <StepTwo />
          {onboardingData.age >= 62 && <StepThree />}
          <StepFour />
        </ControlledOnboardingFlow>
        {/* 
        --------------Uncontrolled DesignPattern------------------
        <UncontrolledOnboardingFlow
          onFinish={(data) => {
            console.log("final data", data);
            console.log("Onboarding completed");
          }}
        >
          
            uncontrolled desing patter doenot have much control over child
            - suppose if we have to hide step2 on certain condition then , with this apporach we cannot do that 
            - hence Controllerd design patter can be used to have much control over children
         
          <StepOne />
          <StepTwo />
          <StepThree />
        </UncontrolledOnboardingFlow> */}
      </>
    </div>
  );
}

export default App;
{
  /* 
       --------------- Container Component Desing Pattern Example------
        <ResourceLoader resourceUrl="/users/123" resourceName="user">
          <UserInfo />
        </ResourceLoader>
        <ResourceLoader resourceUrl="/products/1234" resourceName="product">
          <ProductInfo />
        </ResourceLoader> */
}
