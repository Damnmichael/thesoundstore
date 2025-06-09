"use client";
import styled from "styled-components";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import React, { useState } from "react";
import CashOnDeliveryIcon from "../../../public/assets/checkout/icon-cash-on-delivery.svg";
import { useRouter } from "next/navigation";

const SHIPPING_COST = 50;
const VAT_RATE = 0.2;

const Input = ({
  label,
  placeholder,
  width = "100%",
  type = "text",
  error,
  errorMsg,
  ...props
}) => (
  <InputWrapper style={{ width }}>
    <InputLabelRow>
      {label && <InputLabel error={!!error}>{label}</InputLabel>}
      {error && <InputError>{errorMsg}</InputError>}
    </InputLabelRow>
    <StyledInput
      placeholder={placeholder}
      type={type}
      $error={!!error}
      {...props}
    />
  </InputWrapper>
);

const PaymentRadio = ({ label, checked, onClick }) => (
  <RadioContainer
    onClick={onClick}
    tabIndex={0}
    role="radio"
    aria-checked={checked}
  >
    <RadioOuter checked={checked}>{checked && <RadioInner />}</RadioOuter>
    <span>{label}</span>
  </RadioContainer>
);

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  padding: 64px 165px 120px 165px;
  max-width: 1440px;
  margin: 0 auto;
`;

const PageBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fafafa;
`;

const FormSection = styled.div`
  width: 730px;
  min-width: 0;
`;

const FormCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 48px 48px 54px 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FormTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 36px;
  margin-bottom: 41px;
  color: #000;
`;

const SectionLabel = styled.h3`
  color: #d87d4a;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputError = styled.span`
  color: #cd2c2c;
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
  margin-bottom: 9px;
`;

const InputLabel = styled.label`
  font-size: 12px;
  color: ${({ error }) => (error ? "#CD2C2C" : "#000")};
  font-weight: bold;
  margin-bottom: 9px;
`;

const StyledInput = styled.input`
  padding: 18px 24px;
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? "#CD2C2C" : "#cfcfcf")};
  font-size: 15px;
  font-weight: bold;
  color: #000;
  background: #fff;
  outline: none;
  width: 100%;
  &::placeholder {
    color: #000;
    opacity: 40%;
    font-weight: bold;
  }
  &:focus {
    border-color: ${({ $error }) => ($error ? "#CD2C2C" : "#D87D4A")};
  }
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  background: #fff;
  border: 1.5px solid ${({ checked }) => (checked ? "#D87D4A" : "#cfcfcf")};
  border-radius: 8px;
  padding: 18px 24px;
  font-size: 14px;
  color: #000;
  font-weight: bold;
  margin-bottom: 0;
  transition: border 0.2s;
  &:focus-within,
  &.focused {
    border: 1.5px solid #d87d4a;
  }
`;

const RadioOuter = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #cfcfcf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-right: 8px;
`;

const RadioInner = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d87d4a;
`;

const SummarySection = styled.div`
  flex: 1;
  min-width: 350px;
`;

const SummaryCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SummaryTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  letter-spacing: 1.2px;
  margin-bottom: 24px;
`;

const SummaryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SummaryImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
  background: #f1f1f1;
`;

const SummaryName = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  line-height: 25px;
`;

const SummaryPrice = styled.div`
  font-size: 14px;
  color: #000;
  opacity: 50%;
  font-weight: bold;
  line-height: 25px;
`;

const SummaryQty = styled.div`
  font-size: 15px;
  color: #000;
  opacity: 50%;
  font-weight: bold;
  line-height: 25px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummaryLabel = styled.div`
  font-size: 15px;
  color: #000;
  font-weight: 500;
  opacity: 50%;
  line-height: 25px;
`;

const SummaryValue = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const ContinueButton = styled.button`
  width: 100%;
  background: #d87d4a;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 16px 0;
  border: none;
  border-radius: 0;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s;
  &:hover {
    background: #fbaf85;
    color: #fff;
  }
`;

const CashOnDeliveryMsg = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-top: 32px;
  color: #7d7d7d;
  font-size: 15px;
  line-height: 25px;
  span {
    color: #000000;
    opacity: 50%;
    font-size: 15px;
    line-height: 25px;
    font-weight: 500;
  }
  img {
    width: 48px;
    height: 48px;
    margin-top: 4px;
  }
`;

const ConfirmationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmationModal = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 540px;
  max-width: 95vw;
  padding: 48px 48px 46px 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const ConfirmationIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const ConfirmationTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  margin: 0;
  line-height: 36px;
`;

const ConfirmationMsg = styled.p`
  color: #000;
  opacity: 50%;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
`;

const ConfirmationSummary = styled.div`
  width: 100%;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  background: #f1f1f1;
  margin-bottom: 8px;
`;

const ConfirmationItemBox = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f1f1f1;
`;

const ConfirmationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ConfirmationItemImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  background: #fff;
`;

const ConfirmationItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ConfirmationItemName = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  line-height: 25px;
`;

const ConfirmationItemPrice = styled.div`
  font-size: 14px;
  color: #000;
  opacity: 50%;
  font-weight: bold;
`;

const ConfirmationItemQty = styled.div`
  font-size: 15px;
  color: #000;
  opacity: 50%;
  font-weight: bold;
`;

const ConfirmationOther = styled.div`
  font-size: 12px;
  color: #000;
  opacity: 50%;
  font-weight: bold;
  text-align: center;
  margin-top: 8px;
`;

const ConfirmationDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #000000;
  opacity: 8%;
  margin: 12px 0 0 0;
`;

const ConfirmationTotalBox = styled.div`
  background: #000;
  color: #fff;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 8px;
`;

const ConfirmationTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
`;

const ConfirmationTotalLabel = styled.div`
  font-size: 15px;
  color: #fff;
  opacity: 50%;
  font-weight: 500;
  text-align: center;
`;

const ConfirmationTotalValue = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

const ConfirmationHomeButton = styled.button`
  width: 100%;
  background: #d87d4a;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 16px 0;
  border: none;
  border-radius: 0;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s;
  &:hover {
    background: #fbaf85;
    color: #fff;
  }
`;

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const [payment, setPayment] = useState("e-Money");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [country, setCountry] = useState("");
  const [countryTouched, setCountryTouched] = useState(false);
  const [address, setAddress] = useState("");
  const [addressTouched, setAddressTouched] = useState(false);
  const [paymentTouched, setPaymentTouched] = useState(false);
  const [eMoneyNumber, setEMoneyNumber] = useState("");
  const [eMoneyNumberTouched, setEMoneyNumberTouched] = useState(false);
  const [eMoneyPin, setEMoneyPin] = useState("");
  const [eMoneyPinTouched, setEMoneyPinTouched] = useState(false);
  const [continueHover, setContinueHover] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const emailError = emailTouched && !emailValid;

  const countryError = countryTouched && !country;

  const addressError = addressTouched && !address;

  const paymentError = paymentTouched && !payment;

  const eMoneyNumberOnly = /^[0-9]*$/.test(eMoneyNumber);
  const eMoneyPinOnly = /^[0-9]*$/.test(eMoneyPin);
  const eMoneyNumberError =
    payment === "e-Money" &&
    eMoneyNumberTouched &&
    (!eMoneyNumber
      ? "Required"
      : !eMoneyNumberOnly
      ? "Numbers only"
      : undefined);
  const eMoneyPinError =
    payment === "e-Money" &&
    eMoneyPinTouched &&
    (!eMoneyPin ? "Required" : !eMoneyPinOnly ? "Numbers only" : undefined);

  const vat = Math.round(total * VAT_RATE);
  const grandTotal = total + SHIPPING_COST + vat;

  const canSubmit =
    emailValid &&
    !addressError &&
    !countryError &&
    !paymentError &&
    (payment !== "e-Money" || (!eMoneyNumberError && !eMoneyPinError));

  return (
    <PageBackground>
      <OuterContainer>
        <FormSection>
          <FormCard>
            <FormTitle>CHECKOUT</FormTitle>
            <SectionLabel>Billing Details</SectionLabel>
            <FormRow>
              <Input label="Name" placeholder="Alexei Ward" width="48%" />
              <Input
                label="Email Address"
                placeholder="alexei@mail.com"
                width="48%"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                error={emailError}
                errorMsg={emailError ? "Wrong format" : undefined}
              />
            </FormRow>
            <FormRow>
              <Input
                label="Phone Number"
                placeholder="+1 202-555-0136"
                width="50%"
              />
            </FormRow>
            <SectionLabel>Shipping Info</SectionLabel>
            <FormRow>
              <Input
                label="Address"
                placeholder="1137 Williams Avenue"
                width="100%"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onBlur={() => setAddressTouched(true)}
                error={addressError}
                errorMsg={addressError ? "Required" : undefined}
              />
            </FormRow>
            <FormRow>
              <Input label="ZIP Code" placeholder="10001" width="48%" />
              <Input label="City" placeholder="New York" width="48%" />
            </FormRow>
            <FormRow>
              <Input
                label="Country"
                placeholder="United States"
                width="50%"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                onBlur={() => setCountryTouched(true)}
                error={countryError}
                errorMsg={countryError ? "Required" : undefined}
              />
            </FormRow>
            <SectionLabel>Payment Details</SectionLabel>
            <FormRow style={{ alignItems: "flex-start" }}>
              <div style={{ width: "48%" }}>
                <InputLabelRow>
                  <InputLabel error={paymentError}>Payment Method</InputLabel>
                  {paymentError && <InputError>Required</InputError>}
                </InputLabelRow>
              </div>
              <div
                style={{
                  width: "48%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <PaymentRadio
                  label="e-Money"
                  checked={payment === "e-Money"}
                  onClick={() => {
                    setPayment("e-Money");
                    setPaymentTouched(true);
                  }}
                  tabIndex={0}
                  onFocus={(e) => e.target.classList.add("focused")}
                  onBlur={(e) => e.target.classList.remove("focused")}
                />
                <PaymentRadio
                  label="Cash on Delivery"
                  checked={payment === "Cash on Delivery"}
                  onClick={() => {
                    setPayment("Cash on Delivery");
                    setPaymentTouched(true);
                  }}
                  tabIndex={0}
                  onFocus={(e) => e.target.classList.add("focused")}
                  onBlur={(e) => e.target.classList.remove("focused")}
                />
              </div>
            </FormRow>
            {payment === "e-Money" && (
              <FormRow>
                <Input
                  label="e-Money Number"
                  placeholder="238521993"
                  width="48%"
                  value={eMoneyNumber}
                  onChange={(e) => setEMoneyNumber(e.target.value)}
                  onBlur={() => setEMoneyNumberTouched(true)}
                  error={!!eMoneyNumberError}
                  errorMsg={eMoneyNumberError}
                />
                <Input
                  label="e-Money PIN"
                  placeholder="6891"
                  width="48%"
                  value={eMoneyPin}
                  onChange={(e) => setEMoneyPin(e.target.value)}
                  onBlur={() => setEMoneyPinTouched(true)}
                  error={!!eMoneyPinError}
                  errorMsg={eMoneyPinError}
                />
              </FormRow>
            )}
            {payment === "Cash on Delivery" && (
              <CashOnDeliveryMsg>
                <img
                  src="/assets/checkout/icon-cash-on-delivery.svg"
                  alt="Cash on Delivery"
                />
                <span>
                  The Cash on Delivery option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </span>
              </CashOnDeliveryMsg>
            )}
          </FormCard>
        </FormSection>
        <SummarySection>
          <SummaryCard>
            <SummaryTitle>SUMMARY</SummaryTitle>
            <SummaryList>
              {cart.map((item) => (
                <SummaryItem key={item.id}>
                  <SummaryImage
                    src={
                      typeof item.image === "string"
                        ? item.image.replace("./", "/")
                        : item.image.desktop.replace("./", "/")
                    }
                    alt={item.name}
                  />
                  <div style={{ flex: 1 }}>
                    <SummaryName>
                      {item.name.split(" ")[0].toUpperCase()}{" "}
                      {item.name.match(/MK\s?II/i) ? "MK II" : ""}
                    </SummaryName>
                    <SummaryPrice>$ {item.price.toLocaleString()}</SummaryPrice>
                  </div>
                  <SummaryQty>x{item.quantity}</SummaryQty>
                </SummaryItem>
              ))}
            </SummaryList>
            <SummaryRow>
              <SummaryLabel>TOTAL</SummaryLabel>
              <SummaryValue>$ {total.toLocaleString()}</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>SHIPPING</SummaryLabel>
              <SummaryValue>$ {SHIPPING_COST.toLocaleString()}</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>VAT (INCLUDED)</SummaryLabel>
              <SummaryValue>$ {vat.toLocaleString()}</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>GRAND TOTAL</SummaryLabel>
              <SummaryValue style={{ color: "#d87d4a" }}>
                $ {grandTotal.toLocaleString()}
              </SummaryValue>
            </SummaryRow>
            <ContinueButton
              onMouseEnter={() => setContinueHover(true)}
              onMouseLeave={() => setContinueHover(false)}
              onClick={() => {
                setEmailTouched(true);
                setAddressTouched(true);
                setCountryTouched(true);
                setPaymentTouched(true);
                setEMoneyNumberTouched(true);
                setEMoneyPinTouched(true);
                if (canSubmit) setShowConfirmation(true);
              }}
            >
              {continueHover ? "CONTINUE" : "CONTINUE & PAY"}
            </ContinueButton>
          </SummaryCard>
        </SummarySection>
        {showConfirmation && (
          <ConfirmationOverlay>
            <ConfirmationModal>
              <ConfirmationIcon
                src="/assets/checkout/icon-order-confirmation.svg"
                alt="Order Confirmed"
              />
              <ConfirmationTitle>
                THANK YOU
                <br />
                FOR YOUR ORDER
              </ConfirmationTitle>
              <ConfirmationMsg>
                You will receive an email confirmation shortly.
              </ConfirmationMsg>
              <ConfirmationSummary>
                <ConfirmationItemBox>
                  {cart.length > 0 && (
                    <>
                      <ConfirmationItem>
                        <ConfirmationItemImg
                          src={
                            typeof cart[0].image === "string"
                              ? cart[0].image.replace("./", "/")
                              : cart[0].image.desktop.replace("./", "/")
                          }
                          alt={cart[0].name}
                        />
                        <ConfirmationItemInfo>
                          <ConfirmationItemName>
                            {cart[0].name.split(" ")[0].toUpperCase()}{" "}
                            {cart[0].name.match(/MK\s?II/i) ? "MK II" : ""}
                          </ConfirmationItemName>
                          <ConfirmationItemPrice>
                            $ {cart[0].price.toLocaleString()}
                          </ConfirmationItemPrice>
                        </ConfirmationItemInfo>
                        <ConfirmationItemQty>
                          x{cart[0].quantity}
                        </ConfirmationItemQty>
                      </ConfirmationItem>
                      {cart.length > 1 && (
                        <>
                          <ConfirmationDivider />
                          <ConfirmationOther>
                            and {cart.length - 1} other item(s)
                          </ConfirmationOther>
                        </>
                      )}
                    </>
                  )}
                </ConfirmationItemBox>
                <ConfirmationTotalBox>
                  <ConfirmationTotalContainer>
                    <ConfirmationTotalLabel>GRAND TOTAL</ConfirmationTotalLabel>
                    <ConfirmationTotalValue>
                      $ {grandTotal.toLocaleString()}
                    </ConfirmationTotalValue>
                  </ConfirmationTotalContainer>
                </ConfirmationTotalBox>
              </ConfirmationSummary>
              <ConfirmationHomeButton onClick={() => router.push("/")}>
                BACK TO HOME
              </ConfirmationHomeButton>
            </ConfirmationModal>
          </ConfirmationOverlay>
        )}
      </OuterContainer>
    </PageBackground>
  );
}
