import { init, send } from "@emailjs/browser";
import JustValidate from "just-validate";

init({
  publicKey: "ayFP9CRPMnNlupAUW",
});

const contactFormElement = document.getElementById("contact-form");
const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailField = document.getElementById("email");
const organizationField = document.getElementById("organization");
const linkedinField = document.getElementById("linkedin");
const submitButton = document.getElementById("contact-submit");

const validator = new JustValidate(contactFormElement);

validator
  .addField(firstNameField, [
    {
      rule: "required",
    },
  ])
  .addField(lastNameField, [
    {
      rule: "required",
    },
  ])
  .addField(emailField, [
    {
      rule: "required",
    },
    {
      rule: "email",
    },
  ])
  .onSuccess((event) => {
    event.preventDefault();

    const params = {
      first_name: firstNameField.value,
      last_name: lastNameField.value,
      email: emailField.value,
      organization: organizationField.value,
      linkedin: linkedinField.value,
    };

    send("service_n0ts8rl", "template_jaus13f", params).then(() => {
      submitButton.innerText = "Demo was Requested!";
    });
  });
