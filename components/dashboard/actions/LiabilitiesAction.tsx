import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const LiabilitiesAction = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="glass-primary" size="lg">
          <Plus />
          Add Liability
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Liability</DialogTitle>
          <DialogDescription>
            Create a new bank transaction or savings contribution.
          </DialogDescription>
        </DialogHeader>

        <div>Hola</div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="glass-secondary">Cancel</Button>
          </DialogClose>
          <Button type="submit" variant="glass-primary">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LiabilitiesAction;
