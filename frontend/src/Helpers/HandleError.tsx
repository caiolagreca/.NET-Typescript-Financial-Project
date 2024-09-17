import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  // Check if the error is from an Axios request
  if (axios.isAxiosError(error)) {
    var err = error.response;

    // If error data is an array, loop through each error and display its description
    if (Array.isArray(err?.data.error)) {
      for (let val of err?.data.error) {
        toast.warning(val.description);
      }
    }
    // If error data is an object, loop through each key and show the first error message
    else if (typeof err?.data.error === "object") {
      for (let e in err?.data.error) {
        toast.warning(err?.data.error[e][0]); // Display the first error message for each field
      }
    }
    // If there's error data but it's not an array or object, show it directly
    else if (err?.data) {
      toast.warning(err?.data);
    }
    // If the status code is 401 (unauthorized), notify the user and redirect to login
    else if (err?.status == 401) {
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "/login"); // Redirect user to login page
    }
    // If there's an error but no specific data, show it as a generic warning
    else if (err) {
      toast.warning(err?.data);
    }
  }
};
