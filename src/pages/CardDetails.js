import { React, useState, useEffect } from "react";
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
              validate={(values) => {
                return !values.cardHolderName
                  ? { cardHolderName: "Can't be blank" }
                  : !/^[a-zA-Z\s]+$/gi.test(values.cardHolderName)
                  ? { cardHolderName: "Invalid Cardholder Name" }
                  : !values.cardNumber
                  ? { cardNumber: "Can't be blank" }
                  : !/^[0-9]+$/.test(values.cardNumber)
                  ? { cardNumber: "Wrong format, numbers only" }
                  : !values.expMonth
                  ? { expMonth: "Can't be blank" }
                  : !/^[0-9]+$/.test(values.expMonth)
                  ? { expMonth: "Invalid Card Month" }
                  : !values.expYear
                  ? { expYear: "Can't be blank" }
                  : !/^[0-9]+$/.test(values.expYear)
                  ? { expYear: "Invalid Card Year" }
                  : !values.cvc
                  ? { cvc: "Can't be blank" }
                  : !/^[0-9]+$/.test(values.cvc)
                  ? { cvc: "Invalid Card CVC" }
                  : !values.cardNumber;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting, values }) => (
                <Form>
                  <div class="mb-6">
                    <label class="block mb-1.5 font-space text-purple font-semibold text-sm tracking-widest">
                      CARDHOLDER NAME
                    </label>
                    <Field
                      type="cardHolderName"
                      name="cardHolderName"
                      placeholder="e.g. Jane Appleseed"
                      class="border rounded-md border-purple-50 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-76"
                    />
                    <ErrorMessage
                      class="absolute w-34 top-15 text-sm text-red font-space"
                      name="cardHolderName"
                      component="div"
                    />
                  </div>
                  <div class="mb-6">
                    <label class="block mb-1.5 font-space text-purple font-semibold text-sm tracking-widest">
                      CARD NUMBER
                    </label>
                    <Field
                      type="cardNumber"
                      name="cardNumber"
                      minLength={16}
                      maxLength={16}
                      placeholder="e.g. 1234 5678 9123 0000"
                      class="border rounded-md border-purple-50 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-76"
                    />
                    <ErrorMessage
                      class="absolute w-38 top-35  text-sm text-red font-space"
                      name="cardNumber"
                      component="div"
                    />
                  </div>
                  <div class="mb-8">
                    <label class="block h-0 font-space text-purple font-semibold text-sm tracking-widest">
                      EXP. DATE (MM/YY)
                    </label>
                    <Field
                      type="expMonth"
                      name="expMonth"
                      minLength={2}
                      maxLength={2}
                      placeholder="MM"
                      class="border rounded-md border-purple-50 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-16"
                    />
                    <ErrorMessage
                      class="absolute w-38 left-0 top-55  text-sm text-red font-space"
                      name="expMonth"
                      component="div"
                    />
                    <Field
                      type="expYear"
                      name="expYear"
                      minLength={2}
                      maxLength={2}
                      placeholder="YY"
                      class="border rounded-md border-purple-50 ml-2 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-16"
                    />
                    <ErrorMessage
                      class="absolute w-38 left-17 top-55  text-sm text-red font-space"
                      name="expYear"
                      component="div"
                    />
                    <div class="inline-block pl-4">
                      <label class="block mb-1.5 font-space text-purple font-semibold text-sm tracking-widest">
                        CVC
                      </label>
                      <Field
                        type="cvc"
                        name="cvc"
                        minLength={3}
                        maxLength={3}
                        placeholder="e.g. 123"
                        class="border rounded-md border-purple-50 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-38"
                        errorClass="border rounded-md border-red-50"
                      />
                      <ErrorMessage
                        class="absolute w-38 left-38 top-55 text-sm text-red font-space"
                        name="cvc"
                        component="div"
                      />
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
