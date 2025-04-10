import { useToasts } from "@/Hooks/useToasts";
import Appearances from "@/StyleConfig/Appearances";
import Style from "@/Components/Button/Style";

export default function Button() {
  const { addToast } = useToasts();

  const ToastData = [
    {
      id: 1,
      content: "Error 알림창입니다.",
      appearance: "error",
      autoDismiss: true,
      placement: "top-right",
    },
    {
      id: 1,
      content: "Success 알림창입니다.",
      appearance: "success",
      autoDismiss: true,
      placement: "top-right",
    },
    {
      id: 1,
      content: "Warning 알림창입니다.",
      appearance: "warning",
      autoDismiss: true,
      placement: "top-right",
    },
    {
      id: 1,
      content: "Info 발생 알림창입니다.",
      appearance: "info",
      autoDismiss: true,
      placement: "top-right",
    },
  ];

  return (
    <>
      {ToastData.map((toast) => (
        <button
          className={Style(toast.appearance as keyof typeof Appearances)}
          onClick={() =>
            addToast(toast.content, {
              appearance: toast.appearance as keyof typeof Appearances,
              autoDismiss: true,
              placement: "top-right",
            })
          }
        >
          {toast.appearance} Toast Button
        </button>
      ))}
    </>
  );
}
