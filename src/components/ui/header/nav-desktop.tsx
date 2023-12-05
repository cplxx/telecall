import Link from "next/link";
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

const NavDesktop = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center  gap-8">
        <Link href="">
          <li className="cursor-pointer">Serviços</li>
        </Link>

        <li className="cursor-pointer">Como trabalhamos</li>

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="/login">
                <DropdownMenuLabel>Crie uma conta</DropdownMenuLabel>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/login">
                <DropdownMenuItem>Entrar</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
