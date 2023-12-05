import { Button } from "../button";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { Link, MenuIcon } from "lucide-react";
import { ModeToggle } from "./toggle-mode";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../avatar";
import { User } from "lucide-react";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-around items-center gap-5 lg:hidden ">
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <a href="/login">
                <DropdownMenuLabel>Crie uma conta</DropdownMenuLabel>
              </a>
              <DropdownMenuSeparator />
              <a href="/login">
                <DropdownMenuItem>Entrar</DropdownMenuItem>
              </a>
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <SheetContent side="right">
            {/* <ul className="flex flex-col gap-8">
              <li className="cursor-pointer">Recursos</li>
              <li className="cursor-pointer">How we work</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Contact</li>
            </ul> */}
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default Nav;
