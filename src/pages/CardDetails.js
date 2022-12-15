import { React, useState } from "react";
import MainBg from "./../assets/images/bg-main-desktop.png";
import CardFrontBg from "./../assets/images/bg-card-front.png";
import CardBackBg from "./../assets/images/bg-card-back.png";
import CardLogo from "./../assets/images/card-logo.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CardDetails() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  const handleCardDisplay = () => {
    const rawText = [...cardNumber.split(" ").join("")];
    const creditCard = [];
    rawText.forEach((t, i) => {
      if (i % 4 === 0) creditCard.push(" ");
      creditCard.push(t);
    });
    return creditCard.join("").trimStart();
  };

  const years = Array.from({ length: 22 }, (value, index) => index + 0);
  const yearsStr = Array.from(years, (year) => year.toString());

  const months = Array.from({ length: 12 }, (value, index) => index + 1);
  const monthsStr = Array.from(months, (month) =>
    month.toString().padStart(2, "0")
  );

  return (
    <>
      <div class="grid grid-cols-2 divide-x">
        <div>
          <div>
            <img
              src={CardFrontBg}
              width={380}
              class="z-10 absolute top-36 left-52 drop-shadow-2xl"
            />
            <img
              src={CardLogo}
              width={80}
              class="z-10 absolute top-42 left-58 drop-shadow-2xl"
            />
            <div class="z-10 absolute top-66 left-58 bg-transparent text-white font-space text-xxl tracking-widest">
              {cardNumber}
            </div>
            <div class="z-10 absolute top-84 left-58 bg-transparent uppercase text-white font-space text-smm tracking-widest">
              {cardName}
            </div>
            <div class="z-10 absolute top-84 left-130 bg-transparent uppercase text-white font-space text-smm tracking-widest">
              {cardMonth}
            </div>
            <div class="z-10 absolute top-84 left-132 bg-transparent uppercase text-white font-space text-smm tracking-widest">
              {cardYear}
            </div>
            <div class="z-10 absolute top-84 left-131 bg-transparent uppercase text-white font-space text-smm tracking-widest">
              /
            </div>
          </div>
          <div>
            <img
              src={CardBackBg}
              width={380}
              class="z-10 absolute top-96 left-72 drop-shadow-2xl"
            />
            <div class="z-10 absolute top-120 left-144 bg-transparent uppercase text-white font-space text-smm tracking-widest">
              {cardCVC}
            </div>
          </div>
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
                const errors = {
                  cardHolderName: !values.cardHolderName
                    ? "Can't be blank"
                    : !/^[a-zA-Z\s]+$/gi.test(values.cardHolderName)
                    ? "Invalid Cardholder Name"
                    : null,
                  cardNumber: !values.cardNumber
                    ? "Can't be blank"
                    : !/^[0-9\s]+$/.test(values.cardNumber)
                    ? "Wrong format, numbers only"
                    : null,
                  expMonth: !values.expMonth
                    ? "Can't be blank"
                    : !/^[0-9]+$/.test(values.expMonth)
                    ? "Wrong format"
                    : !monthsStr.includes(values.expMonth)
                    ? "Invalid Month"
                    : null,
                  expYear: !values.expYear
                    ? "Can't be blank"
                    : !/^[0-9]+$/.test(values.expYear)
                    ? "Wrong format"
                    : yearsStr.includes(values.expYear)
                    ? "Invalid Year"
                    : null,
                  cvc: !values.cvc
                    ? "Can't be blank"
                    : !/^[0-9]+$/.test(values.cvc)
                    ? "Wrong format"
                    : null,
                };

                return Object.values(errors).some((error) => error)
                  ? errors
                  : {};
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting, handleChange, errors, touched }) => (
                <Form>
                  <div class="mb-6">
                    <label class="block mb-1.5 font-space text-purple font-semibold text-sm tracking-widest">
                      CARDHOLDER NAME
                    </label>
                    <Field
                      type="cardHolderName"
                      name="cardHolderName"
                      placeholder="e.g. Jane Appleseed"
                      class="border rounded-md border-gray-200 focus:border-activeColor1 outline-0 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-76"
                      style={{
                        borderColor:
                          errors.cardHolderName && touched.cardHolderName
                            ? "red"
                            : "",
                      }}
                      onChange={(e) => {
                        setCardName(e.target.value);
                        handleChange(e);
                      }}
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
                      minLength={19}
                      maxLength={19}
                      placeholder="e.g. 1234 5678 9123 0000"
                      class="border rounded-md border-gray-200 focus:border-activeColor1 outline-0 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-76"
                      style={{
                        borderColor:
                          errors.cardNumber && touched.cardNumber ? "red" : "",
                      }}
                      validateOnChange={true}
                      value={handleCardDisplay()}
                      onChange={(e) => {
                        setCardNumber(e.target.value);
                        handleChange(e);
                      }}
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
                      class="border rounded-md border-gray-200 focus:border-activeColor1 outline-0 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-16"
                      style={{
                        borderColor:
                          errors.expMonth && touched.expMonth ? "red" : "",
                      }}
                      onChange={(e) => {
                        setCardMonth(e.target.value);
                        handleChange(e);
                      }}
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
                      class="border rounded-md border-gray-200 focus:border-activeColor1 outline-0 ml-2 font-space text-purple p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-16"
                      style={{
                        borderColor:
                          errors.expYear && touched.expYear ? "red" : "",
                      }}
                      onChange={(e) => {
                        setCardYear(e.target.value);
                        handleChange(e);
                      }}
                    />
                    <ErrorMessage
                      class="absolute w-38 left-18 top-55  text-sm text-red font-space"
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
                        class="border rounded-md border-gray-200 focus:border-activeColor1 outline-0 font-space text-black p-1.5 pl-3 font-medium text-base placeholder-gray-500 placeholder-opacity-40 w-38"
                        style={{
                          borderColor: errors.cvc && touched.cvc ? "red" : "",
                        }}
                        onChange={(e) => {
                          setCardCVC(e.target.value);
                          handleChange(e);
                        }}
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
                    class="!bg-darkerViolet font-space font-thin text-base text-white w-76 h-10 py-2 px-4 rounded-md"
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
