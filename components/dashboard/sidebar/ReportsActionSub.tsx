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
import { SidebarMenuSubButton } from "@/components/ui/sidebar";
import { PlusCircle, Sparkles } from "lucide-react";

const ReportsActionSub = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarMenuSubButton asChild>
          <Button variant="glass-secondary" size="sm" className="mt-1 text-xs">
            <PlusCircle />
            New Report
          </Button>
        </SidebarMenuSubButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Report</DialogTitle>
          <DialogDescription>
            Generate a new financial summary report.
          </DialogDescription>
        </DialogHeader>

        <div>Hola</div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="glass-secondary">Cancel</Button>
          </DialogClose>
          <Button type="submit" variant="glass-primary">
            Generate <Sparkles />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReportsActionSub;
