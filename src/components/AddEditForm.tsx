import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { UserData } from "@/pages/UserList";

interface Props {
  item?: UserData;
  onSubmit: (data: any) => void;
}

export function AddEditForm({ item, onSubmit, ...props }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: item?.name || "",
      email: item?.email || "",
      phone: item?.phone || "",
      street: item?.address?.street || "",
      city: item?.address?.city || "",
      suite: item?.address?.suite || "",
      zipcode: item?.address?.zipcode || "",
      companyName: item?.company?.name || "",
    }
  });

  function onsubmit(data : any){
    onSubmit(data)
  }

  return (
    <div className={"flex flex-col gap-6"} {...props}>
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name", { required: "Name is required" })} />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register("phone", { required: "Phone is required" })} />
          {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="street">Street</Label>
          <Input id="street" {...register("street")} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" {...register("city")} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="suite">Suite</Label>
          <Input id="suite" {...register("suite")} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="zipcode">Zipcode</Label>
          <Input id="zipcode" {...register("zipcode")} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" {...register("companyName")} />
        </div>

        <Button type="submit" className="w-full">
          {item?.id ? "Edit" : "Add"}
        </Button>
      </form>
    </div>
  );
}
