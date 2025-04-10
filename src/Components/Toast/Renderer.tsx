import { createPortal } from "react-dom";
import { useToasts } from "@/Hooks/useToasts";
import Container from "@/Components/Toast/Container";
import Controller from "@/Components/Toast/Controller";
import Placements from "@/StyleConfig/Placements";

export default function Renderer() {
  const { toastStack, removeToast } = useToasts();

  // placement 별로 그룹화
  const groupedToasts = toastStack.reduce((acc, toast) => {
    if (toast.placement) {
      if (!acc[toast.placement]) acc[toast.placement] = [];
      acc[toast.placement].push(toast);
    }
    return acc;
  }, {} as Record<string, typeof toastStack>);

  return createPortal(
    <>
      {Object.entries(groupedToasts).map(([placement, toasts], index) => (
        <Container
          key={`${placement}+${index}`}
          placement={placement as keyof typeof Placements}
          hasToasts={toastStack.length > 0}
        >
          {toasts.map(
            ({ id, appearance, content, autoDismiss, showCloseButton }) => (
              <Controller
                key={id}
                placement={placement as keyof typeof Placements}
                appearance={appearance}
                autoDismiss={autoDismiss ?? false}
                onDismiss={() => removeToast(id)}
                showCloseButton={showCloseButton ?? true}
              >
                {content}
              </Controller>
            )
          )}
        </Container>
      ))}
    </>,
    document.body
  );
}
