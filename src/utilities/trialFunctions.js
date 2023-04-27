import Axios from "axios";

//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure({
//     autoClose: 5000,
//     draggable: false,
// 	position: toast.POSITION.TOP_CENTER
//   });

export default async function sendTrialSignup(
  group,
  email,
  firstName,
  lastName,
  password,
  confirmPassword,
  teamName,
  subdomain
) {
  //config
  const instance = Axios.create({
    baseURL: "/.netlify/functions",
    timeout: 4000,
    headers: {},
  });

  // Send a POST request
  const result = instance
    .post("trialSignup", {
      payload: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        confirmPassword: confirmPassword,
        teamName: teamName,
        subdomain: subdomain,
      },
    })
    .then((response) => {
      //console.log('submit success');

      const success = response.data.status === "success" ? true : false;
      //toast.success('Thanks for signing up!')
      if (success === false) {
        toast.error(response.data.message);
      }
      return {
        success: success,
        message: response.data.message,
      };
    })
    .catch((error) => {
      //console.log('submit error');

      //console.log(error.response.data.message);
      var message = error.response.data.message;
      if (message === null) {
        message = "Oops, try submitting again";
      }

      toast.error(error.response.data.message);
      return {
        success: false,
        message: message,
      };
    });

  return result;
}
