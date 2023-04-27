import Axios from "axios";

//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure({
//     autoClose: 5000,
//     draggable: false,
// 	position: toast.POSITION.TOP_CENTER
//   });

export default async function sendSubscribe(
  group,
  email,
  firstName,
  lastName,
  company
) {
  //console.log(group, email)

  //config
  const instance = Axios.create({
    baseURL: "/.netlify/functions",
    timeout: 4000,
    headers: {},
  });

  // Send a POST request
  const result = instance
    .post("addSubscriber", {
      group: group,
      subscriber: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        company: company,
      },
    })
    .then((response) => {
      console.log("submit success");
      //console.log(response);
      const success = response.data.status === "success" ? true : false;
      if (success === true) {
        //toast.success('Thanks for signing up!')
      }
      return success;
    })
    .catch((error) => {
      console.log("submit error");
      //console.log(error);
      //toast.error('Oops, try submitting again');
      return false;
    });

  return result;
}
