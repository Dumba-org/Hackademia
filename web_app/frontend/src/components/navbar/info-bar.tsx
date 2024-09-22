import Link from "next/link";
import Logo from "../logo";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useLayoutEffect } from "react";
import { useOverflowDetection } from "@/hooks/use-overflow-detection";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  CreditCard,
  LogOut,
  MapPin,
  Menu,
  Phone,
  User,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { m } from "framer-motion";
import { socialIcons } from "@/config/constants";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { AuthCard } from "../auth";
import { useCurrentAuthDialog } from "@/store/get-current-auth-dialog";
export const InfoBar = ({ scrollY }: { scrollY: number }) => {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const { dialogOpen, setDialogOpen } = useCurrentAuthDialog();
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <m.div
      initial={{ backgroundColor: "transparent", boxShadow: "none" }}
      animate={{
        // backgroundColor: scrollY < 20 ? "transparent" : "white",
        boxShadow:
          scrollY < 20 ? "none" : "0px 2px 5px -3px rgba(255,255,255,0.45)",
        opacity: scrollY < 20 ? "1" : "0",
      }}
      className="py-7 text-black lg:py-3"
    >
      <div className="container flex items-center justify-between">
        <Logo className="max-w-[130px] lg:max-w-[220px]" />
        <Navlinks />
        <span className="hidden items-stretch gap-x-3 lg:flex">
          <Link href="/learn-with-us">
            <Button className="rounded-full border border-gray-500 bg-transparent px-10 py-3 font-semibold capitalize text-gray-500">
              <p className="text-base leading-none">Learn with us</p>
            </Button>
          </Link>
          {!user ? (
            <span className="relative flex h-full flex-col items-stretch gap-y-1">
              <Dialog>
                <DialogTrigger
                  className="flex h-10 items-center justify-center rounded-full border border-primary bg-primary px-8 py-1 text-white transition-all ease-in-out hover:bg-transparent hover:text-primary"
                  onClick={() => setDialogOpen(true)}
                >
                  <UserCheck className="mr-2 h-4 w-4" strokeWidth={3} />
                  <p className="font-semibold">Login</p>
                </DialogTrigger>
                {dialogOpen && <AuthCard />}
              </Dialog>
            </span>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </span>

        {/*  For mobile*/}
        <Drawer direction="right" shouldScaleBackground={false}>
          <DrawerTrigger className="lg:hidden">
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="container flex h-full justify-end border-none bg-black/40 text-white lg:hidden">
            <span className="flex flex-col items-start gap-3 py-5 lg:hidden">
              <Button className="rounded-full border border-gray-50 bg-transparent px-10 py-3 text-base font-semibold capitalize leading-5 text-gray-50">
                Learn with us
              </Button>
              {user ? (
                <span className="flex items-start gap-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="flex flex-col items-start">
                    <Text
                      variant="text-md"
                      className="max-w-60 truncate"
                      medium
                    >
                      John Doe
                    </Text>
                    <Text
                      variant="text-sm"
                      className="max-w-60 truncate text-gray-400"
                      medium
                    >
                      xxx.xxx@gmail.com
                    </Text>
                  </span>
                </span>
              ) : (
                <span className="flex items-stretch gap-x-3">
                  <Dialog>
                    <DialogTrigger
                      className="flex h-10 items-center justify-center rounded-full bg-primary px-10 py-3 text-white"
                      onClick={() => setDialogOpen(true)}
                    >
                      <UserCheck className="mr-2 h-4 w-4" strokeWidth={3} />
                      <p className="font-semibold">Login</p>
                    </DialogTrigger>
                    {dialogOpen && <AuthCard />}
                  </Dialog>
                </span>
              )}

              <div className="flex hidden flex-row justify-center gap-x-2 brightness-200">
                {socialIcons.map((item) => (
                  <Link
                    key={`social-link-${item.name}`}
                    href={item.href}
                    target="_blank"
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.name} Icon`}
                      className="h-auto w-12"
                    />
                  </Link>
                ))}
              </div>
            </span>
          </DrawerContent>
        </Drawer>
      </div>
    </m.div>
  );
};

const Navlinks = () => {
  const navLinks = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Semesters",
      href: "/semesters",
    },
    {
      name: "Courses",
      href: "/courses",
    },
    // {
    //   name: "",
    //   href: "/blog",
    // },
    // {
    //   name: "Services",
    //   href: "/services",
    // },
    // {
    //   name: "Shop",
    //   href: "/shop",
    // },
    // {
    //   name: "Our Team",
    //   href: "/our-team",
    // },
  ];
  const router = useRouter();
  const pathname = usePathname();
  // for handling navlinks overflow in mobile
  const containerRef = useRef<HTMLDivElement>(null);
  const overflowDir = useOverflowDetection(containerRef);
  const [curScrollX, setCurScrollX] = useState(0);
  useEffect(() => {
    const scrollFn = (e: Event) => {
      setCurScrollX(containerRef?.current?.scrollLeft || 0);
    };
    containerRef?.current?.addEventListener("scroll", scrollFn);
    return () => containerRef?.current?.removeEventListener("scroll", scrollFn);
  }, []);
  return (
    <m.nav className="container relative w-full">
      {overflowDir === "left" || overflowDir === "both" ? (
        <div className="absolute left-4 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black shadow-lg shadow-white/10 lg:hidden">
          <ChevronLeft
            className="animate-chevron-left absolute text-xl text-primary"
            onClick={() =>
              containerRef?.current?.scroll({
                top: 0,
                left: curScrollX - 150,
                behavior: "smooth",
              })
            }
          />
        </div>
      ) : null}
      <div
        ref={containerRef}
        className="hide-scrollbar text-sm:gap-x-10 relative flex w-full justify-start gap-x-4 overflow-x-auto pb-2 md:justify-center lg:pb-6"
      >
        {navLinks.map((navLink) => (
          <Link
            key={`nav-link-${navLink.name}`}
            href={navLink.href}
            className={cn(
              "relative",
              pathname.includes(navLink.href) &&
                "text-primary after:absolute after:-bottom-2 after:h-1 after:w-full after:bg-primary after:content-[''] lg:after:-bottom-5",
            )}
          >
            <Text
              variant="text-xl"
              className="whitespace-nowrap text-sm lg:text-sm"
            >
              {navLink.name}
            </Text>
          </Link>
        ))}
      </div>

      {overflowDir === "right" || overflowDir === "both" ? (
        <div className="absolute right-4 top-1/2 z-10 grid aspect-square h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black shadow-xl shadow-white/10 lg:hidden">
          <ChevronRight
            className="animate-chevron-right absolute text-xl text-primary"
            onClick={() =>
              containerRef?.current?.scroll({
                top: 0,
                left: curScrollX + 150,
                behavior: "smooth",
              })
            }
          />
        </div>
      ) : null}
    </m.nav>
  );
};
