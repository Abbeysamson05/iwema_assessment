import { Input } from "@/components/ui/input";
import {
  Form,
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
const BusinessAddress: React.FC<iProps> = ({ form }) => {
  return (
    <>
      <p className="font-medium text-[#039BF0] text-sm mb-4">
        Business Address
      </p>
      <div className="flex gap-4 mb-8">
        <FormField
          control={form.control}
          name="homeNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Home Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="16A"
                  autoCapitalize="none"
                  className="h-12 max-w-[7.125rem]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input
                  placeholder="Alhaji Ajayi Str.,"
                  autoCapitalize="none"
                  className="h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex gap-4 mb-10">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ikeja"
                  autoCapitalize="none"
                  className="h-12 flex-1"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="businessCategory"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>State</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="adamawa">Adamawa</SelectItem>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="borno">Borno</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <p className="font-medium text-[#039BF0] text-sm mb-4">
        Contact Person Information
      </p>
      <FormField
        control={form.control}
        name="contactName"
        render={({ field }) => (
          <FormItem className="mb-8">
            <FormLabel>Contact Name</FormLabel>
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
        name="contactNumber"
        render={({ field }) => (
          <FormItem className="mb-8">
            <FormLabel>Contact Phone Number </FormLabel>
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
        name="contactEmail"
        render={({ field }) => (
          <FormItem className="mb-10">
            <FormLabel>Contact Email Address</FormLabel>
            <FormControl>
              <Input
                placeholder="ajayiabiodunsamson05@gmail.com"
                className="h-12"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <p className="font-medium text-[#039BF0] text-sm mb-4">Password</p>
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="Enter Password"
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
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="Please confirm Password"
                className="h-12"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default BusinessAddress;
