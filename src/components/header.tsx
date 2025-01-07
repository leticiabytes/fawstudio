import { Container } from "./container";
import { Button } from "./button";

import logo from "@/assets/logo.svg";

export function Header() {
  return (
    <>
      <header className="bg-darker relative z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
          >
            &nbsp;
            <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="bg-darker sticky top-0 text-white z-50">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          {/* <p className="text-xl font-semibold">FAW</p> */}
          <img src={logo} alt="FAW Logo" />
          <Button size="small">Book a call</Button>
        </Container>
      </div>
    </>
  );
}
