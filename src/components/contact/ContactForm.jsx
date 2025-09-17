import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/store/i18n";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const ContactForm = ({ token, initialValues = {} }) => {
  const t = useI18n((s) => s.t);
  useI18n((s) => s.lang);
  const { toast } = useToast();

  // 1) ตั้งค่า defaultValues จาก props
  const form = useForm({
    // mode: "onTouched",
    defaultValues: {
      fullName: initialValues.fullName || "",
      email: initialValues.email || "",
      phone: initialValues.phone || "",
      subject: "",
      message: "",
    },
  });

  // 2) ถ้า initialValues เปลี่ยน (เช่น เพิ่งล็อกอิน) ให้ prefill ใหม่
  useEffect(() => {
    form.reset((curr) => ({
      ...curr,
      fullName: initialValues.fullName || "",
      email: initialValues.email || "",
      phone: initialValues.phone || "",
    }));
  }, [initialValues, form]);

  const onSubmit = (data) => {
    console.log("contact form:", data);
    toast({
      title: t("contact.form.toast.success_title"),
      description: t("contact.form.toast.success_desc"),
    });
  };

  return (
    <div className="bg-muted p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">{t("contact.form.title")}</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Full name */}
          <FormField
            control={form.control}
            name="fullName"
            rules={{ required: t("contact.form.validation.required") }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("contact.form.fields.full_name.label")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("contact.form.fields.full_name.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: t("contact.form.validation.required"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("contact.form.validation.email"),
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.fields.email.label")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("contact.form.fields.email.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.fields.phone.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("contact.form.fields.phone.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            rules={{ required: t("contact.form.validation.required") }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.fields.subject.label")}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t(
                          "contact.form.fields.subject.placeholder"
                        )}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="general">
                      {t("contact.form.subjects.general")}
                    </SelectItem>
                    <SelectItem value="booking">
                      {t("contact.form.subjects.booking")}
                    </SelectItem>
                    <SelectItem value="partnership">
                      {t("contact.form.subjects.partnership")}
                    </SelectItem>
                    <SelectItem value="feedback">
                      {t("contact.form.subjects.feedback")}
                    </SelectItem>
                    <SelectItem value="other">
                      {t("contact.form.subjects.other")}
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            rules={{ required: t("contact.form.validation.required") }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.fields.message.label")}</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[120px]"
                    placeholder={t("contact.form.fields.message.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit button */}
          {token ? (
            <Button type="submit" className="w-full">
              {t("contact.form.submit")}
            </Button>
          ) : (
            <Button asChild type="button" className="w-full" variant="default">
              <Link to="/signin">{t("contact.form.signin_first")}</Link>
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
