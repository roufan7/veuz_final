import React, { useState } from "react";
import Modal from "../components/Modal";
import WorkShopModal from "../components/workShopModal";
import ListView from "../components/ListView";
import FormView from "../components/formView";
import SummaryView from "../components/summaryView";
import ThankYouPage from "../components/thankyou";
import { useFormik } from 'formik';

const TicketListing = () => {
  const [isWorkOpen, setIsWorkOpen] = useState(true);
  const [view, setView] = useState("WORKSHOP");
  const [currentStep, setCurrentStep] = useState(1)
  const [gitex, setGitex] = useState(false)

  const formik = useFormik({
    initialValues: [
      {
        firstName: '',
        lastName: '',
        country: '',
        region: '',
        email: '',
        confirmEmail: '',
        nationality: '',
        mobile: '',
        companyName: '',
        jobTitle: '',
        companyType: '',
        industry: '',
        interestedProducts: [],
        workshops: [],
      },
      {
        firstName: '',
        lastName: '',
        country: '',
        region: '',
        email: '',
        confirmEmail: '',
        nationality: '',
        mobile: '',
        companyName: '',
        jobTitle: '',
        companyType: '',
        industry: '',
        interestedProducts: [],
        workshops: [],
      },
      {
        firstName: '',
        lastName: '',
        country: '',
        region: '',
        email: '',
        confirmEmail: '',
        nationality: '',
        mobile: '',
        companyName: '',
        jobTitle: '',
        companyType: '',
        industry: '',
        interestedProducts: [],
        workshops: [],
      },
    ],
    validate: (values) => {
      const errors = [{}, {}, {}]; // One object per step
      const current = values[currentStep - 1];
      let hasError = false;

      if (!current.firstName) {
        errors[currentStep - 1].firstName = 'First name is required';
        hasError = true;
      }
      if (!current.lastName) {
        errors[currentStep - 1].lastName = 'Last name is required';
        hasError = true;
      }

      if (currentStep - 1 === 0) {
        if (!current.country) {
          errors[0].country = 'Country is required';
          hasError = true;
        }
        if (!current.region) {
          errors[0].region = 'Region is required';
          hasError = true;
        }

        if (!current.email) {
          errors[0].email = 'Email address is required';
          hasError = true;
        } else if (!/^\S+@\S+\.\S+$/.test(current.email)) {
          errors[0].email = 'Invalid email';
          hasError = true;
        }

        if (!current.confirmEmail) {
          errors[0].confirmEmail = 'Confirm email address is required';
          hasError = true;
        } else if (current.confirmEmail !== current.email) {
          errors[0].confirmEmail = 'Emails must match';
          hasError = true;
        }

        if (!current.nationality) {
          errors[0].nationality = 'Nationality is required';
          hasError = true;
        }

        if (!current.mobile) {
          errors[0].mobile = 'Mobile number is required';
          hasError = true;
        } else if (!/^\d+$/.test(current.mobile)) {
          errors[0].mobile = 'Mobile number must be numeric';
          hasError = true;
        } else if (current.mobile.toString().length < 7) {
          errors[0].mobile = 'Mobile number is too short';
          hasError = true;
        } else if (current.mobile.toString().length > 15) {
          errors[0].mobile = 'Mobile number is too long';
          hasError = true;
        }

        if (!current.companyName) {
          errors[0].companyName = 'Company name is required';
          hasError = true;
        }
        if (!current.jobTitle) {
          errors[0].jobTitle = 'Job title is required';
          hasError = true;
        }
        if (!current.companyType) {
          errors[0].companyType = 'Company type is required';
          hasError = true;
        }
        if (!current.industry) {
          errors[0].industry = 'Industry is required';
          hasError = true;
        }

        if (!Array.isArray(current.interestedProducts) || current.interestedProducts.length === 0) {
          errors[0].interestedProducts = 'Select at least one product or service';
          hasError = true;
        }

        if (!Array.isArray(current.workshops) || current.workshops.length === 0) {
          errors[0].workshops = 'Select at least one workshop';
          hasError = true;
        } else if (current.workshops.length > 6) {
          errors[0].workshops = 'You can select up to 6 workshops';
          hasError = true;
        }
      }

      return hasError ? errors : {};
    },

    onSubmit: async (values) => {

      handleNext()
    },
  });
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
          <FormView formik={formik} currentStep={currentStep} handlePrevious={handlePrevious} handleNext={handleNext} gitex={gitex} />
        </>
      ) :
        view === "SUMMARY" ?
          <>
            <SummaryView currentStep={currentStep} handlePrevious={handlePrevious} handleNext={handleNext} gitex={gitex} />
          </>
          :
          view === 'THANKS' ?
            <>
              <ThankYouPage formik={formik} setView={setView} />
            </>
            :
            (
              <></>
            )}
    </>
  );
};

export default TicketListing;
