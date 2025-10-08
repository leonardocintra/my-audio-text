"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  whatsapp: z.string().min(10, {
    message: "Please enter a valid WhatsApp number with area code.",
  }),
  email: z
    .string()
    .email({ message: "Please enter a valid email." })
    .optional()
    .or(z.literal("")),
});

export default function StartTrialForm() {
  const t = useTranslations("StartTrialPage.form");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Make the request to the external API
    const response = await fetch("/api/leonardo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      toast({
        title: "Error!",
        description: "There was an error starting your free trial.",
      });
      return;
    }

    console.log(values);
    toast({
      title: "Success!",
      description: "You're on your way to starting your free trial.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("nameLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("namePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("whatsappLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("whatsappPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("emailLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("emailPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold" size="lg">
          {t("submitButton")}
        </Button>
      </form>
    </Form>
  );
}
