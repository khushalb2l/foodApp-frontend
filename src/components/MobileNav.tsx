import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated,user } = useAuth0();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center font-bold hover:text-orange-500 gap-2">
                <CircleUserRound className="text-orange-500"/>
                {user?.name}
              </span>
            ) : (
              <span>Welcome to EatRepeat</span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (<MobileNavLinks/>) : (
              <Button
              className="flex-1 font-bold bg-orange-500"
              onClick={async () => await loginWithRedirect()}
            >
              Log In
            </Button>
            )}
            
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
