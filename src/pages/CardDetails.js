import React from "react";
import MainBg from "./../assets/images/bg-main-desktop.png";
import CardFrontBg from "./../assets/images/bg-card-front.png";
import CardBackBg from "./../assets/images/bg-card-back.png";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CardDetails() {
  return (
    <>
      <div class="grid grid-cols-2 divide-x">
        <div>
          <img
            src={CardFrontBg}
            width={380}
            class="z-10 absolute top-36 left-52 drop-shadow-2xl"
          />
          <img
            src={CardBackBg}
            width={380}
            class="z-10 absolute top-96 left-72 drop-shadow-2xl"
          />
          <div>
            <img src={MainBg} class="h-screen w-1/3 absolute z-0" />
          </div>
        </div>

        <div class="border-none absolute top-58 right-80">
          <div>
            <Formik
              initialValues={{
                cardHolderName: "",
                cardNumber: "",
                expMonth: "",
                expYear: "",
                cvc: "",
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div class="mb-6">
                    <label class="block mb-1.5 font-space text-purple font-semibold text-sm tracking-widest">
                      CARDHOLDER NAME
                    </label>
                    <Field
                      required
                      type="cardHolderName"
                      name="cardHolderName"
                      placeholder="e.g. Jane Appleseed"
                      class="border rounded-md border-black-50 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-76"
                    />
                    <ErrorMessage name="cardHolderName" component="div" />
                  </div>
                  <div class="mb-6">
                    <label class="block mb-1.5 font-space text-purple font-semibold text-sm tracking-widest">
                      CARD NUMBER
                    </label>
                    <Field
                      type="cardNumber"
                      name="cardNumber"
                      placeholder="e.g. 1234 5678 9123 0000"
                      class="border rounded-md border-black-50 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-76"
                    />
                    <ErrorMessage name="cardNumber" component="div" />
                  </div>
                  <div class="mb-8">
                    <label class="block h-0 font-space text-purple font-semibold text-sm tracking-widest">
                      EXP. DATE (MM/YY)
                    </label>
                    <Field
                      type="expMonth"
                      name="expMonth"
                      placeholder="MM"
                      class="border rounded-md border-black-50 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-16"
                    />
                    <ErrorMessage name="expMonth" component="div" />
                    <Field
                      type="expYear"
                      name="expYear"
                      placeholder="YY"
                      class="border rounded-md border-black-50 ml-2 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-16"
                    />
                    <ErrorMessage name="expYear" component="div" />
                    <div class="inline-block pl-4">
                      <label class="block mb-1.5 font-space text-purple font-semibold text-sm tracking-widest">
                        CVC
                      </label>
                      <Field
                        type="cvc"
                        name="cvc"
                        placeholder="e.g. 123"
                        class="border rounded-md border-black-50 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-38"
                      />
                      <ErrorMessage name="cvc" component="div" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="bg-purple font-space font-thin text-base text-white w-76 h-10 py-2 px-4 rounded-md"
                    disabled={isSubmitting}
                  >
                    Confirm
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetails;
