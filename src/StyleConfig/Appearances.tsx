import * as Icons from "@/StyleConfig/Icons";
import Color from "@/StyleConfig/Colors";

const Appearances = {
  success: {
    icon: Icons.ToastCheck,
    text: Color.Green,
    fg: Color.Green80,
    bg: Color.Green10,
  },
  error: {
    icon: Icons.ToastFlame,
    text: Color.Red,
    fg: Color.Red80,
    bg: Color.Red10,
  },
  warning: {
    icon: Icons.ToastAlert,
    text: Color.Yellow,
    fg: Color.Yellow80,
    bg: Color.Yellow10,
  },
  info: {
    icon: Icons.ToastInfo,
    text: Color.Navy20,
    fg: Color.Blue,
    bg: "white",
  },
};

export default Appearances;
