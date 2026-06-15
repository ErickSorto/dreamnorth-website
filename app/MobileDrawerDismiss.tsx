"use client";

import { useEffect } from "react";

export default function MobileDrawerDismiss() {
  useEffect(() => {
    const drawer = document.querySelector<HTMLElement>(".dream-mobile-drawer");
    const toggle = document.querySelector<HTMLInputElement>("#dream-mobile-drawer");

    if (!drawer || !toggle) {
      return;
    }

    const drawerNode = drawer;
    const toggleNode = toggle;

    function dismissDrawer(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const interactive = target.closest("a, button, label");

      if (!interactive || !drawerNode.contains(interactive)) {
        return;
      }

      toggleNode.checked = false;
    }

    drawerNode.addEventListener("click", dismissDrawer);

    return () => {
      drawerNode.removeEventListener("click", dismissDrawer);
    };
  }, []);

  return null;
}
