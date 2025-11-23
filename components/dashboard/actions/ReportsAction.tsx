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
import { Sparkles } from "lucide-react";

const ReportsAction = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="glass-primary" size="lg">
          <Sparkles />
          Generate Report
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Report</DialogTitle>
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
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReportsAction;
