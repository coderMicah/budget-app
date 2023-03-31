import { redirect } from "react-router-dom";

//library imports
import { toast } from "react-toastify";

//helpers
import { deleteItem } from "../utilis/helpers";

export function logoutAction() {
  try {
    //delete user
    deleteItem({ key: "userName" });

    toast.success("You've deleted an account");

    return redirect("/");
  } catch (error) {
    throw new Error("Could not delete user");
  }
}
