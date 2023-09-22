import SidebarIcons from "../components/SidebarMenu/SidebarIcons";
import { auth, signOut } from "../firebase/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SettingsView = () => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signout Successfully");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <>
      <div
        className={`grow sm:grow-0 flex justify-center bg-white sm:bg-opacity-0`}
      >
        <div className="flex flex-col gap-2 mt-0 sm:m-6 p-7 w-full sm:max-w-[600px] min-h-[60vh] sm:bg-white shadow-md">
          <SidebarIcons icon="user" label="Profile Setting" />
          <SidebarIcons icon="floppy-disk" label="Saved" />
          <SidebarIcons icon="palette" label="Display Settings" />
          <button onClick={logout} className="text-start">
            <SidebarIcons
              icon="right-from-bracket"
              label="Logout"
              className="text-red hover:text-red"
            />
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SettingsView;
