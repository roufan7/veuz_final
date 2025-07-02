import React, { useState } from "react";
import Modal from "../components/Modal";
import WorkShopModal from "../components/workShopModal";
import ListView from "../components/TempView";
import FormView from "../components/formView";
import SummaryView from "../components/summaryView";
import ThankYouPage from "../components/thankyou";

const TicketListing = () => {
  const [isWorkOpen, setIsWorkOpen] = useState(true);
  const [view, setView] = useState("WORKSHOP");
  const [currentStep, setCurrentStep] = useState(1)
  const [gitex, setGitex] = useState(false)


  const handleNext = () => {
    if (currentStep < 4) {
      if (currentStep === 3) {
        setView('SUMMARY')
        setCurrentStep(currentStep + 1)
        window.scrollTo({ top: 0, behavior: 'smooth' });

      }
      else {
        setCurrentStep(currentStep + 1)
        window.scrollTo({ top: 0, behavior: 'smooth' });

      }
    }
    else if (currentStep === 4) {
      setView('THANKS')
      window.scrollTo({ top: 0, behavior: 'smooth' });

    }

  }
  const handlePrevious = () => {
    if (currentStep > 1) {
      if (currentStep === 4) {
        setView('FORM')
      }
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' });

    }
  }
  return (
    <>
      {view === "WORKSHOP" ? (
        <Modal
          isOpen={isWorkOpen}
          onClose={() => {
            setIsWorkOpen(false);
            setView("LIST");
          }}
          title="SELECT WORKSHOPS"
          onApply={() => { setIsWorkOpen(false); setView('LIST') }}
        >
          <WorkShopModal />
        </Modal>
      ) : view === "LIST" ? (
        <>
          <ListView setView={setView} setCurrentStep={setCurrentStep} setGitex={setGitex} />
        </>
      ) : view === "FORM" ? (
        <>
          <FormView currentStep={currentStep} handlePrevious={handlePrevious} handleNext={handleNext} gitex={gitex} />
        </>
      ) :
        view === "SUMMARY" ?
          <>
            <SummaryView currentStep={currentStep} handlePrevious={handlePrevious} handleNext={handleNext} gitex={gitex} />
          </>
          :
          view === 'THANKS' ?
            <>
              <ThankYouPage setView={setView} />
            </>
            :
            (
              <></>
            )}
    </>
  );
};

export default TicketListing;
