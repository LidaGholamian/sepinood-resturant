"use client";

import { useState } from "react";

export function useMobileNav(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);

  function toggle() {
    setOpen((prev) => !prev);
  }

  function close() {
    setOpen(false);
  }

  return { open, setOpen, toggle, close };
}
