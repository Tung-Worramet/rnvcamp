import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Lock } from "lucide-react";
import useAuthStore from "@/store/authStore";
import { useI18n } from "@/store/i18n";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const t = useI18n((s) => s.t);
  useI18n((s) => s.lang);

  const { toast } = useToast();

  const navigate = useNavigate();
  const actionLogin = useAuthStore((state) => state.actionLogin);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await actionLogin(form);
      if (res.data.success === false) {
        toast({
          title: "ข้อผิดพลาด",
          description: res.data.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "สําเร็จ",
        description: "SingIn Success",
        // variant: "success",
      });
      navigate("/");
    } catch (error) {
      // toast({
      //   title: "ข้อผิดพลาด",
      //   description: error.message,
      //   variant: "destructive",
      // });
    }
  };

  return (
    <div className="md:min-h-[70vh] min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4 bg-gradient-to-b from-purple-50 to-white">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              {t("signin.title")}
            </CardTitle>
            <p className="text-center text-muted-foreground">
              {t("signin.subtitle")}
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    // type="email"
                    name="username"
                    placeholder={t("signin.email_placeholder")}
                    onChange={handleOnChange}
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="password"
                    name="password"
                    placeholder={t("signin.password_placeholder")}
                    onChange={handleOnChange}
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                {t("signin.submit")}
              </Button>

              <div className="text-center text-sm">
                <Button
                  variant="link"
                  className="p-0 text-primary hover:underline"
                >
                  {t("signin.forgot")}
                </Button>
              </div>

              <div className="text-center text-sm">
                {t("signin.no_account")}
                <Button
                  variant="link"
                  className="p-0 text-primary hover:underline"
                  onClick={() => navigate("/signup")}
                >
                  {t("signin.signup_link")}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SignIn;
