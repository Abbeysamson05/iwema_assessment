import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface iProps {
  closeModal: () => void;
}

const SignupSuccess: React.FC<iProps> = ({ closeModal }) => {
  return (
    <div className="py-5">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 bg-[#FF99001A] text-[#13B76A] flex justify-center items-center mb-1">
          <AlertCircle size={24} color="#FF9900" />
        </div>

        <p className=" text-2xl mt-2 mb-6 text-[#FF9900]">Pending</p>
        <p className="text-center text-sm text-[#1A1619] m-0 mb-8">
          Your registration is awaiting approval from our partnership team
        </p>

        <Button className="w-full" onClick={closeModal}>
          Okay
        </Button>
      </div>
    </div>
  );
};

export default SignupSuccess;
