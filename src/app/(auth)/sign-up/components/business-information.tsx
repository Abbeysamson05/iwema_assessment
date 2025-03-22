import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface iProps {
  form: any;
}

const BusinessInformation: React.FC<iProps> = ({ form }) => {
  return (
    <>
      <p className="font-medium text-[#039BF0] text-sm mb-4">
        Business Information
      </p>
      <FormField
        control={form.control}
        name="businessName"
        render={({ field }) => (
          <FormItem className="mb-8">
            <FormLabel>Business Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Wema bank"
                autoCapitalize="none"
                className="h-12"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="businessEmail"
        render={({ field }) => (
          <FormItem className="mb-8">
            <FormLabel>Business Email </FormLabel>
            <FormControl>
              <Input
                placeholder="wema.org"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                className="h-12"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="businessPhonenumber"
        render={({ field }) => (
          <FormItem className="mb-8">
            <FormLabel>Business Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="08115632776" className="h-12" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="businessCategory"
        render={({ field }) => (
          <FormItem className="mb-8">
            <FormLabel>Business Category</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select category type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="agriculture">Agriculture</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="transport-logistics">
                  Transport & Logistics
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="accountNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Account No</FormLabel>
            <FormControl>
              <Input placeholder="2079155676" className="h-12" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default BusinessInformation;
