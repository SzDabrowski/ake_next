import { Toaster, resolveValue } from "react-hot-toast";
import { SuccessIcon } from "../Icons/SuccessIcon";

// In your app
const MyToaster = () => {
  return (
    <Toaster position="bottom-center">
      {(t) => (
        <div
          style={{
            opacity: t.visible ? 1 : 0,
            background: "rgb(241, 242, 243)",
            padding: "1rem 1.5rem",
            justifyContent: "center",
          }}
        >
          {resolveValue(t.message, t)}
        </div>
      )}
    </Toaster>
  );
};

export default MyToaster;
