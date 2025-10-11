"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Fade,
  Flex,
  Line,
  Row,
  ToggleButton,
  Icon,
  IconButton,
  Column,
  Logo,
  ElementType
} from "@once-ui-system/core";

import {
  routes,
  display,
  person,
  about,
  blog,
  work,
  gallery,
} from "@/resources";

import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade
        s={{ hide: true }}
        fillWidth
        position="fixed"
        height="80"
        zIndex={9}
      />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Column
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="4"
        horizontal="around"
        // data-border="rounded"
        s={{
          position: "fixed",
        }}
        // border="neutral-alpha-weak"
        background="page"
        shadow="m"
        style={{
          backdropFilter: "blur(var(--static-space-1))",
        }}
      >
        {/* <Row
          paddingLeft="12"
          // fillWidth
          vertical="center"
          textVariant="body-default-s"
        >K</Row> */}
        <Row horizontal="between" paddingX="8">
          <Row vertical="center" align="start"><ElementType href="/"><Logo icon="/images/logo.png" size="s" /></ElementType></Row>
          <Row
            background="page"
            // border="neutral-alpha-weak"
            // radius="m-4"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
            >
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                  label="Home"
                />
              )}
              {/* <Line background="neutral-alpha-medium" vert maxHeight="24" /> */}
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={about.label}
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}
              {routes["/work"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="laptopCheck"
                      href="/work"
                      label={work.label}
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="laptopCheck"
                      href="/work"
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                </>
              )}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/blog"
                      label={blog.label}
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/blog"
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                </>
              )}
              <>
                <Row
                  s={{ hide: false }}
                  border="brand-alpha-medium"
                  radius="m"
                  background="brand-alpha-weak"
                >
                  <ToggleButton
                    prefixIcon="calendar"
                    href={about.calendar.link}
                    label="Let's chat"
                  />
                </Row>
                <Row hide s={{ hide: true }}>
                  <ToggleButton
                    prefixIcon="calendar"
                    href={about.calendar.link}
                  />
                </Row>
              </>

              {/* {routes["/gallery"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      label={gallery.label}
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                  <Row hide s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                </>
              )} */}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            {/* {display.themeSwitcher && (
              <>
                <Line background="neutral-alpha-medium" vert maxHeight="24" />
                <ThemeToggle />
              </>
            )} */}

            {/* <Row
              fitWidth
              border="brand-alpha-medium"
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              marginBottom="m"
              vertical="center"
              className={styles.blockAlign}
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
            >
              <Icon
                paddingLeft="12"
                name="calendar"
                onBackground="brand-weak"
              />
              <Row paddingX="8">Schedule a call</Row>
              <IconButton
                href={about.calendar.link}
                data-border="rounded"
                variant="secondary"
                icon="chevronRight"
              />
            </Row> */}
            {/* <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex> */}
          </Flex>
        </Flex>
      </Column>
    </>
  );
};
