import { ReactNode } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface DashboardPageActionProps {
  /** Text displayed on the trigger button */
  buttonText: string;
  /** Dialog title */
  title: string;
  /** Dialog description */
  description: string;
  /** Content to display in the dialog body */
  children: ReactNode;
  /** Handler called when the submit button is clicked */
  onSubmit?: () => void | Promise<void>;
  /** Text for the submit button (defaults to "Save changes") */
  submitButtonText?: string;
  /** Text for the cancel button (defaults to "Cancel") */
  cancelButtonText?: string;
  /** Variant for the trigger button (defaults to "glass-primary") */
  buttonVariant?:
    | "glass-primary"
    | "glass-secondary"
    | "default"
    | "outline"
    | "ghost"
    | "link";
  /** Handler called when the cancel button is clicked */
  onCancel?: () => void;
}

const DashboardPageAction = ({
  buttonText,
  title,
  description,
  children,
  onSubmit,
  submitButtonText = "Save changes",
  cancelButtonText = "Cancel",
  buttonVariant = "glass-primary",
  onCancel,
}: DashboardPageActionProps) => {
  const handleSubmit = async () => {
    if (onSubmit) {
      await onSubmit();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant={buttonVariant}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div>{children}</div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="glass-secondary" onClick={handleCancel}>
              {cancelButtonText}
            </Button>
          </DialogClose>
          <Button type="submit" variant="glass-primary" onClick={handleSubmit}>
            {submitButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardPageAction;
