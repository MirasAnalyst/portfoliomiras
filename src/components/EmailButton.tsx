"use client";

import React from "react";
import { Button, IconButton, useToast } from "@once-ui-system/core";

interface EmailButtonProps {
  name: string;
  icon: string;
  size?: "s" | "m" | "l";
  variant?: "secondary" | "tertiary";
  showLabel?: boolean;
}

export const EmailButton: React.FC<EmailButtonProps> = ({ 
  name, 
  icon, 
  size = "l", 
  variant = "secondary",
  showLabel = false 
}) => {
  const { addToast } = useToast();
  
  const copyEmail = (): void => {
    const email = "mirasmuratov1998@gmail.com";
    navigator.clipboard.writeText(email).then(
      () => {
        addToast({
          variant: "success",
          message: `Email copied to clipboard: ${email}`,
        });
      },
      () => {
        addToast({
          variant: "danger",
          message: "Failed to copy email.",
        });
      },
    );
  };

  if (showLabel) {
    return (
      <Button
        onClick={copyEmail}
        prefixIcon={icon}
        label={name}
        size="s"
        weight="default"
        variant={variant}
      />
    );
  }

  return (
    <IconButton
      size={size}
      onClick={copyEmail}
      icon={icon}
      variant={variant}
      tooltip="Click to copy email"
    />
  );
};
