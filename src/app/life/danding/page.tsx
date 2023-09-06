'use client'
import React from "react";
import {Card, Skeleton, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Tabs, Tab} from "@nextui-org/react";
import { IconCircleKey, IconSelector, IconBadgeTm, IconDog, IconCat,IconPaw, IconLink } from '@tabler/icons-react';

export default function Page() {

  const [isLoaded, setIsLoaded] = React.useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };

  const icons = {
    chevron: <IconSelector  size={16} />,
    dog: <IconDog   size={30} />,
    cat: <IconCat   size={30} />,
    cat2: <IconPaw  size={30} />,
    flash: <IconCircleKey   size={30} />,
    server: <IconCircleKey  size={30} />,
    user: <IconCircleKey  size={30} />,
  };

  return (
    <>
      <Navbar>
      <NavbarBrand>
        <IconBadgeTm />
        <p className="ml-1 font-bold text-inherit">Timemit</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem >
          <Link color="foreground" href="/">
            Me
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem isActive>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Life
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.dog}
            >
              DanDing
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.cat}
            >
              KeGuan
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.cat2}
            >
              NaiTang
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#">
            Photoes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button size="sm" endContent={<IconLink size={16} />} as={Link} color="warning" href="https://fastuse.clouds" variant="flat">
            FastUseCloud
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button size="sm" endContent={<IconLink size={16} />} as={Link} color="warning" href="https://quanzi.io" variant="flat">
            Quanzi
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <Tabs variant={'underlined'} aria-label="Tabs variants">
          <Tab key="photos" title="Photos"/>
          <Tab key="music" title="Music"/>
          <Tab key="videos" title="Videos"/>
        </Tabs>
      <Card className="w-[200px] space-y-5 p-4" radius="2xl">
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <div className="h-24 rounded-lg bg-secondary"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary"></div>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
          </Skeleton>
        </div>
      </Card>
    </>

  );
}